import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
  const token = localStorage.getItem("token");

  // Si no hay token, redirige al login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
