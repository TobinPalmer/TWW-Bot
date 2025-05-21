import mongoose, { Schema } from 'mongoose'
import userSchema from './userSchema.js'
const botDailyStats = new Schema(
    {
        date: { type: Date, required: true },
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
    { collection: 'daily' }
)

const BotDailyStats = mongoose.model('daily', botDailyStats)
export default BotDailyStats
