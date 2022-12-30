import express, { NextFunction, Request, Response } from 'express'
import { IUserService } from "../services/user";
import UserService from "../services/user";
import { IUser } from '../models/models';
import { signJwt, verifyJwt } from '../middlewares/jwt'
import { IUserDTO } from '../dto/userDTO'

export interface IUserController extends UserController { }

class UserController {
  userService: IUserService

  constructor() {
    this.userService = new UserService()
  }

  register = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ data: `User ${req.body.username} created successfully` });
  }

  login = async (req: Request, res: Response, next: NextFunction) => {
    const user: IUser = { username: req.body.username, password: req.body.password }
    return signJwt(res, next, user)
  }

  getUsers = async (req: Request, res: Response): Promise<Response> => {
    const page = Number(req.query.page) || 0
    const usersPerPage = 3
    const findByUsername = req.query.username !== undefined

    try {
      verifyJwt(req['token'])
      if (findByUsername) {
        return res.status(200).json(await this.userService.getAllUsersPaginated(page, usersPerPage, `${req.query.username}`))
      } else {
        const users: IUserDTO[] = await this.userService.getAllUsersPaginated(page, usersPerPage)
        return res.status(200).json(users)
      }
    } catch (err) {
      return res.status(500).json(`Internal error: ${err}`)
    }
  }
}

export default UserController