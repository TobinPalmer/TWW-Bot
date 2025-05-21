import BotDailyStats from '../schema/bot-daily-stats'

export async function getUserSettings() {
    const query = { userId: '1234567890' }

    try {
        const stats = await BotDailyStats.find(query)
        return stats || {}
    } catch (error) {
        console.error('Error fetching bot daily stats with Mongoose:', error)
        throw error
    }
}
