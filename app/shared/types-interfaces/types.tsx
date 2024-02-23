import { ObjectId } from "mongodb";

export type TAuthContext = {
  isAuthenticated: boolean;
  setIsAuthenticated: Function;
};

export type TUserData = {
  _id: ObjectId;
  email: string;
  name: string;
  password: string;
  settings: {
    darkMode: boolean;
  };
};

export type TAuthData = {
  email: string;
  password: string;
};
