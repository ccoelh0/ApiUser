import express from 'express'
import routerLogin from './login'

const router = express.Router()

router.get('/', (req, res) => res.json({data: 'api works'}))
router.use('/login', routerLogin)

export default router