import { IUser } from "../models/models";
import { userModelType, userModel } from "../models/models";

export interface IUserContainer extends User { }

class User {
  collection: userModelType;

  constructor() {
    this.collection = userModel;
  }

  save = async (user: IUser) => {
    const newUser = new this.collection(user);

    try {
      return await newUser.save();
    } catch (err) {
      return err;
    }
  };

  getAll = async () => {
    try {
      return await this.collection.find();
    } catch (err) {
      return err;
    }
  };

  getAllPaginated = async (page: number, usersPerPage: number) => {
    try {
      return await this.collection
        .find()
        .sort({ author: 1 })
        .skip((page * usersPerPage))
        .limit(usersPerPage)
    } catch (err) {
      return err
    }
  }
}

export default User