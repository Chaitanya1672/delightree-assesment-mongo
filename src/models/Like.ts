import mongoose, { Schema } from 'mongoose'
import type { Document } from 'mongoose'

interface ILike extends Document {
  postId: mongoose.Schema.Types.ObjectId
  userId: mongoose.Schema.Types.ObjectId
  createdAt: Date
}

const likeSchema = new Schema<ILike>({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
})

const Like = mongoose.model<ILike>('Like', likeSchema)
export default Like
