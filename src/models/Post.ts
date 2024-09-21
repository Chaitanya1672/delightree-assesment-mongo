import mongoose, { Schema } from 'mongoose'
import type { Document } from 'mongoose'
interface IPost extends Document {
  title: string
  content: string
  authorId: mongoose.Schema.Types.ObjectId
  createdAt: Date
}

const postSchema = new Schema<IPost>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
})

const Post = mongoose.model<IPost>('Post', postSchema)
export default Post
