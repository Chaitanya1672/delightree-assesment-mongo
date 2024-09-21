import mongoose, { Schema } from 'mongoose'
import type { Document } from 'mongodb'

interface IUser extends Document {
  username: string
  email: string
  age: number
  createdAt: Date
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
})

const User = mongoose.model<IUser>('User', userSchema)

export default User
