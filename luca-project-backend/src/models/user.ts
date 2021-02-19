import * as mongoose from 'mongoose';
import IUser from '../types/user.interface';
 
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  password: String,
});
 
const userModel = mongoose.model<IUser>('User', userSchema);
 
export default userModel;
