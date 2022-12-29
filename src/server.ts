import './config/config'
import express from 'express'
import databaseConnection from './database/databaseConnection'
import router from './routes/routes'
import session from 'express-session'
import config from './config/config'

const app = express()

databaseConnection()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(config.session));
app.use('/api', router)

app.listen(process.env.PORT, () => console.log(`Server is running in port ${process.env.PORT}`))