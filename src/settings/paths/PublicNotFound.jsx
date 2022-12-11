import React from "react";
import { home, login } from "./Paths";
import { Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

export const PublicNotFound = ({ children }) => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={home} />;
  }
  
  return <Navigate to={login} />;
};

export default PublicNotFound;