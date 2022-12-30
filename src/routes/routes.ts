import express, { Response } from 'express'
import UserController, { IUserController } from '../controllers/user'
import passport from '../middlewares/passport'
import { ensureToken } from '../middlewares/jwt'

const router = express.Router()
const controller: IUserController = new UserController()

router.get('/', (_, res) => res.sendFile('/public/login.html'))
router.post('/api/register', passport.authenticate('register'), controller.register)
router.post('/api/login', passport.authenticate('login'), controller.login)
router.get('/api/users', ensureToken, controller.getUsers)

export default router