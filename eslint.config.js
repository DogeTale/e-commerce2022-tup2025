import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactPlugin from "eslint-plugin-react"; // 👈 1. Importamos el plugin de React
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react: reactPlugin, // 👈 2. Registramos el plugin
    },
    extends: [
      js.configs.recommended,
      reactPlugin.configs.flat.recommended, // 👈 3. Activamos reglas recomendadas de React
      reactPlugin.configs.flat["jsx-runtime"], // 👈 4. Evita errores falsos por no importar React en cada archivo
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: {
      react: {
        version: "detect", // 👈 5. Le pedimos que detecte tu versión de React automáticamente
      },
    },
    rules: {
      // Aquí puedes personalizar reglas si lo necesitas en el futuro
    },
  },
]);
