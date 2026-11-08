// src/utils/validarRegistro.js
// Valida los datos del formulario de registro. Devuelve un objeto con un
// mensaje por cada campo inválido. Si el objeto está vacío, todo está bien.

const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Letras (con tildes y ñ), espacios, apóstrofes y guiones. Sin números.
const REGEX_NOMBRE = /^\p{L}[\p{L}\s'’-]*$/u;

export function validarRegistro({
  nombre,
  apellido,
  telefono,
  email,
  password,
  confirmarPassword,
  aceptaTerminos,
}) {
  const errores = {};

  const nom = (nombre || "").trim();
  if (nom.length < 2) {
    errores.nombre = "El nombre debe tener al menos 2 caracteres.";
  } else if (nom.length > 50) {
    errores.nombre = "El nombre no puede superar los 50 caracteres.";
  } else if (!REGEX_NOMBRE.test(nom)) {
    errores.nombre = "El nombre solo puede tener letras.";
  }

  const ape = (apellido || "").trim();
  if (ape.length < 2) {
    errores.apellido = "El apellido debe tener al menos 2 caracteres.";
  } else if (ape.length > 50) {
    errores.apellido = "El apellido no puede superar los 50 caracteres.";
  } else if (!REGEX_NOMBRE.test(ape)) {
    errores.apellido = "El apellido solo puede tener letras.";
  }

  // El prefijo +54 9 ya está en pantalla: se piden 10 dígitos (código de área + número).
  // Se aceptan 11 si la persona escribe el 0 inicial.
  const digitosTel = (telefono || "").replace(/\D/g, "");
  if (!/^\d{10,11}$/.test(digitosTel)) {
    errores.telefono = "Ingresá un teléfono válido de 10 dígitos. Ej: 11 5500-1234.";
  }

  const mail = (email || "").trim();
  if (!REGEX_EMAIL.test(mail) || mail.length > 254) {
    errores.email = "Ingresá un correo electrónico válido.";
  }

  if (!password || password.length < 8) {
    errores.password = "La contraseña debe tener al menos 8 caracteres.";
  } else if (password.length > 72) {
    errores.password = "La contraseña no puede superar los 72 caracteres.";
  }

  if (!errores.password && password !== confirmarPassword) {
    errores.confirmarPassword = "Las contraseñas no coinciden.";
  }

  if (!aceptaTerminos) {
    errores.aceptaTerminos = "Tenés que aceptar los términos y condiciones.";
  }

  return errores;
}