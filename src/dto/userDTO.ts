import { IUser } from "../models/models";

export interface IUserDTO extends UserDTO{}

class UserDTO {
  username: string;

  constructor({ username }: IUser) {
    this.username = username;
  }
}

export type TypeUserDTO = typeof UserDTO

export default UserDTO;