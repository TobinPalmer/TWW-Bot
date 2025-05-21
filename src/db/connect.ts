import mongoose from 'mongoose'

export async function initDb() {
    const { MONGO_URI } = process.env

    if (!MONGO_URI) {
        throw new Error(
            'Please define the MONGO_URI environment variable inside .env.local'
        )
    }

    mongoose.connection.on('error', (err) => {
        console.error('Mongoose connection error:', err)
    })

    try {
        await mongoose.connect(MONGO_URI, {
            serverSelectionTimeoutMS: 5000
        })

        global.db = mongoose.connection
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err)
        throw err
    }
}
