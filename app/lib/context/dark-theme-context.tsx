"use client";

import { THEME } from "../types-interfaces-enums/enums";
import { PropsWithChildren, createContext, useMemo, useState } from "react";

export type TDarkThemeContext = {
  isDarkTheme: boolean;
  setIsDarkTheme: Function;
};

export const DarkThemeContext = createContext<TDarkThemeContext>({
  isDarkTheme: false,
  setIsDarkTheme: () => {},
});

export function DarkThemeContextProvider({
  children,
}: Readonly<PropsWithChildren>) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);
  const value = useMemo(() => ({ isDarkTheme, setIsDarkTheme }), [isDarkTheme]);
  return (
    <DarkThemeContext.Provider value={value}>
      <html lang="en" className={isDarkTheme ? THEME.dark : THEME.light}>
        {children}
      </html>
    </DarkThemeContext.Provider>
  );
}
