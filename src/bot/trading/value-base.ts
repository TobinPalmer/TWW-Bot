import {
    AutocompleteInteraction,
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    SlashCommandSubcommandBuilder,
    TextChannel
} from 'discord.js'
import { getUserPrivateModeStatus } from '../../db/privacy.js'
import { logBotResponse, LogType } from '../../db/stats.js'
import {
    auctionItem,
    isAuctionItem,
    isNonAuctionItem,
    ItemDictionaryKeys,
    nonAuctionItems
} from '../../itemDictionary.js'
import { infoItems } from '../../itemInfo.js'
import { formatNum } from '../number.js'
import {
    getHighestSerial,
    isSpecialSerial,
    parseSerialNumber,
    serialStatus,
    SerialValidationStatus,
    validateSerial
} from '../serial.js'
import { getServerDate } from '../server.js'
import { generateTrendString } from '../trend.js'
import {
    findItemByName,
    getItemValue,
    isCustomPrice,
    nameIsValid
} from '../value.js'
import { formatDisabledFeatures, isWhitelisted } from '../whitelist.js'

function addItems(command: SlashCommandSubcommandBuilder) {
    return command
        .setName('item')
        .setDescription('Adds items to the trade')
        .addStringOption((option) =>
            option
                .setName('name')
                .setDescription('The name of the item')
                .setRequired(true)
                .setAutocomplete(true)
        )
        .addStringOption((option) =>
            option
                .setName('serial')
                .setDescription('The serial number of the item')
        )
        .addIntegerOption((option) =>
            option.setName('amount').setDescription('The amount of the item')
        )
}

function addCash(command: SlashCommandSubcommandBuilder) {
    return command
        .setName('cash')
        .setDescription('Adds cash to the trade')
        .addStringOption((option) =>
            option
                .setName('cash-amount')
                .setDescription('The amount of cash')
                .setRequired(true)
        )
}

export function getAutocompleteChoices(
    type: 'value' | 'info' | 'auction'
): string[] {
    if (type === 'value') return [...auctionItem, ...nonAuctionItems]
    else if (type === 'info') return [...infoItems]
    else if (type === 'auction') return [...auctionItem]
    else return []
}

export async function newAutocomplete(
    interaction: AutocompleteInteraction,
    type: 'value' | 'info' | 'auction',
    commandName: string = 'name'
) {
    const focusedOption = interaction.options.getFocused(true)

    let choices: string[] = []

    if (type === 'value') {
        if (focusedOption.name === commandName)
            choices = getAutocompleteChoices('value')
    } else if (type === 'info') {
        if (focusedOption.name === 'item')
            choices = getAutocompleteChoices('info')
    } else if (type === 'auction') {
        if (focusedOption.name === 'name')
            choices = getAutocompleteChoices('auction')
    }

    const filtered = choices.filter((choice) =>
        choice.toLowerCase().includes(focusedOption.value.toLowerCase())
    )

    let options
    if (filtered.length > 25) {
        options = filtered.slice(0, 25)
    } else {
        options = filtered
    }

    await interaction.respond(
        options.map((choice) => ({ name: choice, value: choice }))
    )
}

async function validateItem(
    interaction: ChatInputCommandInteraction,
    name: string
) {
    if (!nameIsValid(name)) {
        await sendReply(
            interaction,
            `:warning: ${name} does not exist in my dataset`,
            true
        )
        return null
    }
    return findItemByName(name)
}

function addToUserState(
    userId: string,
    obj: {
        name: string
        value: number
        amount: number
    },
    offer: boolean
) {
    const state = userStates[userId]
    if (offer) state.offer.push(obj)
    else state.counter.push(obj)
}

async function sendReply(
    interaction: ChatInputCommandInteraction,
    content: string,
    ephemeral = true
) {
    await interaction.reply({
        content,
        ephemeral:
            ephemeral || (await getUserPrivateModeStatus(interaction.user.id))
    })
}

