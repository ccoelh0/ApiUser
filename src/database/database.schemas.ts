import pkg from "mongoose";

const { Schema } = pkg;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

export {userSchema}