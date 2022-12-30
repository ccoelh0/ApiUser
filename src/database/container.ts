import { IUser } from "../models/models";
import { userModelType, userModel } from "../models/models";

export interface IUserContainer extends User { }

class User {
  collection: userModelType;

  constructor() {
    this.collection = userModel;
  }

  save = async (user: IUser): Promise<IUser> => {
    const newUser = new this.collection(user);

    try {
      return await newUser.save();
    } catch (err) {
      throw new Error(`Something happened: ${err}`)
    }
  };

  getAll = async (): Promise<IUser[]> => {
    try {
      return await this.collection.find();
    } catch (err) {
      throw new Error(`Something happened: ${err}`)
    }
  };

  getAllPaginated = async (page: number, usersPerPage: number, username?: string): Promise<IUser[]> => {
    try {
      if (username !== undefined) {
        return await this.collection
          .find({ username })
          .skip((page * usersPerPage))
          .limit(usersPerPage)
      } else {
        return await this.collection
          .find()
          .skip((page * usersPerPage))
          .limit(usersPerPage)
      }
    } catch (err) {
      throw new Error(`Something happened: ${err}`)
    }
  }
}

export default User