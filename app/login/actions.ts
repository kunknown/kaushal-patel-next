"use server";

import mongoose from "mongoose";
import { UserModel } from "../shared/models-schemas/user";
import {
  mongooseConnect,
  mongooseDisconnect,
} from "../shared/utility/mongoose-utils";
import bcrypt from "bcrypt";
import { TAuthData, TUserData } from "../shared/types-interfaces/types";
// import { getServerSession } from "next-auth";
// import { kv } from "@vercel/kv";
import { drizzle } from "drizzle-orm/vercel-postgres";
import {
  uniqueIndex,
  serial,
  pgTable,
  text,
  timestamp,
  pgSchema,
} from "drizzle-orm/pg-core";
import { sql } from "@vercel/postgres";

export async function submitLoginData(formData: FormData) {
  try {
    // await mongooseConnect(mongoose);
    // const email = formData.get("email") as string;
    // const password = formData.get("current-password") as string;
    // console.log("email & pass check", email, password);
    // if (email && password) {
    //   console.log("auth start...");
    //   await authenticate({ email, password });
    // }
    const email = formData.get("email") as string;
    const password = formData.get("current-password") as string;
    const db = drizzle(sql);
    // const kpSchema = pgSchema("kp_schema");
    const UserTable = pgTable(
      "users",
      {
        createdAt: timestamp("createdAt").defaultNow().notNull(),
        email: text("email").unique().notNull(),
        id: serial("id").primaryKey().unique(),
        name: text("name").notNull(),
        password: text("password").notNull(),
        updatedAt: timestamp("updatedAt").defaultNow().notNull(),
      },
      (users) => ({ uniqueIndex: uniqueIndex("unique_idx").on(users.email) }),
    );
    // const SchemaUserTable = kpSchema.table(
    //   "users",
    //   {
    //     createdAt: timestamp("createdAt").defaultNow().notNull(),
    //     email: text("email").unique().notNull(),
    //     id: serial("id").primaryKey().unique(),
    //     name: text("name").notNull(),
    //     password: text("password").notNull(),
    //     updatedAt: timestamp("updatedAt").defaultNow().notNull(),
    //   },
    //   (users) => ({ uniqueIndex: uniqueIndex("unique_idx").on(users.email) }),
    // );
    const result = await db.select().from(UserTable);
    console.log("results", result);
    // const newUser = await db.transaction().execute(async (trx) => {
    //   const user = await trx.insertInto('user').values({
    //     email: 'kp@kp.com'
    //     id: 1,
    //     name: 'kp',
    //     password: 'kp123'
    //   })
    // });
    // await kv.hset(email, {
    //   email,
    //   password,
    // });

    // const user = await kv.hgetall(email);
    // console.log("user", user);
  } catch (e) {
    console.error(e);
  } finally {
    // await mongooseDisconnect(mongoose);
  }
}

export async function createNewUser(formData: FormData) {
  try {
    await mongooseConnect(mongoose);
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(
      formData.get("current-password") as string,
      saltRounds,
    );
    console.log(
      "pass decrypt check",
      bcrypt.compareSync(
        formData.get("current-password") as string,
        passwordHash,
      ),
    );
    const newUser = new UserModel({
      email: formData.get("email") as string,
      name: formData.get("fullname") as string,
      password: passwordHash,
    });
    const savedNewUser = await newUser.save();
    console.log("newUser", savedNewUser);
  } catch (e) {
    console.dir(e);
  } finally {
    await mongooseDisconnect(mongoose);
  }
}

async function authenticate({ email, password }: TAuthData) {
  try {
    await mongooseConnect(mongoose);
    const user: TUserData | null = await UserModel.findOne({ email });
    console.log("user", user);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new Error("Username or password is incorrect");
    }
    console.log("Authentication Successful!");
  } catch (e) {
    console.dir(e);
  } finally {
    await mongooseDisconnect(mongoose);
  }
}
