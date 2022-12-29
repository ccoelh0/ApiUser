import User from "../database/container";
import { IUser, userModelType } from "../models/models";
import { IUserContainer } from "../database/container";

export interface IUserService extends UserService { }

class UserService {
  user: IUserContainer;

  constructor() {
    this.user = new User()
  }

  register = async (newUser: IUser): Promise<IUser | any> => {
    try {
      return await this.user.save(newUser) as IUser
    } catch (err) {
      return err
    }
  }

  getAllUsers = async (): Promise<IUser | any> => {
    try {
      return await this.user.getAll() as IUser[]
    } catch (err) {
      return err
    }
  }

  getAllUsersPaginated = async (page: number, usersPerPage: number): Promise<IUser[] | any> => {
    try {
      return await this.user.getAllPaginated(page, usersPerPage) as IUser[]
    } catch (err) {
      return err
    }
  }

}

export default UserService