import mongoose, { Schema } from 'mongoose'
import type { Document } from 'mongoose'

interface ITag extends Document {
  name: string
}

const tagSchema = new Schema<ITag>({
  name: { type: String, required: true },
})

const Tag = mongoose.model<ITag>('Tag', tagSchema)
export default Tag
