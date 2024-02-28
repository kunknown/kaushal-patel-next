import { users, monsters } from "@/shared/database/schema";

export type TAuthContext = {
  isAuthenticated: boolean;
  setIsAuthenticated: Function;
};

export type NewUser = typeof users.$inferInsert;
export type NewMonster = typeof monsters.$inferInsert;

export type TUserData = {
  _id: number;
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
