import { TNavigationMenu, TProjects } from "../types-interfaces-enums/types";

export const NAVIGATION_MENU: TNavigationMenu[] = [
  { href: "/", name: "Home" },
  { href: "/projects", name: "Projects" },
];

export const PROJECTS: TProjects[] = [
  {
    available: true,
    description:
      "Pick your 2 favorite monsters to battle against each other in a turn based Monster Battle Arena! The winner is announced and the battle record details are available for the curious.",
    id: 1,
    link: "projects/monster-battle",
    title: "Monster Batle",
  },
  {
    available: false,
    description: "Coming soon...",
    id: 4,
    link: "",
    title: "3D Character Builder",
  },
  {
    available: false,
    description: "Coming soon...",
    id: 2,
    link: "",
    title: "Video Streaming",
  },
  {
    available: false,
    description: "Coming soon...",
    id: 3,
    link: "",
    title: "Live Chat",
  },
];

export const SALT_ROUNDS: number = 10;

export const loginErrorStrings = {
  default: "Something went wrong",
  invalidEmail: "This username does not exist",
  invalidPassword: "The password is incorrect",
};

export const createAccountErrorStrings = {
  default: "Something went wrong",
  invalidEmail: "Account with this email already exists.",
};