async function handleTrade(
    interaction: ChatInputCommandInteraction,
    name: ItemDictionaryKeys,
    obj: {
        name: string
        value: number
        amount: number
        serial?: { str: string; num: number }
    },
    trading: boolean,
    offer: boolean
) {
    if (trading) {
        addToUserState(interaction.user.id, obj, offer)
        const str = obj.serial
            ? obj.serial.str === 'high'
                ? `(high) `
                : `(${obj.serial.str}) `
            : ''

        const s = offer
            ? `:outbox_tray: You added ${name} ${str}${obj.amount > 1 ? `x${obj.amount} ` : ''}to your offer`
            : `:inbox_tray: They added ${name} ${str}${obj.amount > 1 ? `x${obj.amount} ` : ''}to the counter offer`
        await sendReply(interaction, s)
    } else {
        await logUserRequest(interaction, name, obj.serial?.num)
        let warningString = ''

        if (
            obj.serial?.num &&
            isSpecialSerial(obj.serial.num) &&
            !obj.serial.str.match(/[kMB]/) &&
            obj.serial.str !== 'high'
        ) {
            warningString = 'May get overpay due to special serial.'

            if (obj.serial.num <= 250) {
                warningString =
                    'May get overpay due to special serial and low serial.'
            }
        }

        if (
            obj.serial?.num &&
            obj.serial.num <= 250 &&
            !isSpecialSerial(obj.serial.num)
        ) {
            warningString = 'May get overpay due to low serial.'
        }

        await sendReply(
            interaction,
            `${name} ${obj.serial?.str ? `${obj.serial?.str} ` : ''}is worth around ${formatNum(obj.value)}
${generateTrendString(findItemByName(name), obj.serial ? obj.serial.num < 100 : undefined)}\n${warningString ? '-# ' : ''}${warningString}`,
            false
        )
    }
}

async function nonAuction(
    interaction: ChatInputCommandInteraction,
    offer: boolean,
    trading = true,
    itemAmount: number,
    name: string
) {
    const item = await validateItem(interaction, name)
    if (!item) return

    const itemPrice = item.price
    if (!itemPrice) {
        await sendReply(
            interaction,
            `:warning: ${name} does not exist in my dataset`
        )
        return
    }

    if (isCustomPrice(itemPrice)) {
        if (trading) {
            await sendReply(
                interaction,
                `:warning: ${name} cannot be added to trade calculations yet`,
                true
            )
            return
        } else {
            await logUserRequest(interaction, name)
            await sendReply(
                interaction,
                `${name} is worth around ${itemPrice}
${generateTrendString(item)}
            `,
                false
            )
        }
        return
    }

    const obj = {
        name,
        value: parseSerialNumber(itemPrice),
        amount: itemAmount
    }

    await handleTrade(
        interaction,
        name as ItemDictionaryKeys,
        obj,
        trading,
        offer
    )
}

async function auction(
    interaction: ChatInputCommandInteraction,
    offer: boolean,
    trading = true,
    itemAmount: number,
    serial: string,
    name: ItemDictionaryKeys
) {
    const item = await validateItem(interaction, name)
    if (!item) return

    const parsedSerial = parseSerialNumber(serial)

    const formatedSerial = `${serial === 'high' ? '' : '#'}${serial
        .replaceAll(',', '')
        .replaceAll('#', '')
        .trim()}`

    const serialValid = validateSerial(item, parsedSerial)

    if (serialValid === SerialValidationStatus.Invalid) {
        await sendReply(interaction, `:warning: Invalid serial number`)
        return
    }

    if (serialValid === SerialValidationStatus.Low) {
        await sendReply(interaction, `:warning: That serial number is too low`)
        return
    }

    const itemVal = getItemValue(name, parsedSerial)
    const itemName = item.officialName ?? 'Error'

    if (itemVal === -1) {
        await sendReply(
            interaction,
            `:warning: The serial ${itemName} ${formatedSerial} does not exist in my dataset`,
            trading
        )

        return
    }

    const obj = {
        name: name,
        serial: {
            str: formatedSerial,
            num: serial === 'high' ? getHighestSerial(name) : parsedSerial
        },
        value: parseSerialNumber(itemVal.LinReg),
        amount: itemAmount
    }

    await handleTrade(interaction, name, obj, trading, offer)
    return
}

