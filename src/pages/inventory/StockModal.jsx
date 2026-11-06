import { useState } from "react";
import axiosAuth from "../../api/axiosAuth.js";

/** Ajusta el stock de un producto por diferencia (ingreso o descuento). */
function StockModal({ producto, onClose, onGuardado }) {
  const [cantidad, setCantidad] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [guardando, setGuardando] = useState(false);

  const diferencia = Number(cantidad);
  const diferenciaValida = Number.isInteger(diferencia) && diferencia !== 0;
  const stockResultante = producto.stock + (diferenciaValida ? diferencia : 0);
  const puedeGuardar = diferenciaValida && stockResultante >= 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    setGuardando(true);

    try {
      await axiosAuth.patch(`/api/productos/${producto.id}/stock`, {
        cantidad: diferencia,
      });

      onGuardado(
        `Stock de "${producto.nombre}" actualizado a ${stockResultante} unidades`,
      );
    } catch (error) {
      console.error("Error al ajustar el stock:", error);

      setErrorMsg(
        error.response?.data?.error ?? "No se pudo ajustar el stock",
      );
    } finally {
      setGuardando(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/60 flex items-center justify-center p-space-md">
      <div className="bg-surface-container-lowest border border-surface-variant rounded w-full max-w-md">
        {/* Cabecera */}
        <div className="flex items-center justify-between p-space-lg border-b border-surface-variant">
          <h2 className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface">
            Ajustar stock
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
          <div className="flex flex-col gap-1">
            <span className="font-label-md text-label-md text-on-surface font-bold">
              {producto.nombre}
            </span>
            <span className="font-body-md text-body-md text-secondary">
              Stock actual: <strong>{producto.stock}</strong> unidades
            </span>
          </div>

          {errorMsg && (
            <div className="bg-error-container border border-error rounded p-space-sm font-body-md text-body-md text-on-error-container">
              {errorMsg}
            </div>
          )}

          {/* Cantidad a sumar o restar */}
          <div className="flex flex-col gap-1.5">
            <label
              className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold"
              htmlFor="stock-cantidad"
            >
              Cantidad a ajustar
            </label>
            <input
              id="stock-cantidad"
              type="number"
              step="1"
              required
              autoFocus
              placeholder="Ej: 10 para ingresar, -2 para descontar"
              className="h-10 px-space-sm bg-surface-container-low border border-surface-variant text-body-md text-on-surface rounded focus:outline-none focus:border-primary"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
            />

            {/* Atajos de ajuste */}
            <div className="flex flex-wrap gap-1 pt-1">
              {[1, 5, 10, -1].map((valor) => (
                <button
                  key={valor}
                  type="button"
                  onClick={() => setCantidad(String(valor))}
                  className="px-2.5 py-1 bg-surface-container hover:bg-surface-container-high border border-surface-variant text-on-surface font-label-md text-label-md rounded transition-colors"
                >
                  {valor > 0 ? `+${valor}` : valor}
                </button>
              ))}
            </div>
          </div>

          {/* Resultado del ajuste */}
          {diferenciaValida && (
            <div className="bg-surface-container-low border border-surface-variant rounded p-space-sm font-body-md text-body-md">
              <span className="text-secondary">Stock resultante: </span>
              <strong
                className={
                  stockResultante < 0 ? "text-error" : "text-on-surface"
                }
              >
                {stockResultante} unidades
              </strong>
              {stockResultante < 0 && (
                <span className="text-error">
                  {" "}
                  — el ajuste no puede dejar el stock en negativo.
                </span>
              )}
            </div>
          )}

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
              disabled={!puedeGuardar || guardando}
              className="h-10 px-space-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold uppercase tracking-wider rounded transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {guardando ? "Guardando..." : "Aplicar ajuste"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StockModal;
