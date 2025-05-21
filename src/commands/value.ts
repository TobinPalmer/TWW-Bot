import { SlashCommandBuilder } from 'discord.js'
import { execute, newAutocomplete } from '../bot/trading/value-base.js'
import ApplicationCommand from '../templates/ApplicationCommand.js'

export default new ApplicationCommand({
    data: new SlashCommandBuilder()
        .setName('value')
        .setDescription('Get the value of an item')
        .addStringOption((option) =>
            option
                .setName('name')
                .setDescription('The name of the item')
                .setRequired(true)
                .setAutocomplete(true)
        )
        .addStringOption((option) =>
            option
                .setName('serial')
                .setDescription('The serial number of the item')
        ) as SlashCommandBuilder,

    // autocomplete: async (interaction) => autocomplete(interaction),
    autocomplete: async (interaction) => newAutocomplete(interaction, 'value'),
    execute: async (interaction) => execute(interaction, true, false)
})
