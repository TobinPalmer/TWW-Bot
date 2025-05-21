import { SlashCommandBuilder } from 'discord.js'
import { getServerDate } from '../bot/server.js'
import { logMessage, newAutocomplete } from '../bot/trading/value-base.js'
import { logBotResponse, LogType } from '../db/stats.js'
import { getItemInfo, isInfoKey, PenetrationType } from '../itemInfo.js'
import ApplicationCommand from '../templates/ApplicationCommand.js'

export default new ApplicationCommand({
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Gets information about an item')
        .addStringOption((option) =>
            option
                .setName('item')
                .setDescription('The item to get information about')
                .setAutocomplete(true)
                .setRequired(true)
        ) as SlashCommandBuilder,

    autocomplete: async (interaction) =>
        await newAutocomplete(interaction, 'info'),

    async execute(interaction): Promise<void> {
        const item = interaction.options.getString('item', true)
        if (!isInfoKey(item)) {
            await interaction.reply({
                content:
                    ':warning: This item has not been added to the `/info` command yet.',
                ephemeral: true
            })
            return
        }

        const value = getItemInfo(item)
        let output = '**__Damage Stats__**\n'
        const images = value.images

        if (value.damage.bodyshot && value.damage.headshot) {
            output += `- :gun: Bodyshot Damage: \`${value.damage.bodyshot}\`\n`
            output += `- :gun: Headshot Damage: \`${value.damage.headshot}\`\n`
        }

        if (value.damage.melee)
            output += `- :dagger: Melee Damage: \`${value.damage.melee}\`\n`

        if (value.penetration) {
            let emoji = ''
            switch (value.penetration) {
                case PenetrationType.STRONGEST:
                    emoji = ':fire:'
                    break
                case PenetrationType.VERY_STRONG:
                    emoji = ':thumbsup:'
                    break
                case PenetrationType.STRONG:
                    emoji = ':green_circle:'
                    break
                case PenetrationType.AVERAGE:
                    emoji = ':yellow_circle:'
                    break
                case PenetrationType.WEAK:
                    emoji = ':red_circle:'
                    break
                case PenetrationType.VERY_WEAK:
                    emoji = ':thumbsdown:'
                    break
                case PenetrationType.WEAKEST:
                    emoji = ':face_vomiting:'
                    break
            }
            output += `- ${emoji} Penetration: \`${value.penetration}\`\n`
        }

        if (value.fireRate)
            output += `- :100: Fire Rate: \`${value.fireRate}\` times per minute\n`
        if (value.fanFireRate)
            output += `- :100: Fan Fire Rate: \`${value.fanFireRate}\` times per minute\n`
        if (value.swingRate)
            output += `- :stopwatch: Swing Rate \`${value.swingRate}\`\n`
        if (value.reloadSpeed)
            output += `- :arrows_counterclockwise: Reload Speed: \`${value.reloadSpeed}\` seconds\n`
        if (value.ammoCapacity)
            output += `- :bucket: Ammo Capacity: \`${value.ammoCapacity}\`\n`
        if (value.damage.pellets)
            output += `- :shell: Pellets: \`${value.damage.pellets}\`\n`
        if (value.accuracy)
            output += `- :dart: Accuracy: \`${value.accuracy}%\`\n`
        if (value.attacks) {
            output += `- :crossed_swords: Attacks: \`${value.attacks}\`\n`
        }

        if (images.dropoff)
            output += `\n[Item Drop-off Stats](${images.dropoff})\n`

        await interaction.reply(output)

        output = '**__Origin__**\n'

        if (value.price) {
            output += `- :dollar: Price: \`$${value.price}\`\n`
        }

        output += `- :map: Purchase Location: \`${value.purchaseLocation}\`\n`

        if (!images.description && images.inventory)
            output += `- :page_facing_up: Description: \`${value.description}\`\n\n[Item In Inventory](${images.inventory})`
        else if (images.inventory)
            output += `\n[Item In Inventory](${images.inventory})`

        if (images.description) {
            output += `\n[Description](${images.description})`
        } else if (!images.inventory) {
            output += `- :page_facing_up: Description: \`${value.description}\`\n\n`
        }

        if (images.wiki) output += `\n[Wiki Image](${images.wiki})\n`
        await interaction.followUp({
            content: output
        })
        await logMessage(`▬▬▬▬▬▬▬▬
:identification_card: __**User**__
> - *Username:* \`${interaction.user.username}\`
> - *User ID:* \`${interaction.user.id}\`

:desktop: **__Server__**
> - *Guild Name:* \`${interaction.guild?.name}\`
> - *Guild ID:* \`${interaction.guild?.id}\`

:question: **__Request__**
> - *Request type:* \`/info\`
> - *Request*: \`${item}\`
> - *Time* : \`${getServerDate().toLocaleDateString()} ${getServerDate().toLocaleTimeString()}\`
▬▬▬▬▬▬▬▬`)
        await logBotResponse(
            LogType.INFO,
            interaction.user.id,
            interaction.user.username
        )
    }
})
