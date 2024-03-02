import { users, monsters } from "@/shared/database/sql/schema";

export type TAuthContext = {
  isAuthenticated: boolean;
  setIsAuthenticated: Function;
};

export type NewUser = typeof users.$inferInsert;
export type NewMonster = typeof monsters.$inferInsert;

export type TUser = {
  createdAt: Date;
  email: string;
  id: number;
  name: string;
  password: string;
  updatedAt: Date;
};

export type TAuthData = {
  email: string;
  password: string;
};

export type TLoginFormResponse = {
  token?: string;
  error?: string;
};

export type TBattleHistory = {
  attackMonster: TMonster;
  damage: number;
  defenseMonster: TMonster;
  turn: number;
};

export type TBattleRecord = {
  monsterA: TMonster;
  monsterB: TMonster;
  winner: TMonster;
  battleHistory: TBattleHistory[];
};

export type TMonster = {
  agility: number;
  attack: number;
  defense: number;
  health: number;
  id: number;
  image: string;
  name: string;
  initials: string;
};

export type TNavigationMenu = {
  href: string;
  name: string;
};

export type TProjects = {
  available: boolean;
  description: string;
  id: number;
  link: string;
  title: string;
};
