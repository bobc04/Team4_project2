import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../lib/store";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, token } = useAuthStore();

  // If no user is logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If a token exists, render the children; otherwise, redirect
  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
