import BotPrivateMode from '../schema/private-mode.js'

const memory: { [key: string]: boolean } = {}

export async function togglePrivateMode(userId: string) {
    const currentMode = await BotPrivateMode.findOne({ userId }).exec()

    const res = !(currentMode?.enabled || false)

    await BotPrivateMode.updateOne(
        { userId: userId },
        { $set: { enabled: res } },
        { upsert: true }
    ).exec()

    memory[userId] = res
}

export async function getUserPrivateModeStatus(userId: string) {
    const res = await BotPrivateMode.findOne({ userId }).exec()
    memory[userId] = res?.enabled || false
    return memory[userId]
}
