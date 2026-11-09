import { useState, useEffect } from "react";
import { Link } from "react-router";
import AdminSideBar from "../components/AdminSideBar";
import axiosAuth from "../api/axiosAuth.js";
import CategoryFormModal from "./categories/CategoryFormModal.jsx";
import { mensajeDeError } from "../utils/apiError.js";

/** Administra las categorías del catálogo. */
function CategoriesPage() {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* Estado de las operaciones de administración */
  const [formAbierto, setFormAbierto] = useState(false);
  const [categoriaEnEdicion, setCategoriaEnEdicion] = useState(null);
  const [confirmacion, setConfirmacion] = useState(null);
  const [eliminando, setEliminando] = useState(false);
  const [mensaje, setMensaje] = useState(null);

  // El listado incluye la cantidad de productos de cada categoría, que es lo
  // que determina si se puede eliminar.
  const cargarCategorias = async () => {
    try {
      const response = await axiosAuth.get("/api/categorias");
      setCategorias(response.data);
      setError(null);
    } catch (err) {
      console.error("Error al obtener las categorías:", err);
      setError("Error al obtener las categorías");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const cargarDatosIniciales = async () => {
      await cargarCategorias();
    };

    cargarDatosIniciales();
  }, []);

  /** Muestra un aviso temporal debajo de la cabecera. */
  const notificar = (tipo, texto) => {
    setMensaje({ tipo, texto });
    setTimeout(() => setMensaje(null), 6000);
  };

  /** Cierra el formulario y recarga la tabla después de guardar. */
  const handleGuardado = async (texto) => {
    setFormAbierto(false);
    setCategoriaEnEdicion(null);
    await cargarCategorias();
    notificar("ok", texto);
  };

  const abrirAlta = () => {
    setCategoriaEnEdicion(null);
    setFormAbierto(true);
  };

  const abrirEdicion = (categoria) => {
    setCategoriaEnEdicion(categoria);
    setFormAbierto(true);
  };

  const cerrarForm = () => {
    setFormAbierto(false);
    setCategoriaEnEdicion(null);
  };

  /** Elimina la categoría. El backend la rechaza si tiene productos. */
  const eliminarCategoria = async (categoria) => {
    setEliminando(true);

    try {
      await axiosAuth.delete(`/api/categorias/${categoria.id}`);

      setConfirmacion(null);
      await cargarCategorias();
      notificar("ok", `La categoría "${categoria.nombre}" fue eliminada`);
    } catch (err) {
      console.error("Error al eliminar la categoría:", err);

      setConfirmacion(null);

      // Con productos asociados el backend responde 409 e informa cuántos son.
      notificar(
        "error",
        mensajeDeError(err, "No se pudo eliminar la categoría"),
      );

      // El conteo pudo cambiar: se recarga para mostrar el valor real.
      await cargarCategorias();
    } finally {
      setEliminando(false);
    }
  };

  const cantidadVacias = categorias.filter(
    (cat) => (cat._count?.productos ?? 0) === 0,
  ).length;

  return (
    <>
      <title>Categorías</title>

      <div className="flex min-h-screen pt-[156px]">
        <AdminSideBar />
        <main className="flex-1 pl-64 w-full bg-surface min-h-[calc(100vh-156px)] p-space-xl">
          <div className="flex flex-col w-full">
            {/* Resumen */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md mb-space-lg bg-surface-container-lowest p-space-lg border border-surface-variant rounded">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                    Organización del Catálogo
                  </span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                  Categorías de Hardware
                </h1>
                <p className="font-body-md text-body-md text-secondary">
                  {categorias.length} categorías cargadas
                  {cantidadVacias > 0 && ` · ${cantidadVacias} sin productos`}.
                </p>
              </div>

              {/* Alta de categoría */}
              <button
                type="button"
                onClick={abrirAlta}
                className="h-12 px-space-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider font-bold rounded transition-colors flex items-center justify-center gap-space-xs shrink-0"
              >
                <span className="material-symbols-outlined text-[20px]">
                  add
                </span>
                <span>Nueva categoría</span>
              </button>
            </div>

            {/* Resultado de la última operación */}
            {mensaje && (
              <div
                className={`mb-space-md p-space-md border rounded font-body-md text-body-md flex items-center gap-space-sm ${
                  mensaje.tipo === "ok"
                    ? "bg-tertiary-fixed border-tertiary text-on-tertiary-fixed"
                    : "bg-error-container border-error text-on-error-container"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {mensaje.tipo === "ok" ? "check_circle" : "error"}
                </span>
                <span className="flex-1">{mensaje.texto}</span>
                <button
                  type="button"
                  onClick={() => setMensaje(null)}
                  aria-label="Cerrar aviso"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    close
                  </span>
                </button>
              </div>
            )}

            {/* Tabla de categorías */}
            <div className="flex flex-col bg-surface-container-lowest border border-surface-variant rounded">
              {loading ? (
                <div className="p-space-xl text-center text-secondary font-body-md">
                  Cargando categorías...
                </div>
              ) : error ? (
                <div className="p-space-xl text-center text-error font-body-md">
                  Error: {error}
                </div>
              ) : categorias.length === 0 ? (
                <div className="p-space-xl text-center text-secondary font-body-md">
                  Todavía no hay categorías cargadas.
                </div>
              ) : (
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low border-b border-surface-variant text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                        <th className="p-space-md">Categoría</th>
                        <th className="p-space-md">Descripción</th>
                        <th className="p-space-md">Productos</th>
                        <th className="p-space-md text-right">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-variant font-body-md text-body-md">
                      {categorias.map((categoria) => {
                        const cantidadProductos =
                          categoria._count?.productos ?? 0;

                        return (
                          <tr
                            key={categoria.id}
                            className="hover:bg-surface-container-low transition-colors"
                          >
                            <td className="p-space-md">
                              <span className="font-headline-sm text-label-lg text-on-surface font-bold leading-tight">
                                {categoria.nombre}
                              </span>
                            </td>
                            <td className="p-space-md">
                              <span className="font-body-md text-secondary">
                                {categoria.descripcion || "—"}
                              </span>
                            </td>
                            <td className="p-space-md">
                              <span
                                className={`font-body-md font-bold ${
                                  cantidadProductos === 0
                                    ? "text-secondary"
                                    : "text-on-surface"
                                }`}
                              >
                                {cantidadProductos}
                              </span>
                            </td>
                            <td className="p-space-md">
                              <div className="flex items-center justify-end gap-1">
                                <Link
                                  to={`/search?categoria=${encodeURIComponent(categoria.nombre)}`}
                                  title="Ver productos de la categoría"
                                  className="inline-flex items-center justify-center w-9 h-9 bg-surface-container hover:bg-surface-container-high border border-surface-variant text-on-surface rounded transition-colors"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    visibility
                                  </span>
                                </Link>

                                <button
                                  type="button"
                                  onClick={() => abrirEdicion(categoria)}
                                  title="Editar categoría"
                                  className="inline-flex items-center justify-center w-9 h-9 bg-surface-container hover:bg-surface-container-high border border-surface-variant text-on-surface rounded transition-colors"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    edit
                                  </span>
                                </button>

                                <button
                                  type="button"
                                  onClick={() => setConfirmacion(categoria)}
                                  title="Eliminar categoría"
                                  className="inline-flex items-center justify-center w-9 h-9 bg-error hover:bg-on-error-container text-on-error border border-error rounded transition-colors"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    delete
                                  </span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Alta y edición de categorías */}
      {formAbierto && (
        <CategoryFormModal
          categoria={categoriaEnEdicion}
          onClose={cerrarForm}
          onGuardado={handleGuardado}
        />
      )}

      {/* Confirmación de borrado */}
      {confirmacion && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/60 flex items-center justify-center p-space-md">
          <div className="bg-surface-container-lowest border border-surface-variant rounded w-full max-w-md p-space-lg flex flex-col gap-space-md">
            <h2 className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface">
              Eliminar categoría
            </h2>

            {(confirmacion._count?.productos ?? 0) > 0 ? (
              <p className="font-body-md text-body-md text-secondary">
                <strong className="text-on-surface">
                  {confirmacion.nombre}
                </strong>{" "}
                tiene{" "}
                <strong className="text-on-surface">
                  {confirmacion._count.productos} producto(s)
                </strong>{" "}
                asociado(s), así que no se puede eliminar. Primero hay que
                reasignar esos productos a otra categoría desde el inventario.
              </p>
            ) : (
              <p className="font-body-md text-body-md text-secondary">
                <strong className="text-on-surface">
                  {confirmacion.nombre}
                </strong>{" "}
                no tiene productos asociados. El borrado es definitivo: a
                diferencia de los productos, las categorías no se dan de baja,
                se eliminan.
              </p>
            )}

            <div className="flex items-center justify-end gap-space-sm">
              <button
                type="button"
                onClick={() => setConfirmacion(null)}
                className="h-10 px-space-lg bg-surface-container hover:bg-surface-container-high border border-surface-variant text-on-surface font-label-md text-label-md rounded transition-colors"
              >
                Cancelar
              </button>
              <button
                type="button"
                disabled={eliminando}
                onClick={() => eliminarCategoria(confirmacion)}
                className="h-10 px-space-lg bg-error hover:bg-on-error-container text-on-error font-label-md text-label-md font-bold uppercase tracking-wider rounded transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {eliminando ? "Eliminando..." : "Eliminar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CategoriesPage;
