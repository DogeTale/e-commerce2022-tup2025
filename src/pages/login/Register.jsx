import { useState } from "react";
import { validarRegistro } from "../../utils/validarRegistro";

function Register({
  authTab,
  handleRegister,
  nombre,
  setNombre,
  apellido,
  setApellido,
  telefono,
  setTelefono,
  email,
  setEmail,
  password,
  setPassword,
  error,
}) {
  // Estado local: no hace falta tocar LoginPage.jsx
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [errores, setErrores] = useState({});

  const claseInput = (campo) =>
    `w-full h-10 px-space-md bg-surface border ${
      errores[campo] ? "border-red-500" : "border-surface-variant"
    } rounded text-body-md font-body-md text-on-surface placeholder:text-secondary focus:outline-none focus:border-primary-container`;

  const limpiarError = (campo) => {
    if (errores[campo]) {
      setErrores((prev) => ({ ...prev, [campo]: undefined }));
    }
  };

  const mensajeError = (campo) =>
    errores[campo] ? (
      <p className="text-red-500 text-sm" role="alert">
        {errores[campo]}
      </p>
    ) : null;

  const onSubmit = (e) => {
    e.preventDefault();

    const nuevosErrores = validarRegistro({
      nombre,
      apellido,
      telefono,
      email,
      password,
      confirmarPassword,
      aceptaTerminos,
    });

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    setErrores({});
    handleRegister(e);
  };

  return (
    <div
      className={`flex-col ${authTab === "register" ? "flex" : "hidden"}`}
      id="form-register-pane"
    >
      <div className="mb-space-md">
        <h2 className="font-headline-sm text-headline-sm text-on-surface">
          Registro de Usuario y Facturación
        </h2>
        <p className="font-body-sm text-body-sm text-secondary mt-1">
          Completá tus datos reales para habilitar compras con emisión de
          comprobante legal AFIP y soporte RMA.
        </p>
      </div>

      {/* noValidate: los mensajes los muestra nuestra validación, no el navegador */}
      <form
        action="#"
        className="flex flex-col gap-space-md"
        method="POST"
        noValidate
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <div className="flex flex-col gap-1">
            <label
              className="font-label-md text-label-md text-on-surface"
              htmlFor="reg-name"
            >
              Nombre *
            </label>
            <input
              aria-invalid={Boolean(errores.nombre)}
              className={claseInput("nombre")}
              id="reg-name"
              maxLength={50}
              placeholder="Ej: Lucas"
              required
              type="text"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
                limpiarError("nombre");
              }}
            />
            {mensajeError("nombre")}
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="font-label-md text-label-md text-on-surface"
              htmlFor="reg-tax-type"
            >
              Tipo de Facturación *
            </label>
            <select
              className="w-full h-10 px-space-md bg-surface border border-surface-variant rounded text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary-container cursor-pointer"
              id="reg-tax-type"
            >
              <option value="B">Consumidor Final (Factura B)</option>
              <option value="A">Responsable Inscripto (Factura A)</option>
              <option value="M">Monotributo (Factura B)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <div className="flex flex-col gap-1">
            <label
              className="font-label-md text-label-md text-on-surface"
              htmlFor="reg-lastname"
            >
              Apellido *
            </label>
            <input
              aria-invalid={Boolean(errores.apellido)}
              className={claseInput("apellido")}
              id="reg-lastname"
              maxLength={50}
              placeholder="Ej: Martinez"
              required
              type="text"
              value={apellido}
              onChange={(e) => {
                setApellido(e.target.value);
                limpiarError("apellido");
              }}
            />
            {mensajeError("apellido")}
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="font-label-md text-label-md text-on-surface"
              htmlFor="reg-phone"
            >
              Teléfono / WhatsApp *
            </label>
            <div className="flex">
              <span className="h-10 px-2 bg-surface-container border border-surface-variant border-r-0 rounded-l flex items-center font-label-md text-secondary">
                +54 9
              </span>
              <input
                aria-invalid={Boolean(errores.telefono)}
                className={`${claseInput("telefono")} rounded-l-none`}
                id="reg-phone"
                inputMode="tel"
                placeholder="11 5500-1234"
                required
                type="tel"
                value={telefono}
                onChange={(e) => {
                  setTelefono(e.target.value);
                  limpiarError("telefono");
                }}
              />
            </div>
            {mensajeError("telefono")}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label
            className="font-label-md text-label-md text-on-surface"
            htmlFor="reg-email"
          >
            Correo Electrónico *
          </label>
          <input
            aria-invalid={Boolean(errores.email)}
            className={claseInput("email")}
            id="reg-email"
            maxLength={254}
            placeholder="tu-email@gmail.com"
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              limpiarError("email");
            }}
          />
          {mensajeError("email")}
          <span className="font-label-sm text-[10px] text-secondary">
            Enviaremos el comprobante de compra y los números de guía Andreani a
            esta casilla.
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <div className="flex flex-col gap-1">
            <label
              className="font-label-md text-label-md text-on-surface"
              htmlFor="reg-pwd"
            >
              Contraseña (Mín. 8 caracteres) *
            </label>
            <input
              aria-invalid={Boolean(errores.password)}
              className={claseInput("password")}
              id="reg-pwd"
              maxLength={72}
              placeholder="••••••••••••"
              required
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                limpiarError("password");
              }}
            />
            {mensajeError("password")}
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="font-label-md text-label-md text-on-surface"
              htmlFor="reg-pwd-confirm"
            >
              Confirmar Contraseña *
            </label>
            <input
              aria-invalid={Boolean(errores.confirmarPassword)}
              className={claseInput("confirmarPassword")}
              id="reg-pwd-confirm"
              maxLength={72}
              placeholder="••••••••••••"
              required
              type="password"
              value={confirmarPassword}
              onChange={(e) => {
                setConfirmarPassword(e.target.value);
                limpiarError("confirmarPassword");
              }}
            />
            {mensajeError("confirmarPassword")}
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-1">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              checked={aceptaTerminos}
              className="mt-1 w-4 h-4 rounded border-surface-variant accent-primary cursor-pointer shrink-0"
              required
              type="checkbox"
              onChange={(e) => {
                setAceptaTerminos(e.target.checked);
                limpiarError("aceptaTerminos");
              }}
            />
            <span className="font-body-sm text-body-sm text-secondary">
              Acepto los{" "}
              <a className="text-primary underline" href="#">
                Términos y Condiciones de Compra
              </a>
              , políticas de garantía RMA oficial y tratamiento de datos
              personales bajo Ley 25.326.
            </span>
          </label>
          {mensajeError("aceptaTerminos")}
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              defaultChecked
              className="mt-1 w-4 h-4 rounded border-surface-variant accent-primary cursor-pointer shrink-0"
              type="checkbox"
            />
            <span className="font-body-sm text-body-sm text-secondary">
              Deseo recibir alertas de reingreso de GPUs, procesadores y drops
              de precios especiales.
            </span>
          </label>
        </div>

        {error && (
          <p className="text-red-500 text-sm" role="alert">
            {error}
          </p>
        )}

        <button
          className="w-full h-11 bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg rounded flex items-center justify-center gap-space-xs transition-colors tracking-wide font-bold mt-2"
          type="submit"
        >
          <span className="material-symbols-outlined text-[20px]">
            person_add
          </span>
          <span>CREAR MI CUENTA EN ZEROLAG</span>
        </button>
      </form>
    </div>
  );
}

export default Register;
