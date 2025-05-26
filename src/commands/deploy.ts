import { REST } from '@discordjs/rest'
import {
    RESTPostAPIApplicationCommandsJSONBody,
    Routes,
    SlashCommandBuilder
} from 'discord.js'
import { readdirSync } from 'fs'
import ApplicationCommand from '../templates/ApplicationCommand.js'

export default new ApplicationCommand({
    data: new SlashCommandBuilder()
        .setName('deploy')
        .setDescription('Deploys the slash commands')
        .addStringOption((option) =>
            option
                .setName('action')
                .setDescription('What to do with the commands')
                .setRequired(true)
                .addChoices(
                    { name: 'deploy', value: 'deploy' },
                    { name: 'undeploy', value: 'undeploy' }
                )
        )
        .addStringOption((option) =>
            option
                .setName('scope')
                .setDescription('Where to deploy the commands')
                .setRequired(true)
                .addChoices(
                    { name: 'guild', value: 'guild' },
                    { name: 'global', value: 'global' }
                )
        )
        .addStringOption((option) =>
            option
                .setName('server_id')
                .setDescription('Server ID to deploy/undeploy to (guild only)')
                .setRequired(false)
        ) as SlashCommandBuilder,

    async execute(interaction): Promise<void> {
        const { TOKEN, CLIENT_ID } = process.env as Record<string, string>
        const userId = interaction.user.id
        if (
            userId !== '749428779499126815' &&
            userId !== '719201218802614352'
        ) {
            await interaction.reply({
                content: ':x: You do not have permission to use this command!',
                ephemeral: true
            })
            return
        }

        const scope = interaction.options.getString('scope', true)
        const action = interaction.options.getString('action', true)
        const serverId = interaction.options.getString('server_id', false)

        if (action === 'deploy') {
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

            if (scope === 'global') {
                try {
                    await interaction.reply({ content: 'Deploying globally!' })
                    await rest.put(Routes.applicationCommands(CLIENT_ID), {
                        body: commands
                    })
                    await interaction.followUp({
                        content:
                            'Successfully deployed application (/) commands globally.'
                    })
                } catch (error) {
                    await interaction.followUp({
                        content: `Error: ${error as string}`
                    })
                }
            } else if (scope === 'guild') {
                const targetGuildId = serverId || interaction.guild?.id
                if (!targetGuildId) {
                    await interaction.reply({
                        content:
                            'No guild ID provided and command not used in a guild.',
                        ephemeral: true
                    })
                    return
                }
                try {
                    await interaction.reply({
                        content: `Deploying to guild \`${targetGuildId}\`!`
                    })
                    await rest.put(
                        Routes.applicationGuildCommands(
                            CLIENT_ID,
                            targetGuildId
                        ),
                        { body: commands }
                    )
                    await interaction.followUp({
                        content: `Successfully deployed application (/) commands to guild \`${targetGuildId}\`.`
                    })
                } catch (error) {
                    await interaction.followUp({
                        content: `Error: ${error as string}`
                    })
                }
            } else {
                await interaction.reply({
                    content: `Incorrect arguments! The correct format is \`/deploy <deploy|undeploy> <guild|global> [server_id]\``,
                    ephemeral: true
                })
            }
        } else if (action === 'undeploy') {
            if (scope === 'global') {
                await interaction.client.application?.commands.set([])
                await interaction.reply({
                    content: 'Undeployed all global commands.'
                })
            } else if (scope === 'guild') {
                const targetGuildId = serverId || interaction.guild?.id
                if (!targetGuildId) {
                    await interaction.reply({
                        content:
                            'No guild ID provided and command not used in a guild.',
                        ephemeral: true
                    })
                    return
                }
                // Use REST API to clear guild commands if serverId is provided, otherwise use interaction.guild?.commands.set([])
                if (serverId) {
                    const rest = new REST({ version: '10' }).setToken(TOKEN)
                    try {
                        await interaction.reply({
                            content: `Undeploying all commands in guild \`${targetGuildId}\`!`
                        })
                        await rest.put(
                            Routes.applicationGuildCommands(
                                CLIENT_ID,
                                targetGuildId
                            ),
                            { body: [] }
                        )
                        await interaction.followUp({
                            content: `Undeployed all commands in guild \`${targetGuildId}\`.`
                        })
                    } catch (error) {
                        await interaction.followUp({
                            content: `Error: ${error as string}`
                        })
                    }
                } else {
                    await interaction.guild?.commands.set([])
                    await interaction.reply({
                        content: 'Undeployed all guild commands.'
                    })
                }
            } else {
                await interaction.reply({
                    content: `Incorrect arguments! The correct format is \`/deploy <deploy|undeploy> <guild|global> [server_id]\``,
                    ephemeral: true
                })
            }
        } else {
            await interaction.reply({
                content: `Invalid action! Use \`deploy\` or \`undeploy\`.`,
                ephemeral: true
            })
        }
    }
})
