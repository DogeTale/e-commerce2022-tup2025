import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import axiosAuth from "../api/axiosAuth.js";
import { formatMoney } from "../utils/money.js";
import { mensajeDeError } from "../utils/apiError.js";

// El webhook de Mercado Pago puede llegar unos segundos después de que el
// comprador vuelve al sitio, así que se reintenta la consulta del pedido.
const INTENTOS_MAXIMOS = 8;
const ESPERA_ENTRE_INTENTOS = 2500;

/** Cómo se presenta cada estado posible del pedido. */
const PRESENTACION = {
  APROBADO: {
    icono: "check_circle",
    titulo: "¡Pago confirmado!",
    detalle:
      "Recibimos tu pago y ya estamos preparando el pedido. Te vamos a avisar cuando salga de nuestro depósito.",
    clases: "bg-tertiary-fixed border-tertiary text-on-tertiary-fixed",
  },
  PENDIENTE: {
    icono: "schedule",
    titulo: "Estamos confirmando tu pago",
    detalle:
      "Mercado Pago todavía no nos confirmó la operación. Si pagaste con efectivo o transferencia puede demorar unos minutos. El pedido ya quedó registrado.",
    clases: "bg-surface-container-high border-outline text-on-surface",
  },
  RECHAZADO: {
    icono: "cancel",
    titulo: "El pago fue rechazado",
    detalle:
      "Mercado Pago no aprobó la operación. Podés intentar de nuevo con otro medio de pago desde tus pedidos.",
    clases: "bg-error-container border-error text-on-error-container",
  },
  CANCELADO: {
    icono: "do_not_disturb_on",
    titulo: "El pago fue cancelado",
    detalle:
      "La operación se canceló antes de completarse. El pedido sigue registrado y podés volver a pagarlo.",
    clases: "bg-error-container border-error text-on-error-container",
  },
  REEMBOLSADO: {
    icono: "undo",
    titulo: "El pago fue reembolsado",
    detalle: "El importe de este pedido fue devuelto a tu medio de pago.",
    clases: "bg-surface-container-high border-outline text-on-surface",
  },
};

