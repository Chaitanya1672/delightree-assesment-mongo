import mongoose, { Schema } from 'mongoose'
import type { Document } from 'mongoose'

interface IComment extends Document {
  text: string;
  postId: mongoose.Schema.Types.ObjectId;
  userId: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
}

const commentSchema = new Schema<IComment>({
  text: { type: String, required: true },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model<IComment>('Comment', commentSchema);
export default Comment;