import { hasAccessToCommand } from '../bot/roles.js'
import { formatDisabledFeatures, isWhitelisted } from '../bot/whitelist.js'
import { getUserPrivateModeStatus, togglePrivateMode } from '../db/privacy.js'
import MessageCommand from '../templates/MessageCommand.js'

export default new MessageCommand({
    name: 'private',
    description: 'Turns on private mode, only for Esteemed Members and above',
    async execute(message) {
        if (message.guild?.id && !isWhitelisted(message.guild?.id)) {
            await message.reply({
                // content: `:warning: This command is disabled in this server.`
                content: formatDisabledFeatures('private')
            })
            return
        }
        const roles = message.member?.roles.cache
        if (!roles || !hasAccessToCommand(roles)) {
            await message.reply({
                content: `:warning: Only Esteemed Members and above can use this command!
Head over to <#1313740032007344139> to find out how to become an Esteemed Member.`
            })
            return
        }

        const userId = message.author.id
        await togglePrivateMode(userId)

        const status = await getUserPrivateModeStatus(userId)

        let str = 'Private mode is now '

        if (status) {
            str += `enabled.
:lock: All your requests will now be private!`
        } else {
            str += `disabled!
:unlock: All your requests will now be public!`
        }
        await message.reply({
            content: str
        })
    }
})
