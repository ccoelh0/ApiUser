import dotenv from "dotenv";
import path from "path";

dotenv.config({path: path.resolve(__dirname, '../.env')})

export default {
  dbConnection: process.env.DB_CONNENCTION || '',
  env: "development",
  host: process.env.HOST || "127.0.0.1",
  port: process.env.PORT || 8080,
  session: {
    secret: process.env.COOKIE_SECRET,
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 6000000 },
  },
  jwtKey: process.env.JWT_KEY || ''
};