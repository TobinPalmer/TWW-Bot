import { getServerDate } from '../bot/server.js'
import BotDailyStats from '../schema/bot-daily-stats.js'
import BotLifetimeStats from '../schema/bot-lifetime-stats.js'

export enum LogType {
    VALUE = 'value',
    TRADE = 'trade',
    UPGRADE = 'upgrade',
    INFO = 'info'
}

export async function logBotResponse(
    type: LogType,
    userId: string,
    userName: string
) {
    const today = getServerDate()
    const beginingOfToday = new Date(today.setHours(0, 0, 0, 0))
    const date = beginingOfToday.toISOString().split('T')[0]

    const userExists = await BotDailyStats.exists({
        date,
        'users.userId': userId,
        type
    })

    if (!userExists) {
        await BotDailyStats.updateOne(
            { date, type },
            {
                $push: {
                    users: {
                        userId,
                        userName,
                        count: 1
                    }
                },
                $inc: { count: 1 }
            },
            { upsert: true }
        )
    } else {
        await BotDailyStats.updateOne(
            { date, 'users.userId': userId, type },
            {
                $inc: { 'users.$.count': 1, count: 1 }
            },
            { upsert: false }
        )
    }

    const userExistsLifetime = await BotLifetimeStats.exists({
        'users.userId': userId,
        type
    })
    if (!userExistsLifetime) {
        await BotLifetimeStats.updateOne(
            { type },
            {
                $push: {
                    users: {
                        userId,
                        userName,
                        count: 1
                    }
                },
                $inc: { count: 1 }
            },
            { upsert: true }
        )
    } else {
        await BotLifetimeStats.updateOne(
            { 'users.userId': userId, type },
            {
                $inc: { 'users.$.count': 1, count: 1 }
            },
            { upsert: false }
        )
    }
}

export async function getBotLifetimeStats() {
    try {
        const stats = await BotLifetimeStats.find()
        return stats || {}
    } catch (error) {
        console.error('Error fetching bot lifetime stats with Mongoose:', error)
        throw error
    }
}

export async function getBotDailyStats() {
    try {
        const query = {
            date: new Date(getServerDate().setHours(0, 0, 0, 0))
                .toISOString()
                .split('T')[0]
        }
        const stats = await BotDailyStats.find(query)
        return stats || {}
    } catch (error) {
        console.error('Error fetching bot daily stats with Mongoose:', error)
        throw error
    }
}
