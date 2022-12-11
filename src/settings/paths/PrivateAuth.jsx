import React from "react";
import { login } from "./Paths";
import { Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

export const PrivateAuth = ({ children }) => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to={login} />;
  }
  return children;
};


export default PrivateAuth;