import axios from "axios";

// Creamos la instancia de axios
const axiosAuth = axios.create({
  // Si usas el proxy de Vite, puedes dejar baseURL vacío o con "/api"
  baseURL: "",
});

// Interceptor de peticiones: se ejecuta automáticamente antes de cada request
axiosAuth.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Interceptor de respuestas: maneja cuando el token muere (401 Unauthorized)
axiosAuth.interceptors.response.use(
  (response) => {
    // Si la respuesta es exitosa, la dejamos pasar tal cual
    return response;
  },
  (error) => {
    // Si el servidor responde con un 401, significa que el token expiró o es inválido
    if (error.response && error.response.status === 401) {
      console.warn("La sesión ha expirado. Limpiando credenciales...");

      // 1. Borramos el token vencido del localStorage
      localStorage.removeItem("token");

      // Opcional: Si guardas los datos del usuario o rol, bórralos también:
      // localStorage.removeItem("user");

      // 2. Redirigimos al usuario al login (evitando bucles si ya está ahí)
      if (!window.location.pathname.includes("/login")) {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  },
);

export default axiosAuth;
