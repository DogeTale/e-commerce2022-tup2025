import { Navigate, Outlet } from "react-router";

export default function AdminRoute() {
  const token = localStorage.getItem("token");
  const usuarioString = localStorage.getItem("usuario"); // Asumiendo que guardas el rol al loguearte
  const usuarioJson = JSON.parse(usuarioString);

  // Si no está logueado o no es ADMIN, lo mandamos al login o home
  if (!token || usuarioJson.rol !== "CLIENTE") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
