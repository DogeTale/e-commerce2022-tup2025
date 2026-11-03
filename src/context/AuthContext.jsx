import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Gamer");
  const [userRole, setUserRole] = useState(null);

  const checkUserSession = () => {
    const token = localStorage.getItem("token");
    const usuarioString = localStorage.getItem("usuario");

    if (token) {
      setIsLoggedIn(true);
      if (usuarioString) {
        try {
          const usuario = JSON.parse(usuarioString);
          if (usuario) {
            if (usuario.nombre) setUserName(usuario.nombre);
            if (usuario.rol) setUserRole(usuario.rol);
          }
        } catch (error) {
          console.error("Error al parsear el usuario del localStorage", error);
        }
      }
    } else {
      setIsLoggedIn(false);
      setUserName("Gamer");
      setUserRole(null);
    }
  };

  useEffect(() => {
    checkUserSession();

    // Escuchar cambios en otras pestañas o si se limpia el storage
    window.addEventListener("storage", checkUserSession);
    return () => window.removeEventListener("storage", checkUserSession);
  }, []);

  // Función para llamar justo después de hacer login exitoso
  const login = (token, usuario) => {
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));
    checkUserSession();
    window.dispatchEvent(new Event("user-logged-in"));
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    checkUserSession();
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userName,
        userRole,
        login,
        logout,
        checkUserSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
