import { users, monsters } from "@/lib/database/sql/schema";
import { StaticImageData } from "next/image";

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

export type THomeSlice = {
  element: JSX.Element;
  text: string;
  key: string;
};

export type TTechStackIcons = {
  src: string;
  alt: string;
  text: string;
};

export type TCard = {
  id: number;
  image: StaticImageData;
  isFlipped: boolean;
  isMatched: boolean;
  alt: string;
};
