import { getBotDailyStats, getBotLifetimeStats } from '../db/stats.js'
import MessageCommand from '../templates/MessageCommand.js'

export default new MessageCommand({
    name: 'stats', // command name
    description: 'Get stats of the bot', // command description
    async execute(message, args) {
        const type = args[0]
        if (type !== 'daily' && type !== 'lifetime') {
            await message.reply(
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

        await message.reply(
            `:money_with_wings: ${prefix} values calculated: \`${values}\`
:handshake: ${prefix} trades calculated: \`${trades}\`
:arrow_up: ${prefix} upgrades calculated: \`${upgrades}\`
:page_facing_up: ${prefix} info commands used: \`${info}\`
:100: ${prefix} unique users: \`${uniqueUsers.size}\`
`
        )
    }
})
