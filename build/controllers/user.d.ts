import { NextFunction, Request, Response } from 'express';
import { IUserService } from "../services/user";
export interface IUserController extends UserController {
}
declare class UserController {
    userService: IUserService;
    constructor();
    register: (req: Request, res: Response) => Promise<Response>;
    login: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getUsers: (req: Request, res: Response) => Promise<Response>;
}
export default UserController;
