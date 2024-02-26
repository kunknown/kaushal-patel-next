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
