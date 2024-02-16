import { ConnectOptions } from "mongoose";
import { USER_DB } from "../models-schemas/user";

export const mongooseUserDbConnectOptions: ConnectOptions = {
  dbName: USER_DB,
  retryWrites: true,
  w: "majority",
};
