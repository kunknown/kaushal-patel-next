import "@/shared/database/config";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { users, monsters } from "@/shared/database/schema";
import { NewMonster, NewUser } from "@/shared/types-interfaces-enums/types";
import { eq } from "drizzle-orm";

// pass along all schemas
export const db = drizzle(sql, { schema: { monsters, users } });

export const getUsers = async (email: string) => {
  return await db.select().from(users).where(eq(users.email, email));
};

export const insertUser = async (user: NewUser) => {
  return db.insert(users).values(user).returning();
};

export const insertUsers = async (userArr: NewUser[]) => {
  return db.insert(users).values(userArr).returning();
};

export const getMonsters = async () => {
  return await db.select().from(monsters);
};

export const insertMonsters = async (monsterArr: NewMonster[]) => {
  return await db.insert(monsters).values(monsterArr).returning();
};
