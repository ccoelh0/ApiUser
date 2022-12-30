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

  register = async (newUser: IUser): Promise<IUserDTO> => {
    try {
      const created = await this.user.save(newUser)
      return new UserDTO(created)
    } catch (err) {
      throw new Error(`Something happened: ${err}`)
    }
  }

  getAllUsers = async (): Promise<IUser[]> => {
    try {
      return await this.user.getAll()
    } catch (err) {
      throw new Error(`Something happened: ${err}`)

    }
  }

  getAllUsersPaginated = async (page: number, usersPerPage: number, username?: string): Promise<IUserDTO[]> => {
    try {
      const users: IUser[] = await this.user.getAllPaginated(page, usersPerPage, username)
      const dto: IUserDTO[] = users.map((u: IUser) => new this.userDTO(u))
      return dto
    } catch (err) {
      throw new Error(`Something happened: ${err}`)
    }
  }
}

export default UserService