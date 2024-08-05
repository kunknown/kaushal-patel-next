import type { Config } from "tailwindcss";
import tailwindScrollbar from "tailwind-scrollbar";
import { nextui } from "@nextui-org/react";
import { transform } from "@babel/core";

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
    extend: {
      animation: {
        "fade-in": "fadeIn 1.5s linear",
        "fade-out-down": "fadeOutDown 1.5s linear infinite",
        "pop-out": "popOut 1s ease-in",
        "spin-slow": "spin 10s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOutDown: {
          "0%": { opacity: "1" },
          "100%": { opacity: ".25", transform: "translateY(150%)" },
        },
        popOut: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
};
export default config;
