/**
 * Traduce un error de Axios a mensajes entendibles para el usuario.
 * Devuelve siempre un arreglo, porque el backend puede responder varios
 * errores de validación juntos en el campo "detalles".
 */
export function mensajesDeError(error, fallback) {
  // Sin respuesta: el servidor está caído, no hay red o lo bloqueó CORS.
  if (!error.response) {
    return [
      "No se pudo conectar con el servidor. Revisá que el backend esté disponible.",
    ];
  }

  const { status, data } = error.response;

  // Errores de validación: el backend los devuelve como lista en "detalles".
  if (Array.isArray(data?.detalles) && data.detalles.length > 0) {
    return data.detalles;
  }

  // Resto de los errores controlados por el backend.
  if (typeof data?.error === "string") {
    return [data.error];
  }

  // Express devuelve HTML cuando la ruta no existe. Pasa cuando el backend
  // desplegado todavía no tiene los endpoints de administración.
  if (status === 404) {
    return [
      "El servidor no reconoce esta operación (404). Es probable que el " +
        "backend desplegado todavía no tenga los endpoints de administración.",
    ];
  }

  if (status === 403) {
    return ["Tu usuario no tiene permisos de administrador."];
  }

  return [`${fallback} (error ${status})`];
}

/** Variante para los avisos de una sola línea. */
export function mensajeDeError(error, fallback) {
  return mensajesDeError(error, fallback).join(" ");
}
