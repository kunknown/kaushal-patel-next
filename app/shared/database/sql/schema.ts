import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    email: text("email").notNull(),
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    password: text("password").notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("user_email_idx").on(users.email),
    };
  },
);

export const monsters = pgTable(
  "monsters",
  {
    agility: integer("agility").notNull(),
    attack: integer("attack").notNull(),
    defense: integer("defense").notNull(),
    health: integer("health").notNull(),
    id: serial("id").primaryKey(),
    image: text("image").notNull(),
    initials: text("initials").notNull(),
    name: text("name").notNull().unique(),
  },
  (monsters) => {
    return { uniqueIdx: uniqueIndex("monster_name_idx").on(monsters.name) };
  },
);
