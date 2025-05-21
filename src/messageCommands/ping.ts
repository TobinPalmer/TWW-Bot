import { TextChannel } from 'discord.js'
import MessageCommand from '../templates/MessageCommand.js'

export default new MessageCommand({
    name: 'ping',
    description: 'Get the uptime of the bot',
    async execute(message) {
        const sent = await (message.channel as TextChannel).send({
            content: 'Pinging...'
        })

        await sent.edit(
            `Uptime: ${convertMinutesToReadableTime(
                Math.round(message.client.uptime / 60000)
            )}
Rountrip Latency: ${sent.createdTimestamp - message.createdTimestamp}ms`
        )
    }
})

function convertMinutesToReadableTime(totalMinutes: number): string {
    const minutesInHour = 60
    const minutesInDay = 24 * minutesInHour
    const minutesInWeek = 7 * minutesInDay
    const minutesInMonth = 30 * minutesInDay

    const months = Math.floor(totalMinutes / minutesInMonth)
    totalMinutes %= minutesInMonth

    const weeks = Math.floor(totalMinutes / minutesInWeek)
    totalMinutes %= minutesInWeek

    const days = Math.floor(totalMinutes / minutesInDay)
    totalMinutes %= minutesInDay

    const hours = Math.floor(totalMinutes / minutesInHour)
    const minutes = totalMinutes % minutesInHour

    let result = ''
    if (months > 0) result += `${months} month${months > 1 ? 's' : ''}`
    if (weeks > 0)
        result += (result ? ', ' : '') + `${weeks} week${weeks > 1 ? 's' : ''}`
    if (days > 0)
        result += (result ? ', ' : '') + `${days} day${days > 1 ? 's' : ''}`
    if (hours > 0)
        result += (result ? ', ' : '') + `${hours} hour${hours > 1 ? 's' : ''}`
    if (minutes > 0)
        result +=
            (result ? ', ' : '') + `${minutes} minute${minutes > 1 ? 's' : ''}`

    return result || '0 minutes' // Handle case for 0 minutes
}
