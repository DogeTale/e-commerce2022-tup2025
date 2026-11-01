import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "https://backend-ecommerce-lc.onrender.com",
        changeOrigin: true,
        secure: false, // <-- Esto evita que Node.js falle por problemas con el certificado SSL del backend
      },
      "/images": {
        target: "https://backend-ecommerce-lc.onrender.com/",
        changeOrigin: true,
        secure: false, // <-- Lo mismo para las imágenes
      },
    },
  },
});
