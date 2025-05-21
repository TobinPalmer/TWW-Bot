import { Schema } from 'mongoose'

const userSchema = new Schema({
    userName: { type: String, required: true },
    userId: { type: String, required: true },
    count: { type: Number, required: true }
})
export default userSchema
