import axios from "axios";

const axiosAuth = axios.create({
  baseURL: "",
});

// Interceptor de peticiones (Igual que lo tienes)
axiosAuth.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Interceptor de respuestas mejorado con manejo de sesión
axiosAuth.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn("La sesión ha expirado. Limpiando credenciales...");

      // Limpiamos el storage
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");

      // Si no estás ya en el login, redirigimos de forma limpia o dejamos que el router maneje la ruta protegida
      if (!window.location.pathname.includes("/login")) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export default axiosAuth;
