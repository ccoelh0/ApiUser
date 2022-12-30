import './config/config'
import express from 'express'
import databaseConnection from './database/databaseConnection'
import router from './routes/routes'
import session from 'express-session'
import config from './config/config'
import handleError from './config/handleError'

const app = express()

databaseConnection()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(config.session));
app.use('/', router)
app.use(handleError)

app.listen(config.port, () => console.log(`Server is running in port ${config.port}`))