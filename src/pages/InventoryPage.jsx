function InventoryPage() {
  return (
    <>
      <div className="flex min-h-screen pt-16">
        <aside className="w-64 fixed left-0 top-16 bottom-0 bg-surface-container-low border-r border-surface-variant flex flex-col justify-between p-space-md z-40">
          <div className="flex flex-col gap-space-md">
            <div className="font-label-sm text-label-sm uppercase text-secondary tracking-wider px-space-xs font-bold">
              Módulos de Gestión
            </div>
            <nav
              className="flex flex-col gap-1"
              data-active-classes="bg-primary text-on-primary font-bold"
            >
              <a
                className="text-on-surface hover:bg-surface-container-highest px-space-md py-2.5 rounded-lg font-label-md text-label-md transition-colors block"
                data-path="admin-dashboard"
                href="#"
              >
                Dashboard General
              </a>
              <a
                aria-current="page"
                className="px-space-md py-2.5 rounded-lg transition-colors block bg-primary text-on-primary font-bold"
                data-path="admin-inventory"
                href="#"
              >
                Inventario &amp; Productos
              </a>
              <a
                className="text-on-surface hover:bg-surface-container-highest px-space-md py-2.5 rounded-lg font-label-md text-label-md transition-colors block"
                data-path="admin-orders"
                href="#"
              >
                Gestión de Pedidos
              </a>
              <a
                className="text-on-surface hover:bg-surface-container-highest px-space-md py-2.5 rounded-lg font-label-md text-label-md transition-colors block"
                data-path="profile"
                href="#"
              >
                Vista Cliente / Mi Perfil
              </a>
              <a
                className="text-on-surface hover:bg-surface-container-highest px-space-md py-2.5 rounded-lg font-label-md text-label-md transition-colors block"
                data-path="about-support"
                href="#"
              >
                Soporte &amp; RMA Interno
              </a>
            </nav>
          </div>
          <div className="border-t border-surface-variant pt-space-md flex flex-col gap-2">
            <div className="px-space-xs font-label-sm text-[11px] text-secondary">
              ZeroLag Backoffice v2.4
              <br />
              Belgrano Hub, CABA
            </div>
            <a
              className="text-error hover:bg-error-container hover:text-on-error-container px-space-md py-2 rounded-lg font-label-md text-label-md transition-colors block text-center border border-error-container"
              data-path="auth"
              href="#"
            >
              Cerrar Sesión
            </a>
          </div>
        </aside>
        <main className="flex-1 pl-64 w-full bg-surface min-h-[calc(100vh-64px)] p-space-xl">
          <div className="flex flex-col w-full">
            {/* Sub-header Operativo y Acciones Masivas */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md mb-space-lg bg-surface-container-lowest p-space-lg border border-surface-variant rounded">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                    Base de Datos Centralizada
                  </span>
                  <span className="text-secondary font-label-sm">•</span>
                  <span className="font-label-sm text-label-sm text-secondary">
                    Trazabilidad Fiscal y RMA
                  </span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                  Inventario de Hardware &amp; Control de Series (SKU)
                </h1>
                <p className="font-body-md text-body-md text-secondary">
                  Control de existencias físicas en Sucursal Belgrano y Depósito
                  Logístico Central. Asignación obligatoria de S/N para
                  validación de garantía.
                </p>
              </div>
              {/* Acciones Principales CRUD */}
              <div className="flex flex-wrap items-center gap-space-sm shrink-0">
                <button
                  className="flex items-center gap-space-xs px-space-md py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md border border-surface-variant transition-colors rounded"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    upload_file
                  </span>
                  <span>Importar Excel / CSV Mayorista</span>
                </button>
                <button
                  className="flex items-center gap-space-xs px-space-md py-2 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md border border-surface-variant transition-colors rounded"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    receipt_long
                  </span>
                  <span>Exportar Precios AFIP</span>
                </button>
                <button
                  className="flex items-center gap-space-xs px-space-lg py-2 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-colors rounded font-bold"
                  onClick="
                  document
                    .getElementById('product-drawer')
                    .classList.remove('hidden')
                "
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    add_box
                  </span>
                  <span>+ Cargar Nuevo Producto</span>
                </button>
              </div>
            </div>
            {/* Métricas Rápidas de Depósito */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md mb-space-lg">
              <div className="bg-surface-container-lowest border border-surface-variant p-space-md rounded flex items-center justify-between">
                <div>
                  <div className="font-label-sm text-label-sm uppercase text-secondary">
                    Total SKUs Activos
                  </div>
                  <div className="font-headline-md text-headline-md text-on-surface">
                    1.482
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary text-[32px]">
                  memory
                </span>
              </div>
              <div className="bg-surface-container-lowest border border-surface-variant p-space-md rounded flex items-center justify-between">
                <div>
                  <div className="font-label-sm text-label-sm uppercase text-secondary">
                    Valorizado Belgrano
                  </div>
                  <div className="font-headline-md text-headline-md text-primary">
                    $184.920.400 ARS
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary text-[32px]">
                  payments
                </span>
              </div>
              <div className="bg-surface-container-lowest border border-surface-variant p-space-md rounded flex items-center justify-between">
                <div>
                  <div className="font-label-sm text-label-sm uppercase text-secondary">
                    Alertas Stock Crítico
                  </div>
                  <div className="font-headline-md text-headline-md text-error">
                    9 Ítems
                  </div>
                </div>
                <span className="material-symbols-outlined text-error text-[32px]">
                  warning
                </span>
              </div>
              <div className="bg-surface-container-lowest border border-surface-variant p-space-md rounded flex items-center justify-between">
                <div>
                  <div className="font-label-sm text-label-sm uppercase text-secondary">
                    Series Pendientes Ingreso
                  </div>
                  <div className="font-headline-md text-headline-md text-on-surface">
                    34 S/N
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary text-[32px]">
                  qr_code_scanner
                </span>
              </div>
            </div>
            {/* Filtros y Búsqueda */}
            <div className="flex flex-col gap-space-md mb-space-lg bg-surface-container-lowest p-space-md border border-surface-variant rounded">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
                {/* Input de Búsqueda */}
                <div className="lg:col-span-5 relative">
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-secondary text-[20px]">
                    search
                  </span>
                  <input
                    className="w-full h-10 pl-10 pr-space-md bg-surface border border-surface-variant text-on-surface font-body-md text-body-md rounded focus:outline-none focus:border-primary"
                    placeholder="Buscar por Nombre, SKU de fabricante, o S/N de serie individual..."
                    type="text"
                  />
                </div>
                {/* Selectores de Filtrado */}
                <div className="lg:col-span-7 flex flex-wrap items-center gap-space-sm">
                  <select className="h-10 px-space-md bg-surface border border-surface-variant text-on-surface font-label-md text-label-md rounded focus:outline-none focus:border-primary">
                    <option value="">Categoría: Todas</option>
                    <option value="gpu">Placas de Video (GPUs)</option>
                    <option value="cpu">Procesadores (CPUs)</option>
                    <option value="ram">Memorias RAM</option>
                    <option value="psu">Fuentes de Poder (PSU)</option>
                    <option value="case">Gabinetes</option>
                    <option value="mb">Motherboards</option>
                  </select>
                  <select className="h-10 px-space-md bg-surface border border-surface-variant text-on-surface font-label-md text-label-md rounded focus:outline-none focus:border-primary">
                    <option value="">Estado Stock: Todos</option>
                    <option value="deposito">En Depósito (&gt;5)</option>
                    <option value="bajo">Stock Bajo (&lt;3)</option>
                    <option value="preventa">En Tránsito / Preventa</option>
                    <option value="agotado">Sin Existencias</option>
                  </select>
                  <select className="h-10 px-space-md bg-surface border border-surface-variant text-on-surface font-label-md text-label-md rounded focus:outline-none focus:border-primary">
                    <option value="">Proveedor: Todos</option>
                    <option value="newbytes">New Bytes</option>
                    <option value="stylus">Stylus S.A.</option>
                    <option value="elit">Elit Distribuidor</option>
                    <option value="invid">Invid Computers</option>
                  </select>
                  <button
                    className="h-10 px-space-md bg-surface-container hover:bg-surface-container-high border border-surface-variant text-secondary font-label-md text-label-md rounded flex items-center gap-1 transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      filter_list_off
                    </span>
                    <span>Limpiar</span>
                  </button>
                </div>
              </div>
              {/* Quick Chips Categorías */}
              <div className="flex items-center gap-space-xs overflow-x-auto pt-space-xs border-t border-surface-variant">
                <span className="font-label-sm text-label-sm uppercase text-secondary mr-2">
                  Acceso Rápido:
                </span>
                <span className="px-2.5 py-1 bg-primary text-on-primary font-label-sm text-label-sm rounded cursor-pointer">
                  GPUs (34)
                </span>
                <span className="px-2.5 py-1 bg-surface-container border border-surface-variant text-secondary hover:text-on-surface font-label-sm text-label-sm rounded cursor-pointer">
                  CPUs AM5 &amp; LGA1700 (28)
                </span>
                <span className="px-2.5 py-1 bg-surface-container border border-surface-variant text-secondary hover:text-on-surface font-label-sm text-label-sm rounded cursor-pointer">
                  DDR5 High Speed (19)
                </span>
                <span className="px-2.5 py-1 bg-surface-container border border-surface-variant text-secondary hover:text-on-surface font-label-sm text-label-sm rounded cursor-pointer">
                  Fuentes Gold 850W+ (12)
                </span>
                <span className="px-2.5 py-1 bg-surface-container border border-surface-variant text-secondary hover:text-on-surface font-label-sm text-label-sm rounded cursor-pointer">
                  NVMe Gen4/Gen5 (42)
                </span>
              </div>
            </div>
            {/* Layout de Dos Columnas: Tabla CRUD y Drawer Lateral de Edición
            Integrado */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
              {/* Tabla Principal de Productos (8 cols si Drawer abierto,
              expansible) */}
              <div className="xl:col-span-8 flex flex-col bg-surface-container-lowest border border-surface-variant rounded">
                {/* Barra Superior de Tabla */}
                <div className="p-space-md border-b border-surface-variant flex items-center justify-between">
                  <div className="flex items-center gap-space-md">
                    <div className="flex items-center gap-space-xs">
                      <input
                        className="w-4 h-4 rounded border-surface-variant text-primary focus:ring-0 cursor-pointer"
                        id="select-all"
                        type="checkbox"
                      />
                      <label
                        className="font-label-md text-label-md text-secondary select-none"
                        htmlFor="select-all"
                      >
                        Seleccionar Todo (4 Ítems en vista)
                      </label>
                    </div>
                    <span className="text-secondary font-label-sm">|</span>
                    <div className="flex items-center gap-space-xs">
                      <button
                        className="font-label-sm text-label-sm text-secondary hover:text-primary px-2 py-1 border border-surface-variant rounded bg-surface"
                        type="button"
                      >
                        Actualizar Precios por Dólar
                      </button>
                      <button
                        className="font-label-sm text-label-sm text-error hover:bg-error-container px-2 py-1 border border-surface-variant rounded bg-surface"
                        type="button"
                      >
                        Desactivar Seleccionados
                      </button>
                    </div>
                  </div>
                  <div className="font-label-sm text-label-sm text-secondary">
                    Dólar Cotización Banco Nación:
                    <strong className="text-on-surface">$1.065,00 ARS</strong>
                  </div>
                </div>
                {/* Tabla de Datos */}
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-container-low border-b border-surface-variant text-secondary font-label-sm text-label-sm uppercase tracking-wider">
                        <th className="p-space-md w-10 text-center">#</th>
                        <th className="p-space-md">
                          Hardware &amp; Identificación
                        </th>
                        <th className="p-space-md">SKU / Serie</th>
                        <th className="p-space-md">Especificación</th>
                        <th className="p-space-md">Stock Loc / Cent</th>
                        <th className="p-space-md">Costo vs PVP ARS</th>
                        <th className="p-space-md">Margen</th>
                        <th className="p-space-md text-right">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-variant font-body-md text-body-md">
                      {/* Fila 1 Seleccionada para Edición en el Drawer */}
                      <tr className="bg-surface-container-low/60 hover:bg-surface-container-low border-l-4 border-l-primary transition-colors">
                        <td className="p-space-md text-center">
                          <input
                            defaultChecked
                            className="w-4 h-4 rounded border-surface-variant text-primary focus:ring-0 cursor-pointer"
                            type="checkbox"
                          />
                        </td>
                        <td className="p-space-md">
                          <div className="flex items-center gap-space-md">
                            <div className="w-12 h-12 bg-surface border border-surface-variant rounded shrink-0 p-1 flex items-center justify-center">
                              <img
                                className="w-full h-full object-contain"
                                data-alt="Tarjeta gráfica ASUS ROG Strix GeForce RTX 4070 Ti SUPER sobre fondo neutro de estudio iluminación flat técnica"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtVcF-rA6w5iqyT6fI8R3Xr6V5jN5J7ZR2vfYcwEQqfSyybWPYSVireK0bDWNfKsQ8SBKkdBXhfaEZCAnrSUCuRrml9OlqvIyOBZ-9XDRWEhdqqPHZS4ou8rn7BJQnEkC1dKvrXN39pYQzY8Tdg-2j5gxKZP-__e1537TRLfAFnx5AsK-dkfgLgt4C24jBxX15g6sOBgH5D-gVQDzwIW5eG-oxqbV3mfLGSa_KkRTrWs5Y6lt4UsfQ"
                              />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-headline-sm text-label-lg text-on-surface font-bold leading-tight">
                                ASUS ROG Strix RTX 4070 Ti SUPER 16GB
                              </span>
                              <span className="font-label-sm text-label-sm text-secondary mt-0.5">
                                Mayorista: New Bytes • Garantía 36m
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <div className="flex flex-col font-mono text-[12px]">
                            <span className="text-on-surface font-bold">
                              ASUS-4070TIS-16G-OC
                            </span>
                            <span className="text-tertiary font-label-sm">
                              14 Series Registrados
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface">
                              GPU PCI-e 4.0
                            </span>
                            <span className="font-body-sm text-body-sm text-secondary">
                              3 Slot / 16-pin 12VHPWR
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <div className="flex flex-col gap-1">
                            <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary bg-tertiary-container/20 px-2 py-0.5 rounded w-max border border-tertiary/30">
                              <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                              Belgrano: 8 un.
                            </span>
                            <span className="font-body-sm text-body-sm text-secondary">
                              Central: 6 un. (Total: 14)
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <div className="flex flex-col">
                            <span className="font-headline-sm text-label-lg text-primary font-bold leading-tight">
                              $1.420.000 ARS
                            </span>
                            <span className="font-body-sm text-body-sm text-secondary">
                              USD $980,00 Neto
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <span className="font-label-md text-label-md text-tertiary font-bold">
                            +28.5%
                          </span>
                        </td>
                        <td className="p-space-md text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="p-1.5 text-primary hover:bg-surface-container border border-surface-variant rounded"
                              title="Editar Producto"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                edit
                              </span>
                            </button>
                            <button
                              className="p-1.5 text-secondary hover:text-on-surface hover:bg-surface-container border border-surface-variant rounded"
                              title="Ver Números de Serie"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                barcode
                              </span>
                            </button>
                            <button
                              className="p-1.5 text-error hover:bg-error-container border border-surface-variant rounded"
                              title="Pausar Publicación"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                pause_circle
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Fila 2 */}
                      <tr className="hover:bg-surface-container-low transition-colors">
                        <td className="p-space-md text-center">
                          <input
                            className="w-4 h-4 rounded border-surface-variant text-primary focus:ring-0 cursor-pointer"
                            type="checkbox"
                          />
                        </td>
                        <td className="p-space-md">
                          <div className="flex items-center gap-space-md">
                            <div className="w-12 h-12 bg-surface border border-surface-variant rounded shrink-0 p-1 flex items-center justify-center">
                              <img
                                className="w-full h-full object-contain"
                                data-alt="Procesador AMD Ryzen 7 7800X3D en caja comercial para armado de PC gaming sobre superficie blanca"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiahAOIcztf60lebIbs-K5yfWIiK8XsXUsJsaZew4uvSudZ7S4Y_b-rgdmfXzYQB0LJ8ERXusaH8Orqcr2H_6kgtgySFRVuYHqikEL9YoolBk1t_8x2K6n0ZBgRGNl3yt4GMtEzIhM1OiCL3mdMuNslXPtz1maU26iHCwbhjoLoSgjfc19YOHVflXSqFYAqmGajGBZj1Sc9U9JRWPFtBjp-aN-12T8yfQ2TklrkXlnQuB10j31jYAr"
                              />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-headline-sm text-label-lg text-on-surface font-bold leading-tight">
                                AMD Ryzen 7 7800X3D 5.0GHz AM5
                              </span>
                              <span className="font-label-sm text-label-sm text-secondary mt-0.5">
                                Mayorista: Stylus S.A. • Garantía 36m
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <div className="flex flex-col font-mono text-[12px]">
                            <span className="text-on-surface font-bold">
                              AMD-100-100000910WOF
                            </span>
                            <span className="text-error font-label-sm">
                              2 Series (Faltan Cargar)
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface">
                              CPU Socket AM5
                            </span>
                            <span className="font-body-sm text-body-sm text-secondary">
                              8C/16T - 3D V-Cache
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <div className="flex flex-col gap-1">
                            <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-error bg-error-container px-2 py-0.5 rounded w-max border border-error/30">
                              <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                              Belgrano: 2 un. (Bajo)
                            </span>
                            <span className="font-body-sm text-body-sm text-secondary">
                              Central: 0 un. (Total: 2)
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <div className="flex flex-col">
                            <span className="font-headline-sm text-label-lg text-primary font-bold leading-tight">
                              $640.000 ARS
                            </span>
                            <span className="font-body-sm text-body-sm text-secondary">
                              USD $460,00 Neto
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <span className="font-label-md text-label-md text-tertiary font-bold">
                            +24.0%
                          </span>
                        </td>
                        <td className="p-space-md text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="p-1.5 text-secondary hover:text-on-surface hover:bg-surface-container border border-surface-variant rounded"
                              title="Editar Producto"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                edit
                              </span>
                            </button>
                            <button
                              className="p-1.5 text-secondary hover:text-on-surface hover:bg-surface-container border border-surface-variant rounded"
                              title="Ver Números de Serie"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                barcode
                              </span>
                            </button>
                            <button
                              className="p-1.5 text-error hover:bg-error-container border border-surface-variant rounded"
                              title="Pausar Publicación"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                pause_circle
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Fila 3 */}
                      <tr className="hover:bg-surface-container-low transition-colors">
                        <td className="p-space-md text-center">
                          <input
                            className="w-4 h-4 rounded border-surface-variant text-primary focus:ring-0 cursor-pointer"
                            type="checkbox"
                          />
                        </td>
                        <td className="p-space-md">
                          <div className="flex items-center gap-space-md">
                            <div className="w-12 h-12 bg-surface border border-surface-variant rounded shrink-0 p-1 flex items-center justify-center">
                              <img
                                className="w-full h-full object-contain"
                                data-alt="Kit de memoria RAM Corsair Vengeance DDR5 RGB negra 32GB dos módulos sobre mesa técnica blanca"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTA_BrCxX7BNV21kj2YAwPoqrttLHaXVoFwe4LBAGI-7WRN6ArEByafWCn7OXD3chwwkQOBpF5AFnuPyRsL2ush-ualnZEOe5qYD4Tgf_uFlUqOC1klJ3u4AZgz6ZLbvquoF3_KHXTkkPWVs-v27SKpXHjx5vntd6KuXwdMz1ebbomLzaFpXNbtPIoB8siJ9z4DWDku3GcICaDkhVRhuinx32m38zZdSQbaTNDQMwbd5_9jrhtFbvf"
                              />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-headline-sm text-label-lg text-on-surface font-bold leading-tight">
                                Corsair Vengeance RGB 32GB (2x16) DDR5 6000MHz
                              </span>
                              <span className="font-label-sm text-label-sm text-secondary mt-0.5">
                                Mayorista: Elit • Garantía Vitalicia
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <div className="flex flex-col font-mono text-[12px]">
                            <span className="text-on-surface font-bold">
                              CMH32GX5M2B6000C30
                            </span>
                            <span className="text-tertiary font-label-sm">
                              22 Series Registrados
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface">
                              RAM DDR5 UDIMM
                            </span>
                            <span className="font-body-sm text-body-sm text-secondary">
                              CL30-36-36-76 EXPO
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <div className="flex flex-col gap-1">
                            <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary bg-tertiary-container/20 px-2 py-0.5 rounded w-max border border-tertiary/30">
                              <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                              Belgrano: 12 un.
                            </span>
                            <span className="font-body-sm text-body-sm text-secondary">
                              Central: 10 un. (Total: 22)
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <div className="flex flex-col">
                            <span className="font-headline-sm text-label-lg text-primary font-bold leading-tight">
                              $185.000 ARS
                            </span>
                            <span className="font-body-sm text-body-sm text-secondary">
                              USD $125,00 Neto
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <span className="font-label-md text-label-md text-tertiary font-bold">
                            +31.2%
                          </span>
                        </td>
                        <td className="p-space-md text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="p-1.5 text-secondary hover:text-on-surface hover:bg-surface-container border border-surface-variant rounded"
                              title="Editar Producto"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                edit
                              </span>
                            </button>
                            <button
                              className="p-1.5 text-secondary hover:text-on-surface hover:bg-surface-container border border-surface-variant rounded"
                              title="Ver Números de Serie"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                barcode
                              </span>
                            </button>
                            <button
                              className="p-1.5 text-error hover:bg-error-container border border-surface-variant rounded"
                              title="Pausar Publicación"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                pause_circle
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* Fila 4 */}
                      <tr className="hover:bg-surface-container-low transition-colors">
                        <td className="p-space-md text-center">
                          <input
                            className="w-4 h-4 rounded border-surface-variant text-primary focus:ring-0 cursor-pointer"
                            type="checkbox"
                          />
                        </td>
                        <td className="p-space-md">
                          <div className="flex items-center gap-space-md">
                            <div className="w-12 h-12 bg-surface border border-surface-variant rounded shrink-0 p-1 flex items-center justify-center">
                              <img
                                className="w-full h-full object-contain"
                                data-alt="Fuente de poder modular Seasonic Focus GX 850W Gold negra con cables en ángulo de laboratorio de pruebas de hardware"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr8kN8NXsaOK1_8hd4rVnaNkK4rkX1pzY6i2-l9OolB6PY6SQQW6UVqZnwGMhmQWobMZWhY7Yy8NH5L7NdocZyisSTomAEyPB5nOgnhhoG3ZnUXVKvZ_xzLOCuc6ORYgJoKhgj-Zi63k2B4oemNhlTFg2iVOUZta6xx2aO6DfDDZdnmeWx81zD3G2iEmVzA28C8hHrEDxONX4UJ9JBo9AwTeCgODbcEFGE7p3hHnohHEx0QK_pngPB"
                              />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-headline-sm text-label-lg text-on-surface font-bold leading-tight">
                                Seasonic FOCUS GX-850 850W 80 Plus Gold Modular
                              </span>
                              <span className="font-label-sm text-label-sm text-secondary mt-0.5">
                                Mayorista: New Bytes • Garantía 120m
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <div className="flex flex-col font-mono text-[12px]">
                            <span className="text-on-surface font-bold">
                              SS-FOCUS-GX-850
                            </span>
                            <span className="text-tertiary font-label-sm">
                              5 Series Registrados
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface">
                              Fuente ATX 3.0
                            </span>
                            <span className="font-body-sm text-body-sm text-secondary">
                              Full Modular / ATX 3.0 PCIe 5
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <div className="flex flex-col gap-1">
                            <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary bg-surface-container px-2 py-0.5 rounded w-max border border-surface-variant">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                              Belgrano: 3 un.
                            </span>
                            <span className="font-body-sm text-body-sm text-secondary">
                              Central: 2 un. (Total: 5)
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <div className="flex flex-col">
                            <span className="font-headline-sm text-label-lg text-primary font-bold leading-tight">
                              $245.000 ARS
                            </span>
                            <span className="font-body-sm text-body-sm text-secondary">
                              USD $175,00 Neto
                            </span>
                          </div>
                        </td>
                        <td className="p-space-md">
                          <span className="font-label-md text-label-md text-tertiary font-bold">
                            +26.8%
                          </span>
                        </td>
                        <td className="p-space-md text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="p-1.5 text-secondary hover:text-on-surface hover:bg-surface-container border border-surface-variant rounded"
                              title="Editar Producto"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                edit
                              </span>
                            </button>
                            <button
                              className="p-1.5 text-secondary hover:text-on-surface hover:bg-surface-container border border-surface-variant rounded"
                              title="Ver Números de Serie"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                barcode
                              </span>
                            </button>
                            <button
                              className="p-1.5 text-error hover:bg-error-container border border-surface-variant rounded"
                              title="Pausar Publicación"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                pause_circle
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Paginación Utilitaria */}
                <div className="p-space-md border-t border-surface-variant flex flex-col sm:flex-row items-center justify-between gap-space-sm bg-surface-container-low">
                  <span className="font-body-sm text-body-sm text-secondary">
                    Mostrando
                    <strong className="text-on-surface">1 - 4</strong> de
                    <strong className="text-on-surface">1.482</strong>{" "}
                    componentes activos
                  </span>
                  <div className="flex items-center gap-1">
                    <button className="px-2.5 py-1 bg-surface-container border border-surface-variant font-label-md text-label-md text-secondary rounded cursor-not-allowed">
                      Anterior
                    </button>
                    <button className="px-2.5 py-1 bg-primary text-on-primary font-label-md text-label-md rounded font-bold">
                      1
                    </button>
                    <button className="px-2.5 py-1 bg-surface-container hover:bg-surface-container-high border border-surface-variant font-label-md text-label-md text-on-surface rounded">
                      2
                    </button>
                    <button className="px-2.5 py-1 bg-surface-container hover:bg-surface-container-high border border-surface-variant font-label-md text-label-md text-on-surface rounded">
                      3
                    </button>
                    <span className="px-1 text-secondary">...</span>
                    <button className="px-2.5 py-1 bg-surface-container hover:bg-surface-container-high border border-surface-variant font-label-md text-label-md text-on-surface rounded">
                      124
                    </button>
                    <button className="px-2.5 py-1 bg-surface-container hover:bg-surface-container-high border border-surface-variant font-label-md text-label-md text-on-surface rounded">
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
              {/* PANEL LATERAL / DRAWER DE EDICIÓN RÁPIDA (Visible y Funcional
              en la estructura) */}
              <div
                className="xl:col-span-4 flex flex-col bg-surface-container-lowest border border-surface-variant rounded"
                id="product-drawer"
              >
                {/* Drawer Header */}
                <div className="p-space-md border-b border-surface-variant flex items-center justify-between bg-surface-container-low">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      edit_note
                    </span>
                    <h2 className="font-label-lg text-label-lg uppercase tracking-tight text-on-surface font-bold">
                      Editar Componente
                    </h2>
                  </div>
                  <button
                    className="text-secondary hover:text-on-surface p-1 rounded"
                    onClick="
                    document
                      .getElementById('product-drawer')
                      .classList.add('hidden')
                  "
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      close
                    </span>
                  </button>
                </div>
                {/* Drawer Body / Formulario */}
                <form
                  className="p-space-md flex flex-col gap-space-md"
                  onSubmit="
                  event.preventDefault();
                  alert('Producto guardado correctamente en la base ZeroLag.');
                "
                >
                  {/* Nombre del Producto */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label-sm text-label-sm uppercase text-secondary font-bold">
                      Nombre del Producto (Título Web)
                    </label>
                    <input
                      className="h-10 px-space-md bg-surface border border-surface-variant text-on-surface font-body-md text-body-md rounded focus:outline-none focus:border-primary"
                      required=""
                      type="text"
                      defaultValue="ASUS ROG Strix RTX 4070 Ti SUPER 16GB OC Edition"
                    />
                  </div>
                  {/* Categoría y Marca */}
                  <div className="grid grid-cols-2 gap-space-sm">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm uppercase text-secondary font-bold">
                        Categoría
                      </label>
                      <select className="h-10 px-space-sm bg-surface border border-surface-variant text-on-surface font-body-md text-body-md rounded focus:outline-none focus:border-primary">
                        <option defaultValue>Placas de Video</option>
                        <option>Procesadores</option>
                        <option>Memorias RAM</option>
                        <option>Motherboards</option>
                        <option>Fuentes</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm uppercase text-secondary font-bold">
                        Fabricante / Marca
                      </label>
                      <input
                        className="h-10 px-space-md bg-surface border border-surface-variant text-on-surface font-body-md text-body-md rounded focus:outline-none focus:border-primary"
                        type="text"
                        defaultValue="ASUS Republic of Gamers"
                      />
                    </div>
                  </div>
                  {/* SKU y Código Mayorista */}
                  <div className="grid grid-cols-2 gap-space-sm">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm uppercase text-secondary font-bold">
                        SKU ZeroLag
                      </label>
                      <input
                        className="h-10 px-space-md bg-surface border border-surface-variant font-mono text-[12px] text-on-surface rounded focus:outline-none focus:border-primary font-bold"
                        type="text"
                        defaultValue="ASUS-4070TIS-16G-OC"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm uppercase text-secondary font-bold">
                        Proveedor / Part Number
                      </label>
                      <input
                        className="h-10 px-space-md bg-surface border border-surface-variant font-mono text-[12px] text-on-surface rounded focus:outline-none focus:border-primary"
                        type="text"
                        defaultValue="ROG-STRIX-RTX4070TIS"
                      />
                    </div>
                  </div>
                  {/* Esquema de Precios ARS y Descuentos */}
                  <div className="p-space-sm bg-surface-container border border-surface-variant rounded flex flex-col gap-space-sm">
                    <div className="font-label-sm text-label-sm uppercase text-on-surface font-bold flex items-center justify-between">
                      <span>Parámetros de Precios</span>
                      <span className="text-tertiary">IVA 10.5% (Hard)</span>
                    </div>
                    <div className="grid grid-cols-2 gap-space-sm">
                      <div className="flex flex-col gap-1">
                        <label className="font-label-sm text-[10px] uppercase text-secondary">
                          Precio Lista ARS (Tarjetas)
                        </label>
                        <input
                          className="h-9 px-space-sm bg-surface border border-surface-variant font-headline-sm text-label-lg text-primary font-bold rounded focus:outline-none focus:border-primary"
                          type="text"
                          defaultValue="$1.420.000"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="font-label-sm text-[10px] uppercase text-secondary">
                          Desc. Transferencia (%)
                        </label>
                        <input
                          className="h-9 px-space-sm bg-surface border border-surface-variant font-headline-sm text-label-lg text-tertiary font-bold rounded focus:outline-none focus:border-primary"
                          type="text"
                          defaultValue="15%"
                        />
                      </div>
                    </div>
                    <div className="text-[11px] text-secondary font-body-sm leading-tight">
                      Precio Final Contado/Transferencia:
                      <strong className="text-on-surface">
                        $1.207.000 ARS
                      </strong>
                      (Calculado automáticamente en el checkout).
                    </div>
                  </div>
                  {/* Stock y Depósito */}
                  <div className="grid grid-cols-3 gap-space-sm">
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm uppercase text-secondary font-bold">
                        Belgrano
                      </label>
                      <input
                        className="h-10 px-space-sm bg-surface border border-surface-variant font-headline-sm text-label-md text-on-surface text-center rounded focus:outline-none focus:border-primary"
                        type="number"
                        defaultValue="8"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm uppercase text-secondary font-bold">
                        Dep. Central
                      </label>
                      <input
                        className="h-10 px-space-sm bg-surface border border-surface-variant font-headline-sm text-label-md text-on-surface text-center rounded focus:outline-none focus:border-primary"
                        type="number"
                        defaultValue="6"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="font-label-sm text-label-sm uppercase text-secondary font-bold">
                        Alerta Mín.
                      </label>
                      <input
                        className="h-10 px-space-sm bg-surface border border-surface-variant font-headline-sm text-label-md text-error text-center rounded focus:outline-none focus:border-primary"
                        type="number"
                        defaultValue="3"
                      />
                    </div>
                  </div>
                  {/* Módulo Crítico: Asignación de Números de Serie Únicos
                  (S/N) */}
                  <div className="flex flex-col gap-space-xs border border-surface-variant p-space-sm rounded bg-surface">
                    <div className="flex items-center justify-between">
                      <label className="font-label-sm text-label-sm uppercase text-on-surface font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-primary">
                          qr_code
                        </span>
                        <span>Control de Series (S/N Garantía)</span>
                      </label>
                      <span className="font-label-sm text-[11px] text-tertiary font-bold">
                        14/14 Asignados
                      </span>
                    </div>
                    <p className="font-body-sm text-[11px] text-secondary">
                      Escanea con lector de código de barras para añadir series
                      físicos al stock actual de Belgrano.
                    </p>
                    <div className="flex gap-1 mt-1">
                      <input
                        className="flex-1 h-8 px-2 bg-surface-container border border-surface-variant text-[12px] font-mono rounded focus:outline-none focus:border-primary"
                        id="sn-input"
                        placeholder="Escanear o ingresar S/N..."
                        type="text"
                      />
                      <button
                        className="px-2.5 h-8 bg-surface-container hover:bg-surface-container-high border border-surface-variant text-on-surface font-label-sm text-label-sm rounded"
                        onClick="
                        const val = document.getElementById('sn-input').value;
                        if (val) {
                          const tag = document.createElement('span');
                          tag.className =
                            'px-2 py-0.5 bg-surface-container-high border border-surface-variant font-mono text-[10px] text-on-surface rounded flex items-center gap-1';
                          tag.innerHTML =
                            val +
                            ' &lt;button type=\'button\' onClick=\'this.parentElement.remove()\' className=\'text-error\'&gt;×&lt;/button&gt;';
                          document.getElementById('sn-tags').appendChild(tag);
                          document.getElementById('sn-input').value = '';
                        }
                      "
                        type="button"
                      >
                        + Agregar
                      </button>
                    </div>
                    {/* Tags de Series Existentes */}
                    <div
                      className="flex flex-wrap gap-1 mt-2 max-h-24 overflow-y-auto p-1 bg-surface-container-lowest border border-surface-variant rounded"
                      id="sn-tags"
                    >
                      <span className="px-2 py-0.5 bg-surface-container-high border border-surface-variant font-mono text-[10px] text-on-surface rounded flex items-center gap-1">
                        SN-4070TIS-99214
                        <button
                          className="text-error"
                          onClick="this.parentElement.remove()"
                          type="button"
                        >
                          ×
                        </button>
                      </span>
                      <span className="px-2 py-0.5 bg-surface-container-high border border-surface-variant font-mono text-[10px] text-on-surface rounded flex items-center gap-1">
                        SN-4070TIS-99215
                        <button
                          className="text-error"
                          onClick="this.parentElement.remove()"
                          type="button"
                        >
                          ×
                        </button>
                      </span>
                      <span className="px-2 py-0.5 bg-surface-container-high border border-surface-variant font-mono text-[10px] text-on-surface rounded flex items-center gap-1">
                        SN-4070TIS-99218
                        <button
                          className="text-error"
                          onClick="this.parentElement.remove()"
                          type="button"
                        >
                          ×
                        </button>
                      </span>
                      <span className="px-2 py-0.5 bg-surface-container-high border border-surface-variant font-mono text-[10px] text-on-surface rounded flex items-center gap-1">
                        SN-4070TIS-99220
                        <button
                          className="text-error"
                          onClick="this.parentElement.remove()"
                          type="button"
                        >
                          ×
                        </button>
                      </span>
                      <span className="px-2 py-0.5 bg-surface-container-high border border-surface-variant font-mono text-[10px] text-on-surface rounded flex items-center gap-1">
                        SN-4070TIS-99229
                        <button
                          className="text-error"
                          onClick="this.parentElement.remove()"
                          type="button"
                        >
                          ×
                        </button>
                      </span>
                    </div>
                  </div>
                  {/* Estado de Publicación y Flags */}
                  <div className="flex items-center justify-between border-t border-surface-variant pt-space-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        defaultChecked
                        className="w-4 h-4 rounded border-surface-variant text-primary focus:ring-0"
                        type="checkbox"
                      />
                      <span className="font-label-md text-label-md text-on-surface">
                        Publicar en Catálogo Web
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        defaultChecked
                        className="w-4 h-4 rounded border-surface-variant text-primary focus:ring-0"
                        type="checkbox"
                      />
                      <span className="font-label-md text-label-md text-on-surface">
                        Envío Gratis Andreani
                      </span>
                    </label>
                  </div>
                  {/* Botones de Acción CRUD del Formulario */}
                  <div className="grid grid-cols-2 gap-space-sm pt-space-xs border-t border-surface-variant mt-1">
                    <button
                      className="h-10 border border-surface-variant bg-surface hover:bg-surface-container text-on-surface font-label-md text-label-md rounded text-center transition-colors"
                      onClick="
                      document
                        .getElementById('product-drawer')
                        .classList.add('hidden')
                    "
                      type="button"
                    >
                      Cancelar
                    </button>
                    <button
                      className="h-10 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded font-bold text-center transition-colors"
                      type="submit"
                    >
                      Guardar Cambios
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Barra de Notificación / Estado del Servidor de Sincronización
             */}
            <div className="mt-space-xl p-space-md bg-surface-container-low border border-surface-variant rounded flex flex-col sm:flex-row items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-tertiary text-[20px]">
                  sync
                </span>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface">
                    Sincronización con ERP Tango &amp; Mayoristas
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    Última actualización de listas de precios y stock: Hoy 14:32
                    hs (New Bytes, Stylus, Elit).
                  </span>
                </div>
              </div>
              <button
                className="px-space-md py-1.5 bg-surface border border-surface-variant hover:bg-surface-container text-on-surface font-label-md text-label-md rounded transition-colors whitespace-nowrap"
                type="button"
              >
                Forzar Sync Mayoristas
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default InventoryPage;
