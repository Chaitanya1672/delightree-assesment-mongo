import mongoose from 'mongoose'

const uri = process.env.MONGO_DB_URL ?? ''
const dbName = process.env.DATABASE_NAME

async function connectToDatabase() {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(uri, {
        dbName,
      })
      console.log('Connected successfully to MongoDB via Mongoose')
    } catch (error) {
      console.error('Error connecting to MongoDB via Mongoose:', error)
      throw error
    }
  } else {
    console.log('Already connected to MongoDB')
  }
}

export default connectToDatabase
