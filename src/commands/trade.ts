import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import { getServerDate } from '../bot/server.js'
import { aggregateTrade } from '../bot/trading/aggregateTrade.js'
import { displayTrade } from '../bot/trading/displayTrade.js'
import { format } from '../bot/trading/format.js'
import { getTradeResult } from '../bot/trading/getTradeStatus.js'
import { logMessage } from '../bot/trading/value-base.js'
import { resetUserStates } from '../bot/user.js'
import { formatDisabledFeatures, isWhitelisted } from '../bot/whitelist.js'
import { getUserPrivateModeStatus } from '../db/privacy.js'
import { logBotResponse, LogType } from '../db/stats.js'
import ApplicationCommand from '../templates/ApplicationCommand.js'

export default new ApplicationCommand({
    data: new SlashCommandBuilder()
        .setName('trade')
        .setDescription(
            'Start an interactive session where you provide data step by step.'
        )
        .addSubcommand((subcommand) =>
            subcommand.setName('start').setDescription('Start a new session')
        )
        .addSubcommand((subcommand) =>
            subcommand.setName('end').setDescription('End the current session')
        ),

    async execute(interaction: ChatInputCommandInteraction): Promise<void> {
        if (!isWhitelisted(interaction.guild?.id ?? '')) {
            await interaction.reply({
                content: formatDisabledFeatures('trade'),
                ephemeral: false
            })
            return
        }

        const userId = interaction.user.id
        if (interaction.options.getSubcommand() === 'start') {
            if (!userStates[userId]) {
                userStates[userId] = resetUserStates()

                await interaction.reply({
                    content:
                        ':white_check_mark: Session started! Use `/offer` and `/counter` to add data to the trade. Use `/trade end` to finish.',
                    ephemeral: true
                })
            } else {
                await interaction.reply({
                    content:
                        ':warning: You already have an active session! Please type your next response or use `/trade end` to finish.',
                    ephemeral: true
                })
            }
            userStates[userId].trading = true
        }

        if (interaction.options.getSubcommand() === 'end') {
            if (!userStates[userId]) {
                await interaction.reply({
                    content:
                        ":warning: You don't have an active session! Use `/trade start` to begin.",
                    ephemeral: true
                })
                return
            }

            if (
                userStates[userId].offer.length === 0 &&
                userStates[userId].counter.length === 0
            ) {
                await interaction.reply({
                    content:
                        ':warning: Empty trade! Use `/offer` and `/counter` to add items to your offer and counter-offer.',
                    ephemeral: true
                })
                delete userStates[userId]

                return
            }

            const sessionData = userStates[userId]
            delete userStates[userId]

            await interaction.reply({
                content: `
\`\`\`ansi
[2;33mYour offer: [0m
${displayTrade(sessionData.offer)}

[2;33mTotal value of your offer: [0m
$${format(aggregateTrade(sessionData.offer))}

[2;34mTheir counter-offer: [0m
${displayTrade(sessionData.counter)}

[2;35m[2;34mTotal value of counter-offer: [0m[2;35m[0m
$${format(aggregateTrade(sessionData.counter))}
\`\`\`
**Result:**
${getTradeResult(aggregateTrade(sessionData.offer), aggregateTrade(sessionData.counter))}
                 `,
                ephemeral: await getUserPrivateModeStatus(userId)
            })

            await logMessage(
                `▬▬▬▬▬▬▬▬
:identification_card: __**User**__
> - *Username:* \`${interaction.user.username}\`
> - *User ID:* \`${interaction.user.id}\`

:desktop: **__Server:__**
> - *Guild Name:* \`${interaction.guild?.name}\`
> - *Guild ID:* \`${interaction.guild?.id}\`

:question: **__Request__**
> - *Request type:* \`/trade\`
> - *Private Mode*: \`${await getUserPrivateModeStatus(interaction.user.id)}\`
> - *Time* : \`${getServerDate().toLocaleDateString()} ${getServerDate().toLocaleTimeString()}\`
▬▬▬▬▬▬▬▬`
            )
            await logBotResponse(
                LogType.TRADE,
                userId,
                interaction.user.username
            )
        }
    }
})
