import { useContext } from "react";
import { TAuthContext } from "../types-interfaces/types";
import { AuthContext } from "../context/auth-context";

export const useAuthContext = (): TAuthContext => {
  const authContext = useContext(AuthContext);
  return (
    authContext ?? { isAuthenticated: false, setIsAuthenticated: () => {} }
  );
};
