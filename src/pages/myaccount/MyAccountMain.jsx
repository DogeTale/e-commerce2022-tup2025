import { useEffect, useState } from "react";
import { Link } from "react-router";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/money.js";
import axiosAuth from "../../api/axiosAuth.js";

function MyAccountMain() {
  const [Pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPedidosData = async () => {
      try {
        const response = await axiosAuth.get("api/pedidos");
        setPedidos(response.data);
      } catch (error) {
        console.error("Error al cargar los pedidos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPedidosData();
  }, []);

  if (loading) {
    return (
      <div className="w-full pt-[156px] bg-surface min-h-[calc(100vh-156px)] flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <span className="font-body-md text-secondary uppercase tracking-wider text-xs">
            Verificando historial de pedidos...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
      {/* NAVEGACIÓN LATERAL / PESTAÑAS TÉCNICAS */}
      <aside className="lg:col-span-3 flex flex-col gap-space-sm">
        <nav
          className="bg-surface-container-lowest border border-surface-variant flex flex-col"
          id="profileTabs"
        >
          <button
            className="tab-btn w-full text-left px-space-md py-3 font-label-md text-label-md border-b border-surface-variant flex items-center justify-between bg-surface-container-low text-primary border-l-4 border-l-primary font-bold transition-none"
            id="tab-Pedidos"
            onClick={() => {}}
          >
            <span className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[18px]">
                receipt_long
              </span>
              <span>Historial de Pedidos</span>
            </span>
            <span className="bg-primary text-on-primary font-label-sm text-[10px] px-1.5 py-0.5 font-bold">
              {Pedidos.length} Activos
            </span>
          </button>
        </nav>

        {/* Widget de Asistencia Técnica Directa */}
        <div className="bg-surface-container-lowest border border-surface-variant p-space-md flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs text-on-surface">
            <span className="material-symbols-outlined text-[20px] text-primary">
              headset_mic
            </span>
            <span className="font-label-md text-label-md font-bold uppercase">
              Soporte Técnico ZeroLag
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-secondary">
            ¿Dudas de compatibilidad de BIOS, voltajes o problemas de
            post-ensamble?
          </p>
          <div className="bg-surface-container-low border border-surface-variant p-2 font-mono text-[12px] text-on-surface mt-1">
            WhatsApp Exclusivo:
            <span className="font-bold text-tertiary">+54 9 11 4920-8812</span>
          </div>
          <span className="text-[10px] text-secondary">
            Lunes a Viernes 10:00 a 19:00 hs. Atención por técnicos
            especializados.
          </span>
        </div>
      </aside>

      {/* ÁREA DE CONTENIDO DINÁMICO */}
      <main className="lg:col-span-9 flex flex-col gap-space-lg">
        <section
          className="tab-panel flex flex-col gap-space-lg"
          id="panel-Pedidos"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm border-b border-surface-variant pb-space-sm">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                Historial de Pedidos y Hardware
              </h2>
              <p className="font-body-sm text-body-sm text-secondary">
                Visualizá tus comprobantes fiscales, guías de despacho y estados
                de ensamble.
              </p>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">
                Filtro:
              </span>
              <select className="h-8 px-2 bg-surface-container-low border border-surface-variant font-label-md text-label-md text-on-surface focus:outline-none">
                <option>Todos los pedidos (2026)</option>
                <option>Pendientes</option>
                <option>Aprobados</option>
                <option>Entregados</option>
              </select>
            </div>
          </div>

          {Pedidos.map((order) => {
            const isPendiente = order.estado === "PENDIENTE";

            return (
              <article
                key={order.id}
                className="bg-surface-container-lowest border border-surface-variant"
              >
                <div className="bg-surface-container-low border-b border-surface-variant p-space-md flex flex-wrap items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-md flex-wrap">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">
                      Pedido #{order.id.slice(0, 8)}
                    </span>
                    <span className="text-secondary font-body-sm text-body-sm capitalize">
                      | {dayjs(order.fecha_creacion).format("D [de] MMMM YYYY")}
                    </span>
                    <span
                      className={`font-label-sm text-[11px] px-2.5 py-0.5 uppercase font-bold text-on-primary ${
                        isPendiente ? "bg-amber-600" : "bg-[#1976D2]"
                      }`}
                    >
                      {order.estado}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-label-sm text-[11px] text-secondary uppercase block">
                      Total a Pagar
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">
                      {formatMoney(Number(order.total))}
                      <span className="font-body-sm text-[12px] font-normal text-secondary">
                        {" "}
                        ARS
                      </span>
                    </span>
                  </div>
                </div>

                {!isPendiente && (
                  <div className="p-space-md border-b border-surface-variant bg-surface-container-lowest">
                    <div className="bg-surface-container-low border border-surface-variant p-space-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-[24px] text-[#1976D2]">
                          local_shipping
                        </span>
                        <div>
                          <span className="font-label-md text-label-md text-on-surface font-bold">
                            Seguimiento Andreani Express
                          </span>
                          <p className="font-body-sm text-body-sm text-secondary">
                            Número de Guía:
                            <span className="font-mono font-bold text-on-surface">
                              {" "}
                              AR-938210928{" "}
                            </span>
                            • Destino:
                            <strong className="text-on-surface">
                              {" "}
                              Showroom Belgrano (Retiro Express)
                            </strong>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-space-xs">
                        <span className="bg-[#1976D2] text-on-primary px-2 py-1 font-label-sm text-label-sm font-bold">
                          En tránsito a Belgrano, CABA
                        </span>
                        <Link
                          className="h-8 px-3 bg-surface border border-surface-variant font-label-sm text-label-sm text-on-surface hover:bg-surface-container flex items-center gap-1 font-bold"
                          to={`tracking/${order.id}`}
                        >
                          <span className="material-symbols-outlined text-[14px]">
                            open_in_new
                          </span>
                          <span>Trazabilidad</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mapeo de detalle_pedidos y productos */}
                {order.detalle_pedidos?.map((detalle) => {
                  const producto = detalle.productos;
                  return (
                    <div
                      key={detalle.id}
                      className="p-space-md divide-y divide-surface-variant"
                    >
                      <div className="py-space-sm flex items-center justify-between gap-space-md first:pt-0 last:pb-0">
                        <div className="flex items-center gap-space-md">
                          <img
                            className="w-16 h-16 object-contain bg-surface-container-lowest border border-surface-variant p-1 shrink-0"
                            alt={producto?.nombre}
                            src={producto?.img}
                          />
                          <div className="flex flex-col">
                            <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">
                              Hardware / Periféricos
                            </span>
                            <span className="font-label-lg text-label-lg text-on-surface font-bold">
                              {producto?.nombre}
                            </span>
                            <span className="font-body-sm text-body-sm text-secondary">
                              SKU: {producto?.id.slice(0, 8)} • Cantidad:{" "}
                              {detalle.cantidad} unidad
                              {detalle.cantidad > 1 ? "es" : ""}
                            </span>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                            {formatMoney(Number(detalle.subtotal))}
                          </span>
                          <span className="font-body-sm text-[11px] text-tertiary block font-bold">
                            {isPendiente
                              ? "Pago pendiente"
                              : "Pagado con Mercado Pago"}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="bg-surface-container-low border-t border-surface-variant p-space-sm flex flex-wrap items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-xs text-body-sm font-body-sm text-secondary">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">
                      check
                    </span>
                    <span className="capitalize">
                      Fecha de orden:{" "}
                      {dayjs(order.fecha_creacion).format("MMMM D, YYYY")}
                    </span>
                  </div>

                  <div className="flex items-center gap-space-xs">
                    {isPendiente ? (
                      <Link
                        to="/checkout"
                        className="h-9 px-space-md bg-primary text-on-primary hover:bg-primary/90 transition-colors flex items-center gap-1 font-bold rounded"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          credit_card
                        </span>
                        <span>Proceder al pago</span>
                      </Link>
                    ) : (
                      <>
                        <button className="h-9 px-space-md bg-surface-container-lowest border border-surface-variant font-label-md text-label-md text-on-surface hover:bg-surface transition-colors flex items-center gap-1 font-bold">
                          <span className="material-symbols-outlined text-[16px]">
                            picture_as_pdf
                          </span>
                          <span>Factura B</span>
                        </button>
                        <button className="h-9 px-space-md bg-surface-container-lowest border border-surface-variant font-label-md text-label-md text-on-surface hover:bg-surface transition-colors flex items-center gap-1 font-bold">
                          <span className="material-symbols-outlined text-[16px]">
                            help
                          </span>
                          <span>Consultar Despacho</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default MyAccountMain;
