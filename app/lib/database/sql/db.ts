import "@/lib/database/sql/config";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { users, monsters } from "@/lib/database/sql/schema";
import { NewMonster, NewUser } from "@/app/lib/types-interfaces-enums/types";
import { eq, or } from "drizzle-orm";

// pass along all schemas
export const db = drizzle(sql, { schema: { monsters, users } });

export const getUser = async (email: string) => {
  return await db.select().from(users).where(eq(users.email, email));
};

export const insertUser = async (user: NewUser) => {
  return db
    .insert(users)
    .values(user)
    .returning({ email: users.email, id: users.id, name: users.name });
};

export const insertUsers = async (userArr: NewUser[]) => {
  return db.insert(users).values(userArr).returning();
};

export const getMonsters = async (monsterIds: string[]) => {
  const conditions = monsterIds.map((id) => eq(monsters.id, Number(id)));
  const combinedConditions =
    conditions.length > 1 ? or(...conditions) : conditions[0];
  return db.select().from(monsters).where(combinedConditions);
};

export const getAllMonsters = async () => {
  return await db.select().from(monsters);
};

export const insertMonsters = async (monsterArr: NewMonster[]) => {
  return await db.insert(monsters).values(monsterArr).returning();
};
