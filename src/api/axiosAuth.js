import axios from "axios";

// Creamos la instancia de axios
const axiosAuth = axios.create({
  // Si usas el proxy de Vite, puedes dejar baseURL vacío o con "/api"
  // Si prefieres apuntar directo a Render: "https://backend-ecommerce-lc.onrender.com/api"
  baseURL: "",
});

// Interceptor de peticiones: se ejecuta automáticamente antes de cada request
axiosAuth.interceptors.request.use(
  (config) => {
    // Buscas el token que guardaste al hacer el login
    const token = localStorage.getItem("token");

    // Si el token existe, lo agregamos al header Authorization
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosAuth;
