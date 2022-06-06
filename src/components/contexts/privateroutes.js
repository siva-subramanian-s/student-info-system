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
