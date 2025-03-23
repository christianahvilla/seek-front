import { Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/use-auth.hook";

export const AuthRedirect = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Navigate to="/login" replace />
  );
};
