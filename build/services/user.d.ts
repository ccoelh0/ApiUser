import { IUser } from "../models/models";
import { IUserContainer } from "../database/container";
import { TypeUserDTO, IUserDTO } from "../dto/userDTO";
export interface IUserService extends UserService {
}
declare class UserService {
    user: IUserContainer;
    userDTO: TypeUserDTO;
    constructor();
    register: (newUser: IUser) => Promise<IUserDTO>;
    getAllUsers: () => Promise<IUser[]>;
    getAllUsersPaginated: (page: number, usersPerPage: number, username?: string) => Promise<IUserDTO[]>;
}
export default UserService;
