import mongoose from "mongoose";
interface IUser {
    username: string;
    password: string;
}
type userModelType = typeof userModel;
declare const userModel: mongoose.Model<IUser, {}, {}, {}, any>;
export { userModel, userModelType, IUser };
