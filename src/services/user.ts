import User from "../database/container";
import { IUser } from "../models/models";
import { IUserContainer } from "../database/container";
import UserDTO, { TypeUserDTO, IUserDTO } from "../dto/userDTO";

export interface IUserService extends UserService { }

class UserService {
  user: IUserContainer;
  userDTO: TypeUserDTO;

  constructor() {
    this.user = new User()
    this.userDTO = UserDTO
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
      return await this.user.getAll()
    } catch (err) {
      return err
    }
  }

  getAllUsersPaginated = async (page: number, usersPerPage: number, username?: string): Promise<IUser[] | any> => {
    try {
      const users: IUser[] = await this.user.getAllPaginated(page, usersPerPage, username)
      const dto: IUserDTO[] = users.map((u: IUser) => new this.userDTO(u))
      return dto
    } catch (err) {
      return err
    }
  }
}

export default UserService