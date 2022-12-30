import express from 'express'
import UserController, { IUserController } from '../controllers/user'
import passport from '../middlewares/passport'
import { ensureToken } from '../middlewares/jwt'

const router = express.Router()
const controller: IUserController = new UserController()

router.post('/register', passport.authenticate('register'), controller.register)
router.post('/login', passport.authenticate('login'), controller.login)
router.get('/users', ensureToken, controller.getUsers)

export default router