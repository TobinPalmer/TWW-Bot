import { GuildMemberRoleManager, SlashCommandBuilder } from 'discord.js'
import { hasAccessToCommand } from '../bot/roles.js'
import { formatDisabledFeatures, isWhitelisted } from '../bot/whitelist.js'
import { getUserPrivateModeStatus, togglePrivateMode } from '../db/privacy.js'
import ApplicationCommand from '../templates/ApplicationCommand.js'

export default new ApplicationCommand({
    data: new SlashCommandBuilder()
        .setName('private')
        .setDescription('Toggle private mode for your requests'),

    execute: async (interaction) => {
        const serverId = interaction.guild?.id
        if (serverId && !isWhitelisted(serverId)) {
            await interaction.reply({
                // content: `:warning: This command is disabled in this server.`
                content: formatDisabledFeatures('private')
            })
            return
        }
        const roles = (interaction.member?.roles as GuildMemberRoleManager)
            .cache
        if (!roles || !hasAccessToCommand(roles)) {
            await interaction.reply({
                content: `:warning: Only Esteemed Members and above can use this command!
        Head over to <#1313740032007344139> to find out how to become an Esteemed Member.`
            })
            return
        }

        const userId = interaction.user.id
        await togglePrivateMode(userId)

        const status = await getUserPrivateModeStatus(userId)

        let str = 'Private mode is now '

        if (status) {
            str += `enabled!
:lock: All your requests will now be private!`
        } else {
            str += `disabled!
:unlock: All your requests will now be public!`
        }
        await interaction.reply({
            content: str
        })
    }
})
