import { IUser } from "../models/models";
export interface IUserDTO extends UserDTO {
}
declare class UserDTO {
    username: string;
    constructor({ username }: IUser);
}
export type TypeUserDTO = typeof UserDTO;
export default UserDTO;
