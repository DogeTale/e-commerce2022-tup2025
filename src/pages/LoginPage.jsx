import { useState } from "react";
import LoginHeader from "./login/LoginHeader";
import RightCol from "./login/RightCol";
import Register from "./login/Register";
import Login from "./login/Login";
import axios from "axios";
import { useNavigate } from "react-router";

function LoginPage() {
  // Estado para alternar entre la pestaña de "Iniciar Sesión" y "Crear Cuenta Nueva"
  const [authTab, setAuthTab] = useState("login");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      console.log(nombre, apellido, email, telefono, password);
      await axios.post("/api/usuarios", {
        nombre,
        apellido,
        email,
        telefono,
        pw: password,
      });

      console.log("Se ha registrado con exito!");
      handleLogin();
    } catch (error) {
      console.error("Error al intentar registrarse: ", error);
    }
  };

  const handleLogin = async () => {
    setError(null);

    try {
      const response = await axios.post("/api/usuarios/login", {
        email,
        pw: password,
      });

      const { token, usuario } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("usuario", JSON.stringify(usuario));
      console.log("Inicio de sesion exitoso");
      navigate("/", { replace: true });
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      setError("Credenciales inválidas o error en el servidor.");
    }
  };

  return (
    <>
      <main className="w-full pt-[156px] bg-surface min-h-[calc(100vh-156px)]">
        <div className="flex flex-col w-full">
          {/* =========================================================================
              SECCIÓN: BARRA SUPERIOR DE SEGURIDAD Y DATOS FISCALES
              Muestra información de cifrado, ubicación del showroom y tipo de facturación.
              ========================================================================= */}
          <LoginHeader />

          {/* =========================================================================
              LAYOUT PRINCIPAL DE AUTENTICACIÓN (Grid de 2 columnas)
              ========================================================================= */}
          <div className="max-w-[1320px] mx-auto px-margin-desktop py-space-xl w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
              {/* ---------------------------------------------------------------------
                  COLUMNA IZQUIERDA: FORMULARIOS DE ACCESO Y REGISTRO (7 Columnas)
                  --------------------------------------------------------------------- */}
              <div className="lg:col-span-7 bg-surface-container-lowest border border-surface-variant rounded-lg p-space-lg sm:p-space-xl">
                {/* Cabecera del Portal */}
                <div className="flex items-center justify-between border-b border-surface-variant pb-space-md mb-space-lg">
                  <div>
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">
                      Portal Clientes
                    </span>
                    <h1 className="font-headline-md text-headline-md text-on-surface mt-1">
                      Acceso y Registro ZeroLag
                    </h1>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-[28px]">
                    sports_esports
                  </span>
                </div>

                {/* Botones de Pestañas (Switch entre Login y Registro) */}
                <div className="grid grid-cols-2 gap-space-xs p-1 bg-surface-container rounded-lg border border-surface-variant mb-space-lg">
                  <button
                    className={`py-2 text-center font-label-lg text-label-lg rounded transition-colors ${
                      authTab === "login"
                        ? "bg-surface-container-lowest text-primary font-bold border border-surface-variant"
                        : "text-secondary hover:text-on-surface font-semibold"
                    }`}
                    id="tab-login-btn"
                    onClick={() => setAuthTab("login")}
                    type="button"
                  >
                    Iniciar Sesión
                  </button>
                  <button
                    className={`py-2 text-center font-label-lg text-label-lg rounded transition-colors ${
                      authTab === "register"
                        ? "bg-surface-container-lowest text-primary font-bold border border-surface-variant"
                        : "text-secondary hover:text-on-surface font-semibold"
                    }`}
                    id="tab-register-btn"
                    onClick={() => setAuthTab("register")}
                    type="button"
                  >
                    Crear Cuenta Nueva
                  </button>
                </div>

                {/* ===================================================================
                    PANEL 1: FORMULARIO DE INICIO DE SESIÓN (LOGIN)
                    [ZONA DE ACCIÓN REACT]: Aquí conectarás la función de autenticación (ej: handleSubmit / Supabase Auth / Firebase)
                    =================================================================== */}
                <Login
                  authTab={authTab}
                  handleLogin={handleLogin}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  error={error}
                />
                {/* ===================================================================
                    PANEL 2: FORMULARIO DE REGISTRO Y FACTURACIÓN
                    [ZONA DE ACCIÓN REACT]: Aquí conectarás la lógica para guardar el 
                    nuevo usuario y datos fiscales en tu base de datos.
                    =================================================================== */}
                <Register
                  authTab={authTab}
                  handleRegister={handleRegister}
                  nombre={nombre}
                  setNombre={setNombre}
                  apellido={apellido}
                  setApellido={setApellido}
                  telefono={telefono}
                  setTelefono={setTelefono}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                />
              </div>

              {/* ---------------------------------------------------------------------
                  COLUMNA DERECHA: BENEFICIOS, SHOWROOM Y SEGURIDAD (5 Columnas)
                  --------------------------------------------------------------------- */}
              <RightCol />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default LoginPage;
