import {
  TCard,
  TNavigationMenu,
  TProjects,
  TTechStackIcons,
} from "../types-interfaces-enums/types";

export const NAVIGATION_MENU: TNavigationMenu[] = [
  { href: "/", name: "Home" },
  { href: "/projects", name: "Projects" },
];

export const PROJECTS: TProjects[] = [
  {
    available: true,
    description:
      "Match all the pairs to win this 4x4 card game! Pick 2 cards at a time, if they're a match it'll stay face-up otherwise they'll go face-down.",
    id: 5,
    link: "projects/memory-card-game",
    title: "Memory Card Game",
  },
  {
    available: true,
    description:
      "Pick your 2 favorite monsters to battle against each other in a turn based Monster Battle Arena! The winner is announced and the battle record details are available for the curious.",
    id: 1,
    link: "projects/monster-battle",
    title: "Monster Batle",
  },
  {
    available: true,
    description: "Build a 3D character, customize it, and save it.",
    id: 4,
    link: "projects/character-builder",
    title: "Character Builder",
  },
  {
    available: false,
    description: "Coming soon...",
    id: 2,
    link: "projects/live-chat",
    title: "Live Chat",
  },
  {
    available: false,
    description: "Coming soon...",
    id: 3,
    link: "",
    title: "Video Streaming",
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

export const TECH_STACK_ICONS: Array<TTechStackIcons> = [
  {
    src: "/next.svg",
    alt: "next.js logo",
    text: "Next.js",
  },
  {
    src: "/vercel.svg",
    alt: "vercel logo",
    text: "Vercel",
  },
  {
    src: "/typescript.svg",
    alt: "typescript logo",
    text: "TypeScript",
  },
  {
    src: "/react.svg",
    alt: "react logo",
    text: "React",
  },
  {
    src: "/tailwindcss.svg",
    alt: "tailwindcss logo",
    text: "Tailwindcss",
  },
  {
    src: "/postgresql.svg",
    alt: "postgresql logo",
    text: "PostgreSQL",
  },
  {
    src: "/framermotion.svg",
    alt: "framermotion logo",
    text: "FramerMotion",
  }, //jest, storybook, node.js, websocket, three.js, dashboard (lib), Auth0, AI integration
];
