import MessageCommand from '../templates/MessageCommand.js'

export default new MessageCommand({
    name: 'help',
    description: 'Help with the bot', // command description
    async execute(message) {
        await message.reply(``)
    }
})
