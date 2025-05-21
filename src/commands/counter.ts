import {
    execute,
    initCommand,
    newAutocomplete
} from '../bot/trading/value-base.js'
import ApplicationCommand from '../templates/ApplicationCommand.js'

export default new ApplicationCommand({
    data: initCommand('counter'),
    autocomplete: async (interaction) => newAutocomplete(interaction, 'value'),
    execute: async (interaction) => execute(interaction, false)
})
