import { Document } from "mongoose"
import mongoose from "mongoose"

interface IQuestion extends Document {
  author: string
  title: string
  description: string
  noOfComments: number
}

export default IQuestion;