import React from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "./AuthContext"

export default function PrivateRoute() {
  const { currentUser } = useAuth()
  // const {auth }= useAuth();
  const location = useLocation();

  return (
    currentUser ? <Outlet /> : <Navigate to="/login_card" state ={{from: location}} replace />
  )
}
// const PrivateRoute = () => {
//     const auth = null; // determine if authorized, from context or however you're doing it

//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page
//     return auth ? <Outlet /> : <Navigate to="/login" />;
// }