import { useState } from "react";
import axiosAuth from "../../api/axiosAuth.js";

/** Formulario de alta y edición de categorías del catálogo. */
function CategoryFormModal({ categoria, onClose, onGuardado }) {
  const esEdicion = Boolean(categoria);

  const [form, setForm] = useState({
    nombre: categoria?.nombre ?? "",
    descripcion: categoria?.descripcion ?? "",
  });

  const [errores, setErrores] = useState([]);
  const [guardando, setGuardando] = useState(false);

  const actualizar = (campo, valor) => {
    setForm((prev) => ({ ...prev, [campo]: valor }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrores([]);
    setGuardando(true);

    const datos = {
      nombre: form.nombre,
      descripcion: form.descripcion.trim() === "" ? null : form.descripcion,
    };

    try {
      if (esEdicion) {
        await axiosAuth.put(`/api/categorias/${categoria.id}`, datos);
      } else {
        await axiosAuth.post("/api/categorias", datos);
      }

      onGuardado(
        esEdicion
          ? "Categoría actualizada correctamente"
          : "Categoría creada correctamente",
      );
    } catch (error) {
      console.error("Error al guardar la categoría:", error);

      const respuesta = error.response?.data;

      // El backend devuelve la lista de errores de validación en "detalles"
      // y un 409 con un único mensaje cuando el nombre está repetido.
      setErrores(
        respuesta?.detalles ?? [
          respuesta?.error ?? "No se pudo guardar la categoría",
        ],
      );
    } finally {
      setGuardando(false);
    }
  };

  const etiquetaClase =
    "font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold";

  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/60 flex items-center justify-center p-space-md">
      <div className="bg-surface-container-lowest border border-surface-variant rounded w-full max-w-lg">
        {/* Cabecera */}
        <div className="flex items-center justify-between p-space-lg border-b border-surface-variant">
          <h2 className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface">
            {esEdicion ? "Editar categoría" : "Nueva categoría"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-secondary hover:text-on-surface"
            aria-label="Cerrar"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-space-md p-space-lg"
        >
          {/* Errores devueltos por el backend */}
          {errores.length > 0 && (
            <div className="bg-error-container border border-error rounded p-space-sm">
              <ul className="list-disc pl-5 font-body-md text-body-md text-on-error-container">
                {errores.map((mensaje) => (
                  <li key={mensaje}>{mensaje}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Nombre */}
          <div className="flex flex-col gap-1.5">
            <label className={etiquetaClase} htmlFor="categoria-nombre">
              Nombre
            </label>
            <input
              id="categoria-nombre"
              type="text"
              required
              autoFocus
              minLength={3}
              maxLength={100}
              className="h-10 px-space-sm bg-surface-container-low border border-surface-variant text-body-md text-on-surface rounded focus:outline-none focus:border-primary"
              value={form.nombre}
              onChange={(e) => actualizar("nombre", e.target.value)}
            />
            <span className="font-body-sm text-label-sm text-secondary">
              Entre 3 y 100 caracteres. No puede repetir el nombre de otra
              categoría.
            </span>
          </div>

          {/* Descripción */}
          <div className="flex flex-col gap-1.5">
            <label className={etiquetaClase} htmlFor="categoria-descripcion">
              Descripción
            </label>
            <textarea
              id="categoria-descripcion"
              rows={3}
              className="px-space-sm py-2 bg-surface-container-low border border-surface-variant text-body-md text-on-surface rounded focus:outline-none focus:border-primary"
              value={form.descripcion}
              onChange={(e) => actualizar("descripcion", e.target.value)}
            />
          </div>

          {/* Acciones */}
          <div className="flex items-center justify-end gap-space-sm pt-space-sm">
            <button
              type="button"
              onClick={onClose}
              className="h-10 px-space-lg bg-surface-container hover:bg-surface-container-high border border-surface-variant text-on-surface font-label-md text-label-md rounded transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={guardando}
              className="h-10 px-space-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold uppercase tracking-wider rounded transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {guardando ? "Guardando..." : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CategoryFormModal;
