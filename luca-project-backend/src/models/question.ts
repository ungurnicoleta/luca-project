import * as mongoose from 'mongoose';
import IQuestion from '../types/question.interface';
 
const questionSchema = new mongoose.Schema({
  author: {
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
  },
  title: String,
  description: String,
  noOfComments: Number
});
 
const questionModel = mongoose.model<IQuestion & mongoose.Document>('Question', questionSchema);
 
export default questionModel;