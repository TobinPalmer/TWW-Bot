import mongoose, { Schema } from 'mongoose'
import userSchema from './userSchema.js'

const botLifetimeStatsSchema = new Schema(
    {
        count: { type: Number, required: true },
        users: {
            type: [userSchema],
            required: true
        },
        type: {
            type: String,
            required: true,
            enum: ['value', 'trade', 'upgrade', 'info']
        }
    },
    { collection: 'lifetime' }
)

const BotLifetimeStats = mongoose.model('lifetime', botLifetimeStatsSchema)
export default BotLifetimeStats
