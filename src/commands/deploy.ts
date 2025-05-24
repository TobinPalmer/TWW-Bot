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
                try {
                    await interaction.reply({ content: 'Deploying to guild!' })
                    await rest.put(
                        Routes.applicationGuildCommands(
                            CLIENT_ID,
                            interaction.guild?.id as string
                        ),
                        { body: commands }
                    )
                    await interaction.followUp({
                        content:
                            'Successfully deployed application (/) commands to this guild.'
                    })
                } catch (error) {
                    await interaction.followUp({
                        content: `Error: ${error as string}`
                    })
                }
            } else {
                await interaction.reply({
                    content: `Incorrect arguments! The correct format is \`/deploy <deploy|undeploy> <guild|global>\``,
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
                await interaction.guild?.commands.set([])
                await interaction.reply({
                    content: 'Undeployed all guild commands.'
                })
            } else {
                await interaction.reply({
                    content: `Incorrect arguments! The correct format is \`/deploy <deploy|undeploy> <guild|global>\``,
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
