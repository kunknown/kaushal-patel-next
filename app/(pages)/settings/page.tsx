"use client";
import React, { useContext } from "react";
import SwitchToggle from "../lib/ui/switch-toggle/switch-toggle";
import { DarkThemeContext } from ".@/lib/context/dark-theme-context";

export default function Settings() {
  const { isDarkTheme, setIsDarkTheme } = useContext(DarkThemeContext);
  return (
    <div className="p-4 mt-16 w-full border-2 border-zinc-900 dark:border-zinc-200 rounded-lg">
      <div className="mb-2 flex justify-center font-bold text-lg uppercase">
        <div className="py-1 px-2 bg-zinc-800 dark:bg-zinc-200 rounded-lg text-white dark:text-black">
          Settings
        </div>
      </div>
      <SwitchToggle
        isToggleOn={isDarkTheme}
        setIsToggleOn={() => setIsDarkTheme(!isDarkTheme)}
        labelTop={"Dark Theme"}
      />
    </div>
  );
}
