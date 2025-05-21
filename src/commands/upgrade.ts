import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import {
    parseSerialNumber,
    SerialValidationStatus,
    validateSerial
} from '../bot/serial.js'
import { getServerDate } from '../bot/server.js'
import { logMessage, newAutocomplete } from '../bot/trading/value-base.js'
import { findItemByName, getItemValue, nameIsValid } from '../bot/value.js'
import { formatDisabledFeatures, isWhitelisted } from '../bot/whitelist.js'
import { getUserPrivateModeStatus } from '../db/privacy.js'
import { logBotResponse, LogType } from '../db/stats.js'
import { isAuctionItem } from '../itemDictionary.js'
import ApplicationCommand from '../templates/ApplicationCommand.js'

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

export default new ApplicationCommand({
    data: new SlashCommandBuilder()
        .setName('upgrade')
        .setDescription(
            'Find out how much you can upgrade an item with added cash'
        )
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
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName('cash')
                .setDescription('The cash you are offering to upgrade')
                .setRequired(true)
        ) as SlashCommandBuilder,

    autocomplete: async (interaction) =>
        newAutocomplete(interaction, 'auction'),

    async execute(interaction) {
        if (!isWhitelisted(interaction.guild?.id ?? '')) {
            await sendReply(
                interaction,
                formatDisabledFeatures('upgrade'),
                false
            )
            return
        }
        const name = interaction.options.getString('name', true)
        const serial = interaction.options.getString('serial', true)
        const cash = interaction.options.getString('cash', true)

        if (!nameIsValid(name)) {
            await sendReply(
                interaction,
                `:warning: ${name} does not exist in my dataset`
            )
            return
        }

        const item = findItemByName(name)
        const isAuction = isAuctionItem(name)

        if (!item || !isAuction || !item.serialRanges) {
            await sendReply(
                interaction,
                `:warning: ${name} is not an auction item`
            )
            return
        }

        let parsedSerial = parseSerialNumber(serial)
        console.log('parsedSerial', parsedSerial)

        const validSerial = validateSerial(item, parsedSerial)
        if (validSerial === SerialValidationStatus.Invalid) {
            await sendReply(interaction, ':warning: Invalid serial number')
            return
        }
        if (validSerial === SerialValidationStatus.Low) {
            await sendReply(interaction, ':warning: Serial number is too low')
            return
        }

        const value = getItemValue(name, parsedSerial, false)
        const cashValue = parseSerialNumber(cash)

        const formatedSerial = `${serial === 'high' ? '' : '#'}${serial
            .replaceAll(',', '')
            .replaceAll('#', '')
            .trim()}`

        if (value === -1) {
            await sendReply(interaction, ':warning: Invalid serial number')
            return
        }

        if (parsedSerial === -2) {
            parsedSerial = item.serialRanges[0].range[0]
        }

        if (cashValue <= 0) {
            await sendReply(interaction, ':warning: Invalid cash value')
            return
        }

        const newValue = value.LinReg + cashValue

        let high = parsedSerial
        let low = item.serialRanges[item.serialRanges.length - 1].range[1]

        while (low < high) {
            const mid = Math.floor((low + high) / 2)
            const midValue = getItemValue(name, mid, false)

            if (midValue === -1) {
                high = mid
            } else {
                if (midValue.LinReg > newValue) {
                    low = mid + 1
                } else {
                    high = mid
                }
            }
        }

        await logMessage(
            `▬▬▬▬▬▬▬▬
:identification_card: __**User**__
> - *Username:* \`${interaction.user.username}\`
> - *User ID:* \`${interaction.user.id}\`

:desktop: **__Server__**
> - *Guild Name:* \`${interaction.guild?.name}\`
> - *Guild ID:* \`${interaction.guild?.id}\`

:question: **__Request__**
> - *Request type:* \`/upgrade\`
> - *Request*: \`${name} ${serial ? serial : ''}\`
> - *Added cash*: \`${cash}\`
> - *Private Mode*: \`${await getUserPrivateModeStatus(interaction.user.id)}\`
> - *Time* : \`${getServerDate().toLocaleDateString()} ${getServerDate().toLocaleTimeString()}\`
▬▬▬▬▬▬▬▬`
        )

        await logBotResponse(
            LogType.UPGRADE,
            interaction.user.id,
            interaction.user.username
        )

        const average = Math.floor((low + high) / 2)
        if (
            Math.abs(average - parsedSerial) <= 5 ||
            newValue - value.LinReg < 500
        ) {
            await sendReply(
                interaction,
                `:warning: The cash you are offering is too low to upgrade this item`
            )
            return
        }

        const newCost = getItemValue(name, average, false)
        if (newCost === -1) return
        const remainingCash = cashValue + value.LinReg - newCost.LinReg
        const rounded = Math.round(Math.round(remainingCash) / 100) * 100

        await sendReply(
            interaction,
            `:scales: ${name} ${formatedSerial} + $${cash} can be traded for ${name} #${average}
:dollar: Remaining cash: $${rounded}`,
            false
        )
    }
})
