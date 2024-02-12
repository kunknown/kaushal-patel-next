"use client";
import React, { useContext } from "react";
import SwitchToggle from "../shared/components/switch-toggle/switch-toggle";
import { DarkThemeContext } from "../shared/context/dark-theme-context";

export default function Settings() {
  const { isDarkTheme, setIsDarkTheme } = useContext(DarkThemeContext);
  return (
    <div>
      <SwitchToggle
        isToggleOn={true}
        setIsToggleOn={() => setIsDarkTheme(!isDarkTheme)}
        labelTop={"Dark Theme"}
      />
    </div>
  );
}
