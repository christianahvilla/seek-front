import { useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import { TOKEN_KEY } from "../auth.constants";

interface JwtPayload {
  email: string;
  name: string;
  exp: number;
  iat: number;
}

export const useAuth = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  const isAuthenticated = !!token;

  let user: JwtPayload | null = null;

  if (token) {
    try {
      user = jwtDecode<JwtPayload>(token);
    } catch (error) {
      console.error("Invalid token", error);
    }
  }

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    window.location.href = "/login";
  }, []);

  return {
    token,
    isAuthenticated,
    logout,
    user,
  };
};
