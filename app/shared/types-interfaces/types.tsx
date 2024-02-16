export type TAuthContext = {
  isAuthenticated: boolean;
  setIsAuthenticated: Function;
};

export type TUserData = {
  name: string;
  email: string;
  settings: {
    darkMode: boolean;
  };
};
