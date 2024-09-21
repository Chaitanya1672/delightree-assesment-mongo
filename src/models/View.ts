import mongoose, { Schema } from 'mongoose'
import type { Document } from 'mongoose'

interface IView extends Document {
  postId: mongoose.Schema.Types.ObjectId
  userId: mongoose.Schema.Types.ObjectId
  timestamp: Date
}

const viewSchema = new Schema<IView>({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, default: Date.now },
})

const View = mongoose.model<IView>('View', viewSchema)
export default View
