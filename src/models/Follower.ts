import mongoose, { Schema } from 'mongoose'
import type { Document } from 'mongoose'

interface IFollower extends Document {
  followerId: mongoose.Schema.Types.ObjectId
  followeeId: mongoose.Schema.Types.ObjectId
  createdAt: Date
}

const followerSchema = new Schema<IFollower>({
  followerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  followeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
})

const Follower = mongoose.model<IFollower>('Follower', followerSchema)
export default Follower
