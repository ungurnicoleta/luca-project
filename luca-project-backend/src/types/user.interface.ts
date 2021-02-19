import { Document } from "mongoose"

interface IUser extends Document {
    name: string;
    email: string;
    avatar: string;
    password: string;
  }
   
  export default IUser;