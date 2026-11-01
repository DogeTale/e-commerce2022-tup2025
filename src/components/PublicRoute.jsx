import { Navigate, Outlet } from "react-router";

export default function PublicRoute() {
  const token = localStorage.getItem("token");

  // Si ya está logueado, no puede entrar al login (lo mandamos al inicio)
  if (token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