async function cash(
    interaction: ChatInputCommandInteraction,
    offer: boolean,
    trading = true
) {
    const amount = interaction.options.getString('cash-amount', true)

    const parsedSerial = parseSerialNumber(amount)
    if (parsedSerial < 1) {
        await sendReply(interaction, ':warning: Invalid cash amount', true)

        return
    }

    const obj = {
        name: 'Cash',
        value: parseSerialNumber(amount),
        amount: 1
    }

    if (trading) {
        addToUserState(interaction.user.id, obj, offer)
    }

    await sendReply(
        interaction,
        offer
            ? `:outbox_tray: You have added $${amount} to your offer`
            : `:inbox_tray: They have added $${amount} to the counter offer`,
        true
    )
}

export async function execute(
    interaction: ChatInputCommandInteraction,
    offer: boolean,
    trading = true
) {
    const itemAmount = interaction.options.getInteger('amount') ?? 1
    const itemName = interaction.options.getString('name')
    const serial = interaction.options.getString('serial')

    if (!userStates[interaction.user.id] && trading) {
        await sendReply(
            interaction,
            ":warning: You don't have an active session! Use `/trade start` to begin.",
            true
        )
        return
    }

    if (!isWhitelisted(interaction.guild?.id ?? '') && trading) {
        await sendReply(interaction, formatDisabledFeatures('trade'), false)
        return
    }

    if (
        !itemName &&
        !serial &&
        interaction.options.getSubcommand() === 'cash'
    ) {
        await cash(interaction, offer, trading)
        return
    }

    if (!itemName) {
        await sendReply(
            interaction,
            ':warning: Please provide an item name',
            true
        )
        return
    }

    if (!nameIsValid(itemName)) {
        await sendReply(
            interaction,
            `:warning: ${itemName} does not exist in my dataset`,
            true
        )
        return
    }

    if (isNonAuctionItem(itemName) && serial) {
        await sendReply(
            interaction,
            `:warning: ${itemName} does not have serials`,
            true
        )
        return
    }

    const isAuction = isAuctionItem(itemName)
    if (isAuction && !serial) {
        await auction(interaction, offer, trading, itemAmount, 'high', itemName)
        return
    } else if (isAuction) {
        const parsedSerial = parseSerialNumber(serial!)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
        if (parsedSerial === serialStatus.FAILED) {
            await sendReply(interaction, `:warning: Invalid serial number`)
            return
        }

        // temporary disable low serials
        if (parsedSerial < 1000) {
            await sendReply(
                interaction,
                ':warning: Please ping `@value helper` in <#1398377467869397042> for any serials below 1000. This may change in the future.',
                true
            )
            return
        }

        await auction(
            interaction,
            offer,
            trading,
            itemAmount,
            serial!,
            itemName
        )
        return
    } else if (isNonAuctionItem(itemName)) {
        await nonAuction(interaction, offer, trading, itemAmount, itemName)
        return
    }

    if (interaction.options.getSubcommand() === 'cash') {
        await cash(interaction, offer, trading)
    }
}

export function initCommand(name: 'offer' | 'counter') {
    return new SlashCommandBuilder()
        .setName(name)
        .setDescription('Adds items to the trade')
        .addSubcommand(addItems)
        .addSubcommand(addCash)
}

export async function logUserRequest(
    interaction: ChatInputCommandInteraction,
    itemName: string,
    serial?: number
) {
    await logMessage(
        `▬▬▬▬▬▬▬▬
:identification_card: __**User**__
> - *Username:* \`${interaction.user.username}\`
> - *User ID:* \`${interaction.user.id}\`

:desktop: **__Server__**
> - *Guild Name:* \`${interaction.guild?.name}\`
> - *Guild ID:* \`${interaction.guild?.id}\`

:question: **__Request__**
> - *Request type:* \`/value\`
> - *Request*: \`${itemName} ${serial ? serial : ''}\`
> - *Private Mode*: \`${await getUserPrivateModeStatus(interaction.user.id)}\`
> - *Time* : \`${getServerDate().toLocaleDateString()} ${getServerDate().toLocaleTimeString()}\`
▬▬▬▬▬▬▬▬`
    )
    await logBotResponse(
        LogType.VALUE,
        interaction.user.id,
        interaction.user.username
    )
}

export async function logMessage(message: string) {
    const wealthyWestener = '1310477493786116136' // Wealthy Westerners
    const testingJon = '1310478030971469836' // Testing jon
    const channel = client.channels.cache.get(
        process.env.NODE_ENV === 'production' ? wealthyWestener : testingJon
    ) as TextChannel

    await channel.send(message)
}
