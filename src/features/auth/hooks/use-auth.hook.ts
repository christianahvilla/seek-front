import { useCallback } from "react";

const TOKEN_KEY = "auth_token";

export const useAuth = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  const isAuthenticated = !!token;

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    window.location.href = "/login";
  }, []);

  return {
    token,
    isAuthenticated,
    logout,
  };
};
