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
    id: 2,
    link: "",
    title: "Org Structure Tool",
  },
  {
    available: false,
    description: "Coming soon...",
    id: 3,
    link: "",
    title: "Other Projects",
  },
];

export const SALT_ROUNDS: number = 10;
