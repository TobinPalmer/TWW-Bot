import { SlashCommandBuilder } from 'discord.js'
import { getBotDailyStats, getBotLifetimeStats } from '../db/stats.js'
import ApplicationCommand from '../templates/ApplicationCommand.js'

export default new ApplicationCommand({
    data: new SlashCommandBuilder()
        .setName('stats')
        .setDescription('Get stats of the bot')
        .addStringOption((option) =>
            option
                .setName('type')
                .setDescription('Type of stats to get')
                .setRequired(true)
                .addChoices(
                    { name: 'daily', value: 'daily' },
                    { name: 'lifetime', value: 'lifetime' }
                )
        ) as SlashCommandBuilder,

    async execute(interaction) {
        const type = interaction.options.getString('type', true)
        if (type !== 'daily' && type !== 'lifetime') {
            await interaction.reply(
                ':warning: Invalid type. Must be either `daily` or `lifetime`'
            )
            return
        }

        const stats =
            type === 'daily'
                ? await getBotDailyStats()
                : await getBotLifetimeStats()

        const types = ['value', 'trade', 'upgrade', 'info']

        const counts = types.map(
            (type) => stats.find((stat) => stat.type === type)?.count || 0
        )
        const uniqueUsers = new Map<string, number>()
        for (const stat of stats) {
            const users = stat.users
            for (const user of users) {
                if (!uniqueUsers.has(user.userId)) {
                    uniqueUsers.set(user.userId, user.count)
                } else {
                    uniqueUsers.set(
                        user.userId,
                        uniqueUsers.get(user.userId)! + user.count
                    )
                }
            }
        }

        const [values, trades, upgrades, info] = counts
        const prefix = type === 'daily' ? 'Daily' : 'Total'

        await interaction.reply(
            `:money_with_wings: ${prefix} values calculated: \`${values}\`
:handshake: ${prefix} trades calculated: \`${trades}\`
:arrow_up: ${prefix} upgrades calculated: \`${upgrades}\`
:page_facing_up: ${prefix} info commands used: \`${info}\`
:100: ${prefix} unique users: \`${uniqueUsers.size}\`
`
        )
    }
})
