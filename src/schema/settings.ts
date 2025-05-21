import mongoose, { Schema } from 'mongoose'

const botDailyStats = new Schema(
    // {
    //     date: { type: Date, required: true },
    //     count: { type: Number, required: true },
    //     type: {
    //         type: String,
    //         required: true,
    //         enum: ['value', 'trade', 'upgrade']
    //     }
    // },
    {
        userId: { type: String, required: true },
        privacy: { type: Boolean, required: true }
    },
    { collection: 'settings' }
)

const BotDailyStats = mongoose.model('settings', botDailyStats)
export default BotDailyStats
