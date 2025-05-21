// import { default as config } from '../config.json'
import { default as config } from '../config.json' with { type: 'json' }
import MessageCommand from '../templates/MessageCommand.js'

export default new MessageCommand({
    name: 'undeploy',
    description: 'Undeploys the slash commands',
    async execute(message, args): Promise<void> {
        // if (message.author.id !== OWNER_ID) return
        // const roles = message.member?.roles.cache
        // if (!roles || !hasAccessToCommand(roles, [Roles.Owner])) {
        if (
            message.author.id !== '749428779499126815' &&
            message.author.id !== '719201218802614352'
        ) {
            await message.reply({
                content: 'You do not have permission to use this command!'
            })
            return
        }

        if (!args[0]) {
            await message.reply(
                `Incorrect number of arguments! The correct format is \`${config.prefix}undeploy <guild/global>\``
            )
            return
        }

        if (args[0].toLowerCase() === 'global') {
            // global undeployment

            // undeploy the commands
            await client.application?.commands.set([])

            await message.reply({ content: 'Undeploying!' })
        } else if (args[0].toLowerCase() === 'guild') {
            // guild deployment

            // undeploy the commands
            await message.guild?.commands.set([])

            await message.reply({ content: 'Undeploying!' })
        }
    }
})
