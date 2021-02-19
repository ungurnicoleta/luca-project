import { Document } from "mongoose"
import mongoose from "mongoose"

interface IQuestion extends Document {
  author: {
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
  },
  title: string
  description: string
  noOfComments: number
}

export default IQuestion;