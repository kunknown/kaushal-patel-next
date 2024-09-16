import { useContext } from "react";
import { TAuthContext } from "@/lib/types-interfaces-enums/types";
import { AuthContext } from "@/lib/context/auth-context";

export const useAuthContext = (): TAuthContext => {
  const authContext = useContext(AuthContext);
  return (
    authContext ?? { isAuthenticated: false, setIsAuthenticated: () => {} }
  );
};
