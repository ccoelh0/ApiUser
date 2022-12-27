import mongoose from "mongoose";
import config from "../config/config";
import pkg from "mongoose";
import { IUser } from "../user/users.model";

mongoose.connect(`${config.dbConnection}`).catch((err) => new Error(err))

class Container {
  collection: mongoose.Model<{ [x: string]: any; }, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, { [x: string]: any; }>>;

  constructor(collectionName: 'user', schema: pkg.Schema) {
    this.collection = mongoose.model(collectionName, schema);
  }

  save = async (user: IUser) => {
    const newUser: mongoose.Document = new this.collection(user);
    
    try {
      return await newUser.save();
    } catch (err) {
      return err;
    }
  };

  getAll = async () => {
    try {
      return await this.collection.find();
    } catch (err) {
      return err;
    }
  };
}

export default Container