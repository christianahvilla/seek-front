import { Navigate } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/use-auth.hook";

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
