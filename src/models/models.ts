import mongoose from "mongoose";
import pkg, {InferSchemaType} from "mongoose";

interface IUser {
  username: string,
  password: string
}

type userModelType = typeof userModel

const { Schema } = pkg;

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const userModel = mongoose.model<IUser>('user', userSchema)

export {userModel, userModelType, IUser}