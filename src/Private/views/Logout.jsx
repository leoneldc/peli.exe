import React from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { home } from '../../settings/paths/Paths'
import useAuthContext from '../../settings/hooks/useAuthContext'

function Logout() {
    const {logout} = useAuthContext()
    useEffect(()=>logout())
    return <Navigate to={home}/>
}
export default Logout;