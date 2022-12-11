import React from "react";
import { home } from "./Paths";
import { Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

export const PublicAuth = ({ children }) => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={home} />;
  }
  return children;
};

export default PublicAuth;