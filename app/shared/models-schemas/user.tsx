import { ObjectId } from "mongodb";
import { Schema, models, model } from "mongoose";

export const UserSchema = new Schema(
  {
    email: {
      required: true,
      type: String,
      unique: true,
    },
    id: {
      required: false,
      type: ObjectId,
      unique: true,
    },
    name: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
  },
  { _id: false },
);
export const UserModel = models?.user ?? model("user", UserSchema);
export const USER_DB = "user";
