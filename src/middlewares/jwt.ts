import { Request, Response, NextFunction } from 'express'
import { IUser } from '../models/models'
import config from '../config/config'
import jwt from 'jsonwebtoken'
import { verify } from 'crypto'

enum headers {
  authorization = 'authorization'
}

export const ensureToken = (req: any, res: Response, next: NextFunction) => {
  const bearerHeader = req.headers[headers.authorization]
  if (bearerHeader !== undefined) {
    const bearer = bearerHeader.split(" ")
    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    res.sendStatus(403)
  }
}

export const signJwt = (res: Response, next: NextFunction, user: IUser) => {
  jwt.sign(user, config.jwtKey, (err, token) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.status(200).json({ data: 'Login confirmed' })
    }
    next()
  })
}

export const verifyJwt = async (token: string) => jwt.verify(token, config.jwtKey)