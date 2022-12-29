import express from 'express'
import UserController, { IUserController } from '../controllers/user'
import passport from '../middlewares/passport'
import { ensureToken } from '../middlewares/jwt'

const routerLogin = express.Router() 
const controller: IUserController = new UserController()

routerLogin.post('/register', passport.authenticate('register'), controller.register) // ready
routerLogin.post('/', passport.authenticate('login'), controller.login)
routerLogin.get('/showUser', ensureToken, controller.getAllUsers)

export default routerLogin