/** Muestra el resultado del pago al volver desde Mercado Pago. */
function PaymentResultPage() {
  const [searchParams] = useSearchParams();

  // Mercado Pago devuelve el id del pedido en external_reference.
  const pedidoId = searchParams.get("external_reference");
  const estadoMercadoPago =
    searchParams.get("collection_status") || searchParams.get("status");
  const pagoId =
    searchParams.get("payment_id") || searchParams.get("collection_id");

  const [pedido, setPedido] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    let cancelado = false;

    const esperar = (ms) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const consultarPedido = async () => {
      if (!pedidoId) {
        setCargando(false);
        return;
      }

      for (let intento = 0; intento < INTENTOS_MAXIMOS; intento += 1) {
        try {
          const response = await axiosAuth.get(`/api/pedidos/${pedidoId}`);

          if (cancelado) return;

          setPedido(response.data);

          // Solo se insiste mientras Mercado Pago haya aprobado el pago y el
          // pedido siga pendiente, que es la ventana en la que falta el webhook.
          const faltaElWebhook =
            response.data.estado === "PENDIENTE" &&
            estadoMercadoPago === "approved";

          if (!faltaElWebhook) break;
        } catch (error) {
          if (cancelado) return;

          console.error("Error al consultar el pedido:", error);
          setErrorMsg(mensajeDeError(error, "No se pudo consultar el pedido"));
          break;
        }

        await esperar(ESPERA_ENTRE_INTENTOS);
      }

      if (!cancelado) setCargando(false);
    };

    consultarPedido();

    return () => {
      cancelado = true;
    };
  }, [pedidoId, estadoMercadoPago]);

  const presentacion =
    PRESENTACION[pedido?.estado] ?? PRESENTACION.PENDIENTE;

  const cantidadArticulos =
    pedido?.detalle_pedidos?.reduce(
      (total, detalle) => total + detalle.cantidad,
      0,
    ) ?? 0;

  return (
    <>
      <title>Resultado del pago</title>

      <main className="w-full pt-24 sm:pt-[156px] bg-surface min-h-[calc(100vh-156px)]">
        <div className="max-w-[720px] mx-auto w-full px-4 sm:px-margin-desktop py-space-xl flex flex-col gap-space-lg">
          {cargando ? (
            /* Mientras se espera la confirmación del webhook */
            <div className="bg-surface-container-lowest border border-surface-variant rounded p-space-xl flex flex-col items-center gap-space-md text-center">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <h1 className="font-headline-sm text-headline-sm uppercase tracking-tight text-on-surface">
                Confirmando tu pago...
              </h1>
              <p className="font-body-md text-body-md text-secondary">
                Estamos verificando la operación con Mercado Pago. No cierres
                esta página.
              </p>
            </div>
          ) : (
            <>
              {/* Resultado */}
              <div
                className={`border rounded p-space-xl flex flex-col items-center gap-space-sm text-center ${presentacion.clases}`}
              >
                <span className="material-symbols-outlined text-[56px]">
                  {presentacion.icono}
                </span>
                <h1 className="font-headline-lg text-headline-lg uppercase tracking-tight">
                  {presentacion.titulo}
                </h1>
                <p className="font-body-md text-body-md max-w-prose">
                  {presentacion.detalle}
                </p>
              </div>

              {/* Error al consultar el pedido */}
              {errorMsg && (
                <div className="bg-error-container border border-error rounded p-space-md font-body-md text-body-md text-on-error-container">
                  {errorMsg}
                </div>
              )}

              {/* Detalle del pedido */}
              {pedido && (
                <div className="bg-surface-container-lowest border border-surface-variant rounded">
                  <div className="p-space-lg border-b border-surface-variant flex flex-wrap items-center justify-between gap-space-sm">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                        Pedido
                      </span>
                      <span className="font-headline-sm text-label-lg text-on-surface font-bold">
                        #{pedido.id.slice(0, 8).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                        Estado
                      </span>
                      <span className="font-label-md text-label-md text-on-surface font-bold">
                        {pedido.estado}
                      </span>
                    </div>
                  </div>

                  {/* Artículos */}
                  <ul className="divide-y divide-surface-variant">
                    {pedido.detalle_pedidos?.map((detalle) => (
                      <li
                        key={detalle.id}
                        className="p-space-md flex items-center gap-space-md"
                      >
                        <div className="w-12 h-12 bg-surface border border-surface-variant rounded shrink-0 p-1 flex items-center justify-center">
                          <img
                            className="w-full h-full object-contain"
                            src={detalle.productos?.img}
                            alt={detalle.productos?.nombre}
                          />
                        </div>
                        <span className="flex-1 font-body-md text-body-md text-on-surface">
                          {detalle.productos?.nombre}
                        </span>
                        <span className="font-body-md text-body-md text-secondary shrink-0">
                          x{detalle.cantidad}
                        </span>
                        <span className="font-label-md text-label-md text-on-surface font-bold shrink-0">
                          {formatMoney(Number(detalle.subtotal))}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Total */}
                  <div className="p-space-lg border-t border-surface-variant flex items-center justify-between bg-surface-container-low">
                    <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">
                      Total · {cantidadArticulos} artículo
                      {cantidadArticulos === 1 ? "" : "s"}
                    </span>
                    <span className="font-headline-md text-headline-md text-primary font-bold">
                      {formatMoney(Number(pedido.total))} ARS
                    </span>
                  </div>
                </div>
              )}

              {/* Sin referencia al pedido en la URL */}
              {!pedidoId && (
                <div className="bg-surface-container-lowest border border-surface-variant rounded p-space-lg font-body-md text-body-md text-secondary text-center">
                  No pudimos identificar el pedido desde el enlace de retorno.
                  Podés revisar su estado en tu historial de pedidos.
                </div>
              )}

              {/* Comprobante de Mercado Pago */}
              {pagoId && (
                <p className="font-body-sm text-label-sm text-secondary text-center">
                  Operación de Mercado Pago #{pagoId}
                </p>
              )}

              {/* Acciones */}
              <div className="flex flex-col sm:flex-row gap-space-sm">
                <Link
                  to="/orders"
                  className="flex-1 h-12 bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider font-bold rounded transition-colors flex items-center justify-center gap-space-xs"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    receipt_long
                  </span>
                  <span>Ver mis pedidos</span>
                </Link>
                <Link
                  to="/"
                  className="flex-1 h-12 bg-surface-container hover:bg-surface-container-high border border-surface-variant text-on-surface font-label-lg text-label-lg uppercase tracking-wider font-bold rounded transition-colors flex items-center justify-center"
                >
                  Seguir comprando
                </Link>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default PaymentResultPage;
