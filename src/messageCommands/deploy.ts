import { REST } from '@discordjs/rest'
import { RESTPostAPIApplicationCommandsJSONBody, Routes } from 'discord.js'
import { readdirSync } from 'fs'
import { default as config } from '../config.json' with { type: 'json' }
import type ApplicationCommand from '../templates/ApplicationCommand.js'
import MessageCommand from '../templates/MessageCommand.js'

const { TOKEN, CLIENT_ID } = process.env as Record<string, string>

export default new MessageCommand({
    name: 'deploy',
    description: 'Deploys or undeploys the slash commands',
    async execute(message, args): Promise<void> {
        if (
            message.author.id !== '749428779499126815' &&
            message.author.id !== '719201218802614352'
        ) {
            await message.reply({
                content: ':x: You do not have permission to use this command!'
            })
            return
        }

        if (!args[0] || !args[1]) {
            await message.reply({
                content: `Incorrect number of arguments! The correct format is \`${config.prefix}deploy <deploy|undeploy> <guild|global>\``
            })
            return
        }

        const action = args[0].toLowerCase()
        const scope = args[1].toLowerCase()

        if (
            (action !== 'deploy' && action !== 'undeploy') ||
            (scope !== 'guild' && scope !== 'global')
        ) {
            await message.reply({
                content: `Invalid arguments! The correct format is \`${config.prefix}deploy <deploy|undeploy> <guild|global>\``
            })
            return
        }

        if (action === 'deploy' && scope === 'global') {
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

            await message.reply({ content: 'Deploying globally!' })
        } else if (action === 'deploy' && scope === 'guild') {
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

            await message.reply({ content: 'Deploying in this guild!' })
        } else if (action === 'undeploy' && scope === 'global') {
            // global undeployment
            await message.client.application?.commands.set([])
            await message.reply({ content: 'Undeploying globally!' })
        } else if (action === 'undeploy' && scope === 'guild') {
            // guild undeployment
            await message.guild?.commands.set([])
            await message.reply({ content: 'Undeploying in this guild!' })
        }
    }
})
