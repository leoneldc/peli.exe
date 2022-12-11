import React, { createContext, useState, useCallback, useMemo } from "react";

export const AuthContext = createContext();
const auth = "authToken";

export default function AuthProvide({ children }) {

  const [isAuthenticated, setAuthenticated] = useState(
    window.localStorage.getItem(auth)
  );

  const login = useCallback(() => {
    window.localStorage.setItem(auth, true);
    setAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(auth);
    setAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
    }),
    [isAuthenticated, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}