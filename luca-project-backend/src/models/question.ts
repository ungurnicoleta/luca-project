import * as mongoose from 'mongoose';
import IQuestion from '../types/question.interface';
 
const questionSchema = new mongoose.Schema({
  author: String,
  title: String,
  description: String,
  noOfComments: Number
});
 
const questionModel = mongoose.model<IQuestion>('Question', questionSchema);
 
export default questionModel;