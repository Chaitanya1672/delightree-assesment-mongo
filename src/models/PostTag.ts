import mongoose, { Schema } from 'mongoose'
import type { Document } from 'mongoose'

interface IPostTag extends Document {
  postId: mongoose.Schema.Types.ObjectId
  tagId: mongoose.Schema.Types.ObjectId
  createdAt: Date
}

const postTagSchema = new Schema<IPostTag>({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  tagId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tag', required: true },
  createdAt: { type: Date, default: Date.now },
})

const PostTag = mongoose.model<IPostTag>('PostTag', postTagSchema)
export default PostTag
