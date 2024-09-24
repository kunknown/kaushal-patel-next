"use client";

import { PropsWithChildren, createContext, useMemo, useState } from "react";
import { TAuthContext } from "@/lib/types-interfaces-enums/types";

export const AuthContext = createContext<TAuthContext>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export function AuthContextProvider({ children }: Readonly<PropsWithChildren>) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const value = useMemo(
    () => ({ isAuthenticated, setIsAuthenticated }),
    [isAuthenticated],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
