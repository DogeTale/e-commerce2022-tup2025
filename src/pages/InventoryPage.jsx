import { useState, useEffect } from "react";
import { Link } from "react-router";
import AdminSideBar from "../components/AdminSideBar";
import axiosAuth from "../api/axiosAuth.js";
import ProductFormModal from "./inventory/ProductFormModal.jsx";
import StockModal from "./inventory/StockModal.jsx";
import { mensajeDeError } from "../utils/apiError.js";

/** Muestra y filtra el inventario de productos para administración. */
function InventoryPage() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 10;

  /* Estado de las operaciones de administración */
  const [formAbierto, setFormAbierto] = useState(false);
  const [productoEnEdicion, setProductoEnEdicion] = useState(null);
  const [productoEnAjuste, setProductoEnAjuste] = useState(null);
  const [confirmacion, setConfirmacion] = useState(null);
  const [mensaje, setMensaje] = useState(null);

  // El panel muestra también los productos dados de baja, por eso envía el
  // token de administrador junto con el parámetro incluirInactivos.
  const cargarProductos = async () => {
    try {
      const response = await axiosAuth.get(
        "/api/productos?incluirInactivos=true",
      );
      setProductos(response.data);
      setError(null);
    } catch (err) {
      console.error("Error al obtener los productos:", err);
      setError("Error al obtener los productos");
    } finally {
      setLoading(false);
    }
  };

  // Las categorías se consultan completas para poder asignarlas en el
  // formulario, incluso las que todavía no tienen ningún producto.
  const cargarCategorias = async () => {
    try {
      const response = await axiosAuth.get("/api/categorias");
      setCategorias(response.data);
    } catch (err) {
      console.error("Error al obtener las categorías:", err);
    }
  };

  useEffect(() => {
    const cargarDatosIniciales = async () => {
      await Promise.all([cargarProductos(), cargarCategorias()]);
    };

    cargarDatosIniciales();
  }, []);

  /** Muestra un aviso temporal al pie de la cabecera. */
  const notificar = (tipo, texto) => {
    setMensaje({ tipo, texto });
    setTimeout(() => setMensaje(null), 5000);
  };

  /** Cierra los modales y vuelve a cargar la tabla después de guardar. */
  const handleGuardado = async (texto) => {
    setFormAbierto(false);
    setProductoEnEdicion(null);
    setProductoEnAjuste(null);
    await cargarProductos();
    notificar("ok", texto);
  };

  const abrirAlta = () => {
    setProductoEnEdicion(null);
    setFormAbierto(true);
  };

  const abrirEdicion = (producto) => {
    setProductoEnEdicion(producto);
    setFormAbierto(true);
  };

  const cerrarForm = () => {
    setFormAbierto(false);
    setProductoEnEdicion(null);
  };

  /** Da de baja o rehabilita un producto según el valor recibido. */
  const cambiarEstadoProducto = async (producto, activo) => {
    setConfirmacion(null);

    try {
      await axiosAuth.patch(`/api/productos/${producto.id}/activo`, {
        activo: activo,
      });

      await cargarProductos();

      notificar(
        "ok",
        activo
          ? `"${producto.nombre}" volvió al catálogo`
          : `"${producto.nombre}" fue dado de baja`,
      );
    } catch (err) {
      console.error("Error al cambiar el estado del producto:", err);

      notificar(
        "error",
        mensajeDeError(err, "No se pudo cambiar el estado del producto"),
      );
    }
  };

  // Filtra los productos por categoría.
  const productosFiltrados = productos.filter((product) => {
    if (!categoriaSeleccionada) return true;
    return (
      product.categoria_id === categoriaSeleccionada ||
      product.categorias?.id === categoriaSeleccionada
    );
  });

  // Calcula el valor del inventario filtrado.
  const valorTotalInventario = productosFiltrados.reduce((acc, product) => {
    const precio = Number(product.precio) || 0;
    const stock = Number(product.stock) || 0;
    return acc + precio * stock;
  }, 0);

  // Calcula los índices de la página actual.
  const totalPaginas =
    Math.ceil(productosFiltrados.length / productosPorPagina) || 1;
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosPaginados = productosFiltrados.slice(
    indicePrimerProducto,
    indiceUltimoProducto,
  );

  // Renderiza los controles de paginación.
  const renderPaginacion = () => (
    <div className="p-space-md border-b border-surface-variant flex flex-col sm:flex-row items-center justify-between gap-space-sm bg-surface-container-low">
      <span className="font-body-sm text-body-sm text-secondary">
        Mostrando{" "}
        <strong className="text-on-surface">
          {productosFiltrados.length > 0 ? indicePrimerProducto + 1 : 0} -{" "}
          {Math.min(indiceUltimoProducto, productosFiltrados.length)}
        </strong>{" "}
        de{" "}
        <strong className="text-on-surface">{productosFiltrados.length}</strong>{" "}
        productos filtrados
      </span>
      <div className="flex items-center gap-1">
        <button
          onClick={() => setPaginaActual((prev) => Math.max(prev - 1, 1))}
          disabled={paginaActual === 1}
          className={`px-2.5 py-1 font-label-md text-label-md rounded border border-surface-variant ${
            paginaActual === 1
              ? "bg-surface-container text-secondary opacity-50 cursor-not-allowed"
              : "bg-surface-container hover:bg-surface-container-high text-on-surface"
          }`}
        >
          Anterior
        </button>
        <span className="px-3 py-1 font-label-md text-label-md text-on-surface">
          Página {paginaActual} de {totalPaginas}
        </span>
        <button
          onClick={() =>
            setPaginaActual((prev) => Math.min(prev + 1, totalPaginas))
          }
          disabled={paginaActual === totalPaginas || totalPaginas === 0}
          className={`px-2.5 py-1 font-label-md text-label-md rounded border border-surface-variant ${
            paginaActual === totalPaginas || totalPaginas === 0
              ? "bg-surface-container text-secondary opacity-50 cursor-not-allowed"
              : "bg-surface-container hover:bg-surface-container-high text-on-surface"
          }`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex min-h-screen pt-[156px]">
        <AdminSideBar />
        <main className="flex-1 pl-64 w-full bg-surface min-h-[calc(100vh-156px)] p-space-xl">
          <div className="flex flex-col w-full">
            {/* Resumen del inventario */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md mb-space-lg bg-surface-container-lowest p-space-lg border border-surface-variant rounded">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                    Base de Datos Centralizada
                  </span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                  Inventario de Hardware
                </h1>
                <p className="font-body-md text-body-md text-secondary">
                  Control de existencias físicas en Sucursal Belgrano y Depósito
                  Logístico Central.
                </p>
              </div>

              {/* Alta de producto */}
              <button
                type="button"
                onClick={abrirAlta}
                className="h-12 px-space-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider font-bold rounded transition-colors flex items-center justify-center gap-space-xs shrink-0"
              >
                <span className="material-symbols-outlined text-[20px]">
                  add
                </span>
                <span>Nuevo producto</span>
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

            {/* Filtros y valor total del inventario */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg bg-surface-container-lowest p-space-md border border-surface-variant rounded">
              <div className="flex flex-wrap items-center gap-space-sm">
                <select
                  value={categoriaSeleccionada}
                  onChange={(e) => {
                    setCategoriaSeleccionada(e.target.value);
                    setPaginaActual(1); // Reinicia la paginación al cambiar el filtro.
                  }}
                  className="h-10 px-space-md bg-surface border border-surface-variant text-on-surface font-label-md text-label-md rounded focus:outline-none focus:border-primary"
                >
                  <option value="">Categoría: Todas</option>
                  {categorias.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.nombre}
                    </option>
                  ))}
                </select>
                {categoriaSeleccionada && (
                  <button
                    onClick={() => {
                      setCategoriaSeleccionada("");
                      setPaginaActual(1);
                    }}
                    className="h-10 px-space-md bg-surface-container hover:bg-surface-container-high border border-surface-variant text-secondary font-label-md text-label-md rounded flex items-center gap-1 transition-colors"
                    type="button"
                  >
                    <span>Limpiar Filtro</span>
                  </button>
                )}
              </div>
              <div className="flex flex-col items-start lg:items-end">
                <span className="font-label-sm text-label-sm uppercase text-secondary">
                  Valor Total{" "}
                  {categoriaSeleccionada ? "de la Categoría" : "del Inventario"}
                </span>
                <span className="font-headline-md text-headline-md text-primary font-bold">
                  ${valorTotalInventario.toLocaleString("es-AR")} ARS
                </span>
              </div>
            </div>

            {/* Tabla de inventario y paginación */}
            <div className="flex flex-col bg-surface-container-lowest border border-surface-variant rounded">
              {/* Paginación superior */}
              {!loading &&
                !error &&
                productosFiltrados.length > 0 &&
                renderPaginacion()}

              {loading ? (
                <div className="p-space-xl text-center text-secondary font-body-md">
                  Cargando productos...
                </div>
              ) : error ? (
                <div className="p-space-xl text-center text-error font-body-md">
                  Error: {error}
                </div>
              ) : productosFiltrados.length === 0 ? (
                <div className="p-space-xl text-center text-secondary font-body-md">
                  No se encontraron productos en esta categoría.
                </div>
              ) : (
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low border-b border-surface-variant text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                        <th className="p-space-md">Producto</th>
                        <th className="p-space-md">Categoría</th>
                        <th className="p-space-md">Stock</th>
                        <th className="p-space-md">Precio Unitario</th>
                        <th className="p-space-md">Precio Total (Stock)</th>
                        <th className="p-space-md text-right">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-variant font-body-md text-body-md">
                      {productosPaginados.map((product) => {
                        const precioUnitario = Number(product.precio) || 0;
                        const stock = Number(product.stock) || 0;
                        const precioTotal = precioUnitario * stock;

                        return (
                          <tr
                            key={product.id}
                            className="hover:bg-surface-container-low transition-colors"
                          >
                            <td className="p-space-md">
                              <div className="flex items-center gap-space-md">
                                <div className="w-12 h-12 bg-surface border border-surface-variant rounded shrink-0 p-1 flex items-center justify-center">
                                  <img
                                    className="w-full h-full object-contain"
                                    src={product.img}
                                    alt={product.nombre}
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-headline-sm text-label-lg text-on-surface font-bold leading-tight">
                                    {product.nombre}
                                  </span>
                                  {product.activo === false && (
                                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-error font-bold">
                                      Dado de baja
                                    </span>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="p-space-md">
                              <span className="font-label-md text-label-md text-on-surface">
                                {product.categorias?.nombre || "Sin categoría"}
                              </span>
                            </td>
                            <td className="p-space-md">
                              <span className="font-body-md text-on-surface font-bold">
                                {stock} un.
                              </span>
                            </td>
                            <td className="p-space-md">
                              <span className="font-body-md text-on-surface font-bold">
                                ${precioUnitario.toLocaleString("es-AR")} ARS
                              </span>
                            </td>
                            <td className="p-space-md">
                              <span className="font-headline-sm text-label-lg text-primary font-bold leading-tight">
                                ${precioTotal.toLocaleString("es-AR")} ARS
                              </span>
                            </td>
                            <td className="p-space-md">
                              <div className="flex items-center justify-end gap-1">
                                <Link
                                  to={`/product-details/${product.id}`}
                                  title="Ver detalles"
                                  className="inline-flex items-center justify-center w-9 h-9 bg-surface-container hover:bg-surface-container-high border border-surface-variant text-on-surface rounded transition-colors"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    visibility
                                  </span>
                                </Link>

                                <button
                                  type="button"
                                  onClick={() => abrirEdicion(product)}
                                  title="Editar producto"
                                  className="inline-flex items-center justify-center w-9 h-9 bg-surface-container hover:bg-surface-container-high border border-surface-variant text-on-surface rounded transition-colors"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    edit
                                  </span>
                                </button>

                                <button
                                  type="button"
                                  onClick={() => setProductoEnAjuste(product)}
                                  title="Ajustar stock"
                                  className="inline-flex items-center justify-center w-9 h-9 bg-surface-container hover:bg-surface-container-high border border-surface-variant text-on-surface rounded transition-colors"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    inventory
                                  </span>
                                </button>

                                {product.activo === false ? (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      cambiarEstadoProducto(product, true)
                                    }
                                    title="Volver a publicar"
                                    className="inline-flex items-center justify-center w-9 h-9 bg-tertiary hover:bg-tertiary-container text-on-tertiary border border-tertiary rounded transition-colors"
                                  >
                                    <span className="material-symbols-outlined text-[18px]">
                                      restart_alt
                                    </span>
                                  </button>
                                ) : (
                                  <button
                                    type="button"
                                    onClick={() => setConfirmacion(product)}
                                    title="Dar de baja"
                                    className="inline-flex items-center justify-center w-9 h-9 bg-error hover:bg-on-error-container text-on-error border border-error rounded transition-colors"
                                  >
                                    <span className="material-symbols-outlined text-[18px]">
                                      block
                                    </span>
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Paginación inferior */}
              {!loading &&
                !error &&
                productosFiltrados.length > 0 &&
                renderPaginacion()}
            </div>
          </div>
        </main>
      </div>

      {/* Alta y edición de productos */}
      {formAbierto && (
        <ProductFormModal
          producto={productoEnEdicion}
          categorias={categorias}
          onClose={cerrarForm}
          onGuardado={handleGuardado}
        />
      )}

      {/* Ajuste de stock */}
      {productoEnAjuste && (
        <StockModal
          producto={productoEnAjuste}
          onClose={() => setProductoEnAjuste(null)}
          onGuardado={handleGuardado}
        />
      )}

      {/* Confirmación de baja */}
      {confirmacion && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/60 flex items-center justify-center p-space-md">
          <div className="bg-surface-container-lowest border border-surface-variant rounded w-full max-w-md p-space-lg flex flex-col gap-space-md">
            <h2 className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface">
              Dar de baja el producto
            </h2>
            <p className="font-body-md text-body-md text-secondary">
              <strong className="text-on-surface">
                {confirmacion.nombre}
              </strong>{" "}
              va a dejar de aparecer en el catálogo y nadie podrá comprarlo. El
              registro se conserva, así que podés volver a publicarlo cuando
              quieras.
            </p>
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
                onClick={() => cambiarEstadoProducto(confirmacion, false)}
                className="h-10 px-space-lg bg-error hover:bg-on-error-container text-on-error font-label-md text-label-md font-bold uppercase tracking-wider rounded transition-colors"
              >
                Dar de baja
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InventoryPage;
