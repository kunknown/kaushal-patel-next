import { ConnectOptions, Mongoose } from "mongoose";
import { USER_DB } from "../models-schemas/user";

export const mongooseUserDbConnectOptions: ConnectOptions = {
  dbName: USER_DB,
  retryWrites: true,
  w: "majority",
};

export const mongooseConnect = async (mongoose: Mongoose) => {
  const { MONGODB_URI } = process.env;
  if (!MONGODB_URI) {
    throw new Error(
      `Please define the MONGODB_URI environment variables inside .env.local`,
    );
  }
  await mongoose.connect(MONGODB_URI, mongooseUserDbConnectOptions);
};

export const mongooseDisconnect = async (mongoose: Mongoose): Promise<void> => {
  await mongoose.disconnect();
};
