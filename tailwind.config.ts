import type { Config } from "tailwindcss";
import tailwindScrollbar from "tailwind-scrollbar";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [tailwindScrollbar, nextui()],
  theme: {
    extend: {},
  },
};
export default config;
