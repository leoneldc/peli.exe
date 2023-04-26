import React from "react";
import { Navigate, Outlet, redirect } from "react-router-dom";

function AuthRoutes({children, link="/", user}) {

    if (!user) {
        return <Navigate to={link} />
    } 

    return children ? children : <Outlet/>
}

export { AuthRoutes }