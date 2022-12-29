import mongoose from "mongoose"
import config from "../config/config"

export default async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(config.dbConnection)
  } catch (err) {
    throw new Error(`Error on database connection: ${err}`)
  }
} 