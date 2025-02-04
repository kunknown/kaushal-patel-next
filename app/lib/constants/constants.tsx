import {
  TNavigationMenu,
  TProjects,
  TTechStackIcons,
} from "@/lib/types-interfaces-enums/types";

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
    available: false,
    description: "Build a 3D character, customize it, and save it. Coming soon...",
    id: 4,
    link: "",
    title: "Character Builder",
  },
  {
    available: false,
    description: "A live chat app using websockets. Coming soon...",
    id: 2,
    link: "",
    title: "Live Chat",
  },
  {
    available: false,
    description: "A live streaming app. Coming soon...",
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
    src: "/next-auth.png",
    alt: "nextauth.js logo",
    text: "NextAuth.js",
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
  },
  {
    src: "/nodejs.svg",
    alt: "nodejs logo",
    text: "Node.js",
  },
  {
    src: "/jest.svg",
    alt: "jestjs logo",
    text: "Jest",
  },
  {
    src: "/react-testing-library.svg",
    alt: "react testing library logo",
    text: "React Testing Library",
  },
  {
    src: "/storybook.svg",
    alt: "storybook logo",
    text: "Storybook",
  },
  {
    src: "/aws.svg",
    alt: "aws logo",
    text: "AWS",
  },
  {
    src: "/supabase.svg",
    alt: "supabase logo",
    text: "Supabase",
  },
  {
    src: "/github_dark.svg",
    alt: "github logo",
    text: "Github",
    srcDark: "/github.svg",
  },
  {
    src: "/git.svg",
    alt: "git logo",
    text: "Git",
  },
  // websocket, three.js, dashboard (lib), Auth0, AI integration, html, css, express, shopify, redis, figma, prismic, docker
];
