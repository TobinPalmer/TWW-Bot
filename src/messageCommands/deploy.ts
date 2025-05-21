import { REST } from '@discordjs/rest'
import { RESTPostAPIApplicationCommandsJSONBody, Routes } from 'discord.js'
import { readdirSync } from 'fs'
// import { default as config } from '../config.json'
import { default as config } from '../config.json' with { type: 'json' }
import type ApplicationCommand from '../templates/ApplicationCommand.js'
import MessageCommand from '../templates/MessageCommand.js'

const { TOKEN, CLIENT_ID } = process.env as Record<string, string>

export default new MessageCommand({
    name: 'deploy',
    description: 'Deploys the slash commands',
    async execute(message, args): Promise<void> {
        // if (message.author.id !== OWNER_ID) return
        // const roles = message.member?.roles.cache
        // if (!roles || !hasAccessToCommand(roles, [Roles.Owner])) {
        if (
            message.author.id !== '749428779499126815' &&
            message.author.id !== '719201218802614352'
        ) {
            await message.reply({
                content: ':x: You do not have permission to use this command!'
            })
            return
        }

        if (!args[0]) {
            await message.reply({
                content: `Incorrect number of arguments! The correct format is \`${config.prefix}deploy <guild/global>\``
            })
            return
        }

        console.log(`Undeploying commands by ${message.author.tag}!}`)

        if (args[0].toLowerCase() === 'global') {
            // global deployment

            const commands: RESTPostAPIApplicationCommandsJSONBody[] = []
            const commandFiles: string[] = readdirSync('./commands').filter(
                (file) => file.endsWith('.js') || file.endsWith('.ts')
            )

            for (const file of commandFiles) {
                const command: ApplicationCommand = (
                    await import(`../commands/${file}`)
                ).default as ApplicationCommand
                const commandData = command.data.toJSON()
                commands.push(commandData)
            }

            const rest = new REST({ version: '10' }).setToken(TOKEN)

            try {
                console.log('Started refreshing application (/) commands.')

                await rest.put(Routes.applicationCommands(CLIENT_ID), {
                    body: commands
                })

                console.log('Successfully reloaded application (/) commands.')
            } catch (error) {
                console.error(error)
            }

            await message.reply({ content: 'Deploying!' })
        } else if (args[0].toLowerCase() === 'guild') {
            // guild deployment

            const commands: RESTPostAPIApplicationCommandsJSONBody[] = []
            const commandFiles: string[] = readdirSync('./commands').filter(
                (file) => file.endsWith('.js') || file.endsWith('.ts')
            )

            for (const file of commandFiles) {
                const command: ApplicationCommand = (
                    await import(`../commands/${file}`)
                ).default as ApplicationCommand
                const commandData = command.data.toJSON()
                commands.push(commandData)
            }

            const rest = new REST({ version: '10' }).setToken(TOKEN)

            try {
                console.log('Started refreshing application (/) commands.')

                await rest.put(
                    Routes.applicationGuildCommands(
                        CLIENT_ID,
                        message.guild?.id as string
                    ),
                    {
                        body: commands
                    }
                )

                console.log('Successfully reloaded application (/) commands.')
            } catch (error) {
                console.error(error)
            }

            await message.reply({ content: 'Deploying!' })
        }
    }
})
