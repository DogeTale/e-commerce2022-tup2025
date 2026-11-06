import { useState } from "react";
import axiosAuth from "../../api/axiosAuth.js";

/** Formulario de alta y edición de productos del catálogo. */
function ProductFormModal({ producto, categorias, onClose, onGuardado }) {
  const esEdicion = Boolean(producto);

  const [form, setForm] = useState({
    nombre: producto?.nombre ?? "",
    descripcion: producto?.descripcion ?? "",
    precio: producto?.precio ?? "",
    stock: producto?.stock ?? "",
    img: producto?.img ?? "",
    categoria_id: producto?.categoria_id ?? "",
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

    // Los campos opcionales vacíos se envían como null para poder limpiarlos.
    const datos = {
      nombre: form.nombre,
      precio: Number(form.precio),
      descripcion: form.descripcion.trim() === "" ? null : form.descripcion,
      img: form.img.trim() === "" ? null : form.img,
      categoria_id: form.categoria_id === "" ? null : form.categoria_id,
    };

    // El stock solo se define en el alta: después se ajusta por su propio
    // endpoint, que trabaja por diferencia y evita sobrescribir el valor.
    if (!esEdicion) {
      datos.stock = Number(form.stock);
    }

    try {
      if (esEdicion) {
        await axiosAuth.put(`/api/productos/${producto.id}`, datos);
      } else {
        await axiosAuth.post("/api/productos", datos);
      }

      onGuardado(
        esEdicion
          ? "Producto actualizado correctamente"
          : "Producto creado correctamente",
      );
    } catch (error) {
      console.error("Error al guardar el producto:", error);

      const respuesta = error.response?.data;

      // El backend devuelve la lista de errores de validación en "detalles".
      setErrores(
        respuesta?.detalles ?? [
          respuesta?.error ?? "No se pudo guardar el producto",
        ],
      );
    } finally {
      setGuardando(false);
    }
  };

  const etiquetaClase =
    "font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold";
  const campoClase =
    "h-10 px-space-sm bg-surface-container-low border border-surface-variant text-body-md text-on-surface rounded focus:outline-none focus:border-primary";

  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/60 flex items-start sm:items-center justify-center p-space-md overflow-y-auto">
      <div className="bg-surface-container-lowest border border-surface-variant rounded w-full max-w-xl my-auto">
        {/* Cabecera */}
        <div className="flex items-center justify-between p-space-lg border-b border-surface-variant">
          <h2 className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface">
            {esEdicion ? "Editar producto" : "Nuevo producto"}
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
            <label className={etiquetaClase} htmlFor="producto-nombre">
              Nombre
            </label>
            <input
              id="producto-nombre"
              type="text"
              required
              minLength={3}
              maxLength={255}
              className={campoClase}
              value={form.nombre}
              onChange={(e) => actualizar("nombre", e.target.value)}
            />
          </div>

          {/* Descripción */}
          <div className="flex flex-col gap-1.5">
            <label className={etiquetaClase} htmlFor="producto-descripcion">
              Descripción
            </label>
            <textarea
              id="producto-descripcion"
              rows={3}
              className="px-space-sm py-2 bg-surface-container-low border border-surface-variant text-body-md text-on-surface rounded focus:outline-none focus:border-primary"
              value={form.descripcion}
              onChange={(e) => actualizar("descripcion", e.target.value)}
            />
          </div>

          {/* Precio y stock */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <div className="flex flex-col gap-1.5">
              <label className={etiquetaClase} htmlFor="producto-precio">
                Precio (ARS)
              </label>
              <input
                id="producto-precio"
                type="number"
                required
                min="1"
                step="0.01"
                className={campoClase}
                value={form.precio}
                onChange={(e) => actualizar("precio", e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={etiquetaClase} htmlFor="producto-stock">
                Stock inicial
              </label>
              <input
                id="producto-stock"
                type="number"
                required={!esEdicion}
                disabled={esEdicion}
                min="0"
                step="1"
                className={`${campoClase} disabled:opacity-50 disabled:cursor-not-allowed`}
                value={form.stock}
                onChange={(e) => actualizar("stock", e.target.value)}
              />
              {esEdicion && (
                <span className="font-body-sm text-label-sm text-secondary">
                  El stock se modifica con el botón de ajuste de la tabla.
                </span>
              )}
            </div>
          </div>

          {/* Categoría */}
          <div className="flex flex-col gap-1.5">
            <label className={etiquetaClase} htmlFor="producto-categoria">
              Categoría
            </label>
            <select
              id="producto-categoria"
              className={campoClase}
              value={form.categoria_id}
              onChange={(e) => actualizar("categoria_id", e.target.value)}
            >
              <option value="">Sin categoría</option>
              {categorias.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.nombre}
                </option>
              ))}
            </select>
          </div>

          {/* Imagen */}
          <div className="flex flex-col gap-1.5">
            <label className={etiquetaClase} htmlFor="producto-img">
              URL de la imagen
            </label>
            <input
              id="producto-img"
              type="url"
              className={campoClase}
              placeholder="https://..."
              value={form.img}
              onChange={(e) => actualizar("img", e.target.value)}
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

export default ProductFormModal;
