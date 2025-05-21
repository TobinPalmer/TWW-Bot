import mongoose, { Schema } from 'mongoose'

const privateMode = new Schema(
    {
        enabled: { type: Boolean, required: true },
        userId: { type: String, required: true }
    },
    { collection: 'private' }
)

const BotPrivateMode = mongoose.model('private', privateMode)
export default BotPrivateMode
