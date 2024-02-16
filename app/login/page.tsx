import mongoose from "mongoose";
import { UserModel } from "../shared/models-schemas/user";
import { mongooseUserDbConnectOptions } from "../shared/utility/mongoose-utils";
import bcrypt from "bcrypt";
const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error(
    `Please define the MONGODB_URI environment variables inside .env.local`,
  );
}

export default async function Page() {
  async function submitLoginData(formData: FormData) {
    "use server";
    try {
      await mongoose.connect(
        MONGODB_URI as string,
        mongooseUserDbConnectOptions,
      );
      // const db = mongoose.connection;
      // db.once("open", () => {
      //   console.log("connected to mongo db");
      // });
      const users = await UserModel.find();
      console.log("users", users);
    } catch (e) {
      console.error(e);
    } finally {
      await mongoose.disconnect();
    }
  }

  async function createNewUser(formData: FormData) {
    "use server";
    try {
      await mongoose.connect(
        MONGODB_URI as string,
        mongooseUserDbConnectOptions,
      );
      const saltRounds = 10;
      const passwordHash = await bcrypt.hash(
        formData.get("current-password") as string,
        saltRounds,
      );
      const newUser = new UserModel({
        email: formData.get("email") as string,
        name: formData.get("fullname") as string,
        password: passwordHash,
      });
      // const savedNewUser = await newUser.save();
      const users = await UserModel.find({});
      console.log("models", users);
    } catch (e) {
      console.dir(e);
    } finally {
      await mongoose.disconnect();
    }
  }
  return (
    <>
      <form name="login-form" action={submitLoginData}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="current-password">Password</label>
        <input
          id="current-password"
          name="current-password"
          type="password"
          required
        />
        <label>
          Login <input type="submit" hidden />
        </label>
      </form>
      <form name="signup-form" action={createNewUser}>
        <label htmlFor="signup-fullname">Full Name</label>
        <input id="signup-fullname" name="fullname" type="text" required />
        <label htmlFor="signup-email">Email</label>
        <input id="signup-email" name="email" type="email" required />
        <label htmlFor="signup-current-password">Password</label>
        <input
          id="signup-current-password"
          name="current-password"
          type="password"
          required
        />
        <label>
          Signup <input type="submit" hidden />
        </label>
      </form>
    </>
  );
}
