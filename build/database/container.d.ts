import { IUser } from "../models/models";
import { userModelType } from "../models/models";
export interface IUserContainer extends User {
}
declare class User {
    collection: userModelType;
    constructor();
    save: (user: IUser) => Promise<IUser>;
    getAll: () => Promise<IUser[]>;
    getAllPaginated: (page: number, usersPerPage: number, username?: string) => Promise<IUser[]>;
}
export default User;
