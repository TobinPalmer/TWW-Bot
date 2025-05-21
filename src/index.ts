import 'dotenv/config'

import {
    ActivityType,
    Client,
    Collection,
    Events,
    GatewayIntentBits,
    Partials,
    PresenceUpdateStatus
} from 'discord.js'
import { readdirSync } from 'fs'
import { initDb } from './db/connect.js'
import deployGlobalCommands from './deployGlobalCommands.js'
import { userStates as UserStates } from './global.js'
import type ApplicationCommand from './templates/ApplicationCommand.js'
import type Event from './templates/Event.js'
import type MessageCommand from './templates/MessageCommand.js'
const { TOKEN } = process.env

// Discord client object
global.client = Object.assign(
    new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.DirectMessages
            // GatewayIntentBits.MessageContent
        ],
        partials: [Partials.Channel]
    }),
    {
        commands: new Collection<string, ApplicationCommand>(),
        msgCommands: new Collection<string, MessageCommand>()
    }
)

void (async () => {
    await initDb()
})()

await deployGlobalCommands()

// Set each command in the commands folder as a command in the client.commands collection
const commandFiles: string[] = readdirSync('./commands').filter(
    (file) => file.endsWith('.js') || file.endsWith('.ts')
)
for (const file of commandFiles) {
    const command: ApplicationCommand = (await import(`./commands/${file}`))
        .default as ApplicationCommand
    client.commands.set(command.data.name, command)
}

const msgCommandFiles: string[] = readdirSync('./messageCommands').filter(
    (file) => file.endsWith('.js') || file.endsWith('.ts')
)
for (const file of msgCommandFiles) {
    const command: MessageCommand = (await import(`./messageCommands/${file}`))
        .default as MessageCommand
    client.msgCommands.set(command.name, command)
}

// Event handling
const eventFiles: string[] = readdirSync('./events').filter(
    (file) => file.endsWith('.js') || file.endsWith('.ts')
)

for (const file of eventFiles) {
    const event: Event = (await import(`./events/${file}`)).default as Event
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args))
    } else {
        client.on(event.name, (...args) => event.execute(...args))
    }
}

export interface UserStateValue {
    name: string
    serial?: { str: string; num: number }
    value: number
    amount: number
}

const UserStates: UserStates = {}

global.userStates = UserStates

await client.login(TOKEN)

client.user?.setPresence({
    activities: [{ name: 'Wild West', type: ActivityType.Playing }],
    status: PresenceUpdateStatus.Idle
})

const searchArr = (arr: string[], s: string) => {
    for (const x of arr) if (x.includes(s)) return true
    return false
}

// Listen for messages

client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return
    const s = message.content.toLowerCase().split(' ')
    if (
        (searchArr(s, 'how') && searchArr(s, 'use') && searchArr(s, 'bot')) ||
        (searchArr(s, 'help') && searchArr(s, 'bot'))
    ) {
        await message.reply(
            `Wondering how to use the bot? Head over to <#1306489562050334790>! 
Start with \`/value\` and read <#1306909916526805012> for more information!`
        )
    }

    if (
        searchArr(s, '250k') ||
        searchArr(s, '250000') ||
        searchArr(s, '250 thousand') ||
        searchArr(s, '250,000')
    ) {
        await message.reply(
            `:question: Wondering about the 250k limit?
:calling: :envelope_with_arrow: Head over to the Roblox website and verify you email and phone number!
:arrow_up: This should expand the limit to 2M!`
        )
    }
})
