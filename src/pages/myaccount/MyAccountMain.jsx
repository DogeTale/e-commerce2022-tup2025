import { Link } from "react-router";

function MyAccountMain() {
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
            id="tab-orders"
            onClick={() => {}}
          >
            <span className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[18px]">
                receipt_long
              </span>
              <span>Historial de Pedidos</span>
            </span>
            <span className="bg-primary text-on-primary font-label-sm text-[10px] px-1.5 py-0.5 font-bold">
              2 Activos
            </span>
          </button>
          <button
            className="tab-btn w-full text-left px-space-md py-3 font-label-md text-label-md border-b border-surface-variant flex items-center justify-between text-on-surface-variant hover:bg-surface-container-low transition-none"
            id="tab-rma"
            onClick={() => {}}
          >
            <span className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[18px]">
                verified
              </span>
              <span>Garantías &amp; RMA</span>
            </span>
            <span className="bg-tertiary text-on-tertiary font-label-sm text-[10px] px-1.5 py-0.5 font-bold">
              1 Activo
            </span>
          </button>
          <button
            className="tab-btn w-full text-left px-space-md py-3 font-label-md text-label-md border-b border-surface-variant flex items-center justify-between text-on-surface-variant hover:bg-surface-container-low transition-none"
            id="tab-builds"
            onClick={() => {}}
          >
            <span className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[18px]">
                memory
              </span>
              <span>Presupuestos &amp; Builds</span>
            </span>
            <span className="text-secondary font-label-sm text-[10px]">
              3 guardadas
            </span>
          </button>
          <button
            className="tab-btn w-full text-left px-space-md py-3 font-label-md text-label-md border-b border-surface-variant flex items-center justify-between text-on-surface-variant hover:bg-surface-container-low transition-none"
            id="tab-addresses"
            onClick={() => {}}
          >
            <span className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[18px]">
                pin_drop
              </span>
              <span>Direcciones de Envío</span>
            </span>
            <span className="text-secondary font-label-sm text-[10px]">
              CABA / GBA
            </span>
          </button>
          <button
            className="tab-btn w-full text-left px-space-md py-3 font-label-md text-label-md flex items-center justify-between text-on-surface-variant hover:bg-surface-container-low transition-none"
            id="tab-billing"
            onClick={() => {}}
          >
            <span className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[18px]">
                account_balance
              </span>
              <span>Datos Fiscales (Factura A/B)</span>
            </span>
            <span className="material-symbols-outlined text-[16px] text-tertiary">
              check_circle
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
        {/* =========================================================================
                    PANEL 1: HISTORIAL DE PEDIDOS
                    [ZONA DE TARJETAS PARA REACT]: Aquí deberás mapear el listado de pedidos 
                    provenientes de la base de datos (ej: pedidos.map(pedido => (...)))
                    ========================================================================= */}
        <section
          className="tab-panel flex flex-col gap-space-lg"
          id="panel-orders"
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
                <option>Todos los pedidos (2024)</option>
                <option>Entregados</option>
                <option>En tránsito</option>
                <option>En preparación RMA</option>
              </select>
            </div>
          </div>

          {/* PEDIDO 1 DE EJEMPLO */}
          <article className="bg-surface-container-lowest border border-surface-variant">
            <div className="bg-surface-container-low border-b border-surface-variant p-space-md flex flex-wrap items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-md flex-wrap">
                <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">
                  Pedido #ZL-89104
                </span>
                <span className="text-secondary font-body-sm text-body-sm">
                  | 22 de Octubre 2024
                </span>
                <span className="bg-[#1976D2] text-on-primary font-label-sm text-[11px] px-2.5 py-0.5 uppercase font-bold">
                  En camino por Andreani
                </span>
              </div>
              <div className="text-right">
                <span className="font-label-sm text-[11px] text-secondary uppercase block">
                  Total Abonado
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold">
                  $ 174.900
                  <span className="font-body-sm text-[12px] font-normal text-secondary">
                    ARS
                  </span>
                </span>
              </div>
            </div>
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
                        AR-938210928
                      </span>
                      • Destino:
                      <strong className="text-on-surface">
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
                    to="tracking"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      open_in_new
                    </span>
                    <span>Trazabilidad</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-space-md divide-y divide-surface-variant">
              <div className="py-space-sm flex items-center justify-between gap-space-md first:pt-0 last:pb-0">
                <div className="flex items-center gap-space-md">
                  <img
                    className="w-16 h-16 object-contain bg-surface-container-lowest border border-surface-variant p-1 shrink-0"
                    alt="Logitech G PRO X TKL Lightspeed"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD85k7-AOKjOwxkUu7W6rQvNCn6-7rnegijkoIpghMmbGViORYCgPthXaMBNHUtnBnEyS_VUqug_gFrPK3-Ger_8edYhaWjcGhtR8GLh1SIZ2Xb8wDQ4871IUPFBjvUszRLq6QKR7BwL8hT9_PQQs9cA3c9uWLqHNg3kJX2kQ3a38qJF-sczm7ClkJlCKtJUIFsIvgVlxqg-JzAw2-4EX4nNN5IGZoHl_KkRhvTi53p9eNLeelsCJg"
                  />
                  <div className="flex flex-col">
                    <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">
                      Periféricos / Teclados Mecánicos
                    </span>
                    <span className="font-label-lg text-label-lg text-on-surface font-bold">
                      Logitech G PRO X TKL Lightspeed Wireless - Tactile Brown
                      Switches
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary">
                      SKU: LOG-920-012135 • Cantidad: 1 unidad
                    </span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    $ 174.900
                  </span>
                  <span className="font-body-sm text-[11px] text-tertiary block font-bold">
                    Pagado con Mercado Pago
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low border-t border-surface-variant p-space-sm flex flex-wrap items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-xs text-body-sm font-body-sm text-secondary">
                <span className="material-symbols-outlined text-[16px] text-tertiary">
                  check
                </span>
                <span>Entrega estimada: Mañana entre 11:00 y 16:00 hs</span>
              </div>
              <div className="flex items-center gap-space-xs">
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
              </div>
            </div>
          </article>

          {/* PEDIDO 2 DE EJEMPLO */}
          <article className="bg-surface-container-lowest border border-surface-variant">
            <div className="bg-surface-container-low border-b border-surface-variant p-space-md flex flex-wrap items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-md flex-wrap">
                <span className="font-headline-sm text-headline-sm text-on-surface font-extrabold tracking-tight">
                  Pedido #ZL-84920
                </span>
                <span className="text-secondary font-body-sm text-body-sm">
                  | 14 de Octubre 2024
                </span>
                <span className="bg-tertiary text-on-tertiary font-label-sm text-[11px] px-2.5 py-0.5 uppercase font-bold">
                  Entregado &amp; Finalizado
                </span>
              </div>
              <div className="text-right">
                <span className="font-label-sm text-[11px] text-secondary uppercase block">
                  Total Abonado (15% OFF aplicado)
                </span>
                <span className="font-headline-sm text-headline-sm text-primary font-extrabold">
                  $ 2.018.742
                  <span className="font-body-sm text-[12px] font-normal text-secondary">
                    ARS
                  </span>
                </span>
              </div>
            </div>
            <div className="px-space-md py-2 border-b border-surface-variant bg-surface-container-low flex flex-wrap items-center justify-between text-body-sm font-body-sm text-secondary">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-[16px] text-tertiary">
                  account_balance
                </span>
                <span>
                  Medio de Pago:
                  <strong className="text-on-surface">
                    Transferencia Bancaria BNA (15% Bonificado)
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-space-sm">
                <span>
                  Comprobante AFIP:
                  <strong className="text-on-surface">
                    FC-A 0012-00049281
                  </strong>
                </span>
              </div>
            </div>
            <div className="p-space-md divide-y divide-surface-variant">
              <div className="py-space-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md first:pt-0">
                <div className="flex items-center gap-space-md">
                  <img
                    className="w-16 h-16 object-contain bg-surface-container-lowest border border-surface-variant p-1 shrink-0"
                    alt="ASUS TUF Gaming GeForce RTX 4070 Ti SUPER"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyjuzTxkqa1gtRlsztZcUxBBaHys94E_nDtimj3stOLkJGVRp_9Y47h-AtH5x9uPFUmPTpyVbvHob5TA_6geu9DsJnD96Alao_gOBPe6ve6Ay88qBvvaKnEkhzxnTYl4NSApU_NlB66WOye1-ZqSQXKZKTGk4Tq8LvZ9sC5WJHq-xNNHcVRshKcwEt-GahRKUz1yrzWXaA6rNT8xTWT7OxvzxIZaAsn05MCRyr09iigYFO1m2NOK40"
                  />
                  <div className="flex flex-col">
                    <span className="font-label-sm text-[10px] text-secondary uppercase font-bold">
                      Placas de Video / NVIDIA
                    </span>
                    <span className="font-label-lg text-label-lg text-on-surface font-bold">
                      ASUS TUF Gaming GeForce RTX 4070 Ti SUPER 16GB GDDR6X OC
                      Edition
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary">
                      S/N: M90C450912K • Garantía oficial ZeroLag: 36 Meses
                    </span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    $ 1.340.500
                  </span>
                  <span className="font-body-sm text-[11px] text-tertiary block font-bold">
                    Garantía Activa
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low border-t border-surface-variant p-space-sm flex flex-wrap items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px] text-tertiary">
                  verified_user
                </span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  Productos cubiertos bajo Política RMA ZeroLag
                </span>
              </div>
              <div className="flex items-center gap-space-xs flex-wrap">
                <button className="h-9 px-space-md bg-surface-container-lowest border border-surface-variant font-label-md text-label-md text-on-surface hover:border-primary transition-colors flex items-center gap-1 font-bold">
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    download
                  </span>
                  <span>Ver Factura A (PDF)</span>
                </button>
              </div>
            </div>
          </article>
        </section>

        {/* =========================================================================
                    PANEL 2: GARANTÍAS & RMA
                    [ZONA DE TARJETAS PARA REACT]: Aquí deberás mapear las garantías activas 
                    y tickets de RMA provenientes de la base de datos (ej: garantias.map(...))
                    ========================================================================= */}
        <section
          className="tab-panel flex flex-col gap-space-lg"
          id="panel-rma"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm border-b border-surface-variant pb-space-sm">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                Hardware Protection: Garantías &amp; RMA Directo
              </h2>
              <p className="font-body-sm text-body-sm text-secondary">
                Control de números de serie, vigencia de fabricante y gestión de
                reemplazos.
              </p>
            </div>
            <button className="h-9 px-space-md bg-primary text-on-primary font-label-sm text-label-sm font-bold flex items-center gap-1 hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-[16px]">
                add_circle
              </span>
              <span>Registrar Serial Externo</span>
            </button>
          </div>

          {/* TARJETA DE GARANTÍA DESTACADA DE EJEMPLO */}
          <div className="bg-surface-container-lowest border border-surface-variant p-space-md flex flex-col gap-space-md">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md border-b border-surface-variant pb-space-md">
              <div className="flex items-start gap-space-md">
                <div className="w-20 h-20 bg-surface-container-low border border-surface-variant p-2 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[36px] text-primary">
                    developer_board
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-space-xs flex-wrap">
                    <span className="bg-tertiary text-on-tertiary font-label-sm text-[10px] px-2 py-0.5 uppercase font-bold">
                      Garantía Oficial Activa
                    </span>
                    <span className="text-secondary font-body-sm text-body-sm">
                      Compra: 12 Mayo 2024
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">
                    Sapphire Nitro+ Radeon RX 7900 XTX 24GB Vapor-X
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary mt-0.5">
                    Número de Serie:
                    <span className="font-mono font-bold text-on-surface">
                      SAP-7900XTX-98210492
                    </span>
                    • Factura Asoc:
                    <span className="font-bold text-on-surface">
                      FC-A 0012-00038102
                    </span>
                  </p>
                </div>
              </div>
              <div className="text-left lg:text-right shrink-0">
                <span className="font-label-sm text-[11px] text-secondary uppercase block">
                  Período de Cobertura
                </span>
                <span className="font-headline-md text-headline-md text-tertiary font-extrabold leading-none">
                  28 meses restantes
                </span>
                <span className="font-body-sm text-body-sm text-secondary block mt-1">
                  Vence: 12 de Mayo 2027
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between font-label-sm text-label-sm text-secondary">
                <span>Tiempo transcurrido: 8 meses</span>
                <span>Total cobertura: 36 meses (3 Años)</span>
              </div>
              <div className="w-full h-2 bg-surface-container border border-surface-variant overflow-hidden">
                <div
                  className="h-full bg-tertiary"
                  style={{ width: "22%" }}
                ></div>
              </div>
            </div>
            <div className="bg-surface-container-low border border-surface-variant p-space-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-md text-body-sm font-body-sm text-secondary flex-wrap">
                <span className="flex items-center gap-1 text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">
                    check_circle
                  </span>
                  Cambio Directo 72hs CABA
                </span>
              </div>
              <button className="h-10 px-space-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md uppercase font-bold shrink-0 transition-colors flex items-center justify-center gap-space-xs">
                <span className="material-symbols-outlined text-[18px]">
                  build
                </span>
                <span>Iniciar Ticket RMA / Cambio Express</span>
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================================
                    PANEL 3: BUILDS GUARDADAS
                    [ZONA DE TARJETAS PARA REACT]: Aquí deberás mapear las cotizaciones 
                    y presupuestos guardados desde la base de datos (ej: builds.map(...))
                    ========================================================================= */}
        <section
          className="tab-panel hidden flex-col gap-space-lg"
          id="panel-builds"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm border-b border-surface-variant pb-space-sm">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                Presupuestos &amp; Configuraciones Guardadas
              </h2>
              <p className="font-body-sm text-body-sm text-secondary">
                Cotizaciones armadas con el configurador de ensamble y stock en
                tiempo real.
              </p>
            </div>
            <button className="h-9 px-space-md bg-primary text-on-primary font-label-sm text-label-sm font-bold flex items-center gap-1 hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-[16px]">add</span>
              <span>Nueva Build en Configurador</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {/* BUILD CARD 1 DE EJEMPLO */}
            <div className="bg-surface-container-lowest border border-surface-variant p-space-md flex flex-col justify-between">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Setup Simracing 4K Ultra
                  </span>
                  <span className="bg-surface-container text-secondary font-label-sm text-[10px] px-2 py-0.5 uppercase font-bold">
                    Guardada hace 4 días
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-secondary">
                  Componentes: Ryzen 7 7800X3D + RTX 4080 Super + 64GB DDR5 +
                  B650E-E Gaming
                </p>
                <div className="mt-space-sm bg-surface-container-low p-2 border border-surface-variant flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">
                    Presupuesto Estimado:
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary font-extrabold">
                    $ 3.420.000 ARS
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-xs mt-space-md pt-space-sm border-t border-surface-variant">
                <button className="flex-1 h-9 bg-primary text-on-primary font-label-sm text-label-sm font-bold hover:bg-primary-container transition-colors">
                  Cargar en Carrito
                </button>
                <button className="h-9 px-3 bg-surface-container border border-surface-variant text-on-surface font-label-sm text-label-sm hover:bg-surface-variant transition-colors">
                  Exportar PDF
                </button>
              </div>
            </div>

            {/* BUILD CARD 2 DE EJEMPLO */}
            <div className="bg-surface-container-lowest border border-surface-variant p-space-md flex flex-col justify-between">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Mini-ITX Workstation
                  </span>
                  <span className="bg-surface-container text-secondary font-label-sm text-[10px] px-2 py-0.5 uppercase font-bold">
                    Guardada hace 12 días
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-secondary">
                  Componentes: Intel Core i7 14700K + RTX 4070 Dual + Gabinete
                  Lian Li A4-H2O
                </p>
                <div className="mt-space-sm bg-surface-container-low p-2 border border-surface-variant flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">
                    Presupuesto Estimado:
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary font-extrabold">
                    $ 2.680.000 ARS
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-xs mt-space-md pt-space-sm border-t border-surface-variant">
                <button className="flex-1 h-9 bg-primary text-on-primary font-label-sm text-label-sm font-bold hover:bg-primary-container transition-colors">
                  Cargar en Carrito
                </button>
                <button className="h-9 px-3 bg-surface-container border border-surface-variant text-on-surface font-label-sm text-label-sm hover:bg-surface-variant transition-colors">
                  Exportar PDF
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
                    PANEL 4: DIRECCIONES
                    [ZONA DE TARJETAS PARA REACT]: Aquí deberás mapear las direcciones de envío 
                    registradas desde la base de datos (ej: direcciones.map(...))
                    ========================================================================= */}
        <section
          className="tab-panel hidden flex-col gap-space-lg"
          id="panel-addresses"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm border-b border-surface-variant pb-space-sm">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                Direcciones de Envío Registradas
              </h2>
              <p className="font-body-sm text-body-sm text-secondary">
                Destinos validados con Andreani y Correo Argentino para envíos
                asegurados.
              </p>
            </div>
            <button className="h-9 px-space-md bg-primary text-on-primary font-label-sm text-label-sm font-bold flex items-center gap-1 hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-[16px]">
                add_location
              </span>
              <span>Nueva Dirección</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {/* DIRECCIÓN 1 DE EJEMPLO */}
            <div className="bg-surface-container-lowest border-2 border-primary p-space-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-primary text-on-primary font-label-sm text-[10px] px-2 py-0.5 uppercase font-bold">
                    Predeterminada (CABA)
                  </span>
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    home
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Depto. Belgrano R
                </h3>
                <p className="font-body-md text-body-md text-on-surface mt-1">
                  Av. Cramer 1840, Piso 5, Dpto B
                </p>
                <p className="font-body-sm text-body-sm text-secondary">
                  Código Postal: C1428CQF • CABA, Argentina
                </p>
              </div>
              <div className="flex items-center gap-space-xs mt-space-md pt-space-sm border-t border-surface-variant">
                <button className="font-label-sm text-label-sm text-primary font-bold hover:text-primary-container transition-colors">
                  Editar
                </button>
              </div>
            </div>

            {/* DIRECCIÓN 2 DE EJEMPLO */}
            <div className="bg-surface-container-lowest border border-surface-variant p-space-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-surface-container text-secondary font-label-sm text-[10px] px-2 py-0.5 uppercase font-bold">
                    Oficina / Trabajo
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    apartment
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Estudio Dev Núñez
                </h3>
                <p className="font-body-md text-body-md text-on-surface mt-1">
                  Crisólogo Larralde 2100, Piso 1
                </p>
                <p className="font-body-sm text-body-sm text-secondary">
                  Código Postal: C1429 • CABA, Argentina
                </p>
              </div>
              <div className="flex items-center gap-space-xs mt-space-md pt-space-sm border-t border-surface-variant">
                <button className="font-label-sm text-label-sm text-primary font-bold hover:text-primary-container transition-colors">
                  Editar
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
                    PANEL 5: FACTURACIÓN FISCAL
                    ========================================================================= */}
        <section
          className="tab-panel hidden flex-col gap-space-lg"
          id="panel-billing"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm border-b border-surface-variant pb-space-sm">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                Datos Fiscales de Facturación
              </h2>
              <p className="font-body-sm text-body-sm text-secondary">
                Información registrada ante AFIP para emisión automática de
                facturas.
              </p>
            </div>
            <span className="bg-tertiary text-on-tertiary font-label-sm text-label-sm px-2.5 py-1 uppercase font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                check
              </span>
              <span>Constancia AFIP Validada</span>
            </span>
          </div>
          <div className="bg-surface-container-lowest border border-surface-variant p-space-lg">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm uppercase font-bold text-secondary">
                  Condición frente al IVA
                </label>
                <input
                  className="h-10 px-3 bg-surface-container-low border border-surface-variant text-on-surface font-body-md text-body-md font-bold"
                  readOnly
                  type="text"
                  value="Responsable Inscripto (Emite Factura A)"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm uppercase font-bold text-secondary">
                  Razón Social / Nombre Completo
                </label>
                <input
                  className="h-10 px-3 bg-surface-container-low border border-surface-variant text-on-surface font-body-md text-body-md font-bold"
                  readOnly
                  type="text"
                  value="MARTÍN GÓMEZ"
                />
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MyAccountMain;
