function SearchPage() {
  return (
    <>
      <main className="w-full pt-[156px] bg-surface min-h-[calc(100vh-156px)]">
        <div className="flex flex-col w-full">
          {/* BREADCRUMBS & TOP METADATA */}
          <section className="w-full bg-surface-container-low border-b border-surface-variant">
            <div className="max-w-[1320px] mx-auto px-margin-desktop py-space-sm flex items-center justify-between">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-space-xs font-label-md text-label-md text-secondary"
              >
                <a className="hover:text-primary transition-colors" href="#">
                  Inicio
                </a>
                <span className="text-outline-variant">/</span>
                <a className="hover:text-primary transition-colors" href="#">
                  Componentes
                </a>
                <span className="text-outline-variant">/</span>
                <span className="text-on-surface font-bold">
                  Placas de Video &amp; Procesadores
                </span>
              </nav>
              <div className="hidden sm:flex items-center gap-space-sm text-secondary font-label-sm text-label-sm">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  Stock sincronizado en tiempo real
                </span>
                <span className="text-outline-variant">|</span>
                <span>Cotización BNA: $1.085 ARS</span>
              </div>
            </div>
          </section>
          {/* CATEGORY HEADER & CONTROLS */}
          <section className="w-full bg-surface-container-lowest border-b border-surface-variant">
            <div className="max-w-[1320px] mx-auto px-margin-desktop py-space-lg flex flex-col gap-space-md">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-primary-container text-on-primary font-label-sm text-label-sm uppercase rounded">
                      Gamer Enthusiast
                    </span>
                    <span className="font-body-sm text-body-sm text-secondary">
                      248 productos encontrados
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                    Placas de Video (GPU) &amp; Hardware de Alto Rendimiento
                  </h1>
                </div>
                {/* Search bar inside category */}
                <div className="w-full lg:w-96 flex">
                  <input
                    className="w-full h-10 px-space-md bg-surface-container-low border border-surface-variant rounded-l text-body-md text-on-surface placeholder:text-secondary focus:outline-none focus:border-primary-container"
                    placeholder="Filtrar por chipset, modelo o serie..."
                    type="text"
                  />
                  <button
                    className="h-10 px-space-md bg-inverse-surface text-inverse-on-surface font-label-md text-label-md rounded-r flex items-center justify-center hover:bg-on-surface transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      search
                    </span>
                  </button>
                </div>
              </div>
              {/* Action Toolbar / Sorting / View switches */}
              <div className="pt-space-sm border-t border-surface-variant flex flex-wrap items-center justify-between gap-space-md">
                {/* Active Quick Filter Badges */}
                <div className="flex flex-wrap items-center gap-space-xs font-label-sm text-label-sm">
                  <span className="text-secondary uppercase">
                    Filtros Activos:
                  </span>
                  <span className="inline-flex items-center gap-1 bg-surface-container border border-surface-variant px-2 py-1 text-on-surface rounded">
                    Stock Inmediato
                    <button
                      className="text-secondary hover:text-primary leading-none"
                      type="button"
                    >
                      ×
                    </button>
                  </span>
                  <span className="inline-flex items-center gap-1 bg-surface-container border border-surface-variant px-2 py-1 text-on-surface rounded">
                    PCIe 4.0 / 16-pin
                    <button
                      className="text-secondary hover:text-primary leading-none"
                      type="button"
                    >
                      ×
                    </button>
                  </span>
                  <button
                    className="text-primary hover:text-primary ml-1 font-bold"
                    type="button"
                  >
                    Limpiar todos
                  </button>
                </div>
                {/* Sorting and Grid/List View Switch */}
                <div className="flex items-center gap-space-md ml-auto">
                  <div className="flex items-center gap-2">
                    <label
                      className="font-label-md text-label-md text-secondary hidden sm:inline"
                      htmlFor="catalog-sort"
                    >
                      Ordenar por:
                    </label>
                    <select
                      className="h-9 px-space-sm bg-surface-container-low border border-surface-variant text-body-md text-on-surface font-body-md rounded focus:outline-none focus:border-primary-container"
                      id="catalog-sort"
                    >
                      <option value="cash_asc">Menor Precio Contado</option>
                      <option selected="" value="perf_desc">
                        Mayor Rendimiento (Benchmark)
                      </option>
                      <option value="newest">
                        Novedades &amp; Lanzamientos
                      </option>
                      <option value="cuotas">
                        Mejor Financiación (12 Cuotas)
                      </option>
                      <option value="price_desc">Mayor Precio Lista</option>
                    </select>
                  </div>
                  <div className="flex items-center border border-surface-variant rounded bg-surface-container-low p-0.5">
                    <button
                      className="p-1.5 bg-surface-container-lowest text-primary font-bold rounded flex items-center justify-center"
                      id="grid-view-btn"
                      title="Vista Cuadrícula"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        grid_view
                      </span>
                    </button>
                    <button
                      className="p-1.5 text-secondary hover:text-on-surface rounded flex items-center justify-center"
                      id="list-view-btn"
                      title="Vista Lista Técnica"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        view_list
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* MAIN CATALOGUE CONTAINER (SIDEBAR + PRODUCT GRID) */}
          <section className="w-full py-space-xl">
            <div className="max-w-[1320px] mx-auto px-margin-desktop">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
                {/* ==================== SIDEBAR FILTERS (4 Cols)
              ==================== */}
                <aside className="lg:col-span-3 flex flex-col gap-space-lg bg-surface-container-lowest border border-surface-variant p-space-md rounded">
                  <div className="flex items-center justify-between pb-space-sm border-b border-surface-variant">
                    <span className="font-headline-sm text-headline-sm uppercase text-on-surface tracking-tight flex items-center gap-1">
                      <span className="material-symbols-outlined text-[20px] text-primary">
                        filter_list
                      </span>
                      Filtros Técnicos
                    </span>
                    <button
                      className="font-label-sm text-label-sm text-secondary hover:text-primary uppercase"
                      type="button"
                    >
                      Reset
                    </button>
                  </div>
                  {/* Price Range Filter */}
                  <div className="flex flex-col gap-space-xs pb-space-md border-b border-surface-variant">
                    <label className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-wide">
                      Rango de Precio (ARS)
                    </label>
                    <div className="flex items-center justify-between gap-2 mt-2">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-[10px] text-secondary">
                          MÍNIMO
                        </span>
                        <div className="flex items-center border border-surface-variant bg-surface-container-low px-2 h-9 rounded">
                          <span className="text-secondary font-label-md mr-1">
                            $
                          </span>
                          <input
                            className="w-20 bg-transparent text-body-md text-on-surface focus:outline-none"
                            type="number"
                            value="150000"
                          />
                        </div>
                      </div>
                      <span className="text-secondary mt-3">-</span>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-[10px] text-secondary">
                          MÁXIMO
                        </span>
                        <div className="flex items-center border border-surface-variant bg-surface-container-low px-2 h-9 rounded">
                          <span className="text-secondary font-label-md mr-1">
                            $
                          </span>
                          <input
                            className="w-24 bg-transparent text-body-md text-on-surface focus:outline-none"
                            type="number"
                            value="4500000"
                          />
                        </div>
                      </div>
                    </div>
                    <input
                      className="w-full mt-3 accent-primary cursor-pointer"
                      max="4500000"
                      min="150000"
                      step="50000"
                      type="range"
                      value="4500000"
                    />
                    <div className="flex justify-between text-[11px] font-label-sm text-secondary">
                      <span>$150.000</span>
                      <span>$4.500.000+</span>
                    </div>
                  </div>
                  {/* Availability Filter */}
                  <div className="flex flex-col gap-2 pb-space-md border-b border-surface-variant">
                    <span className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-wide">
                      Disponibilidad
                    </span>
                    <label className="flex items-center gap-space-xs text-body-md text-on-surface cursor-pointer select-none">
                      <input
                        checked=""
                        className="w-[18px] h-[18px] rounded-none accent-primary border border-surface-variant"
                        type="checkbox"
                      />
                      <span>Stock Inmediato en CABA</span>
                      <span className="text-secondary font-label-sm ml-auto">
                        (184)
                      </span>
                    </label>
                    <label className="flex items-center gap-space-xs text-body-md text-on-surface cursor-pointer select-none">
                      <input
                        className="w-[18px] h-[18px] rounded-none accent-primary border border-surface-variant"
                        type="checkbox"
                      />
                      <span>Preventa / Ingreso Próximo</span>
                      <span className="text-secondary font-label-sm ml-auto">
                        (64)
                      </span>
                    </label>
                    <label className="flex items-center gap-space-xs text-body-md text-on-surface cursor-pointer select-none">
                      <input
                        className="w-[18px] h-[18px] rounded-none accent-primary border border-surface-variant"
                        type="checkbox"
                      />
                      <span>Retiro Inmediato Showroom</span>
                      <span className="text-secondary font-label-sm ml-auto">
                        (92)
                      </span>
                    </label>
                  </div>
                  {/* Chipset & GPU Series */}
                  <div className="flex flex-col gap-2 pb-space-md border-b border-surface-variant">
                    <span className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-wide">
                      Chipset / Serie
                    </span>
                    <div className="max-h-48 overflow-y-auto flex flex-col gap-2 pr-1">
                      <label className="flex items-center gap-space-xs text-body-md text-on-surface cursor-pointer">
                        <input
                          checked=""
                          className="w-[18px] h-[18px] accent-primary"
                          type="checkbox"
                        />
                        <span className="font-semibold text-primary">
                          NVIDIA GeForce RTX 4090
                        </span>
                        <span className="text-secondary font-label-sm ml-auto">
                          14
                        </span>
                      </label>
                      <label className="flex items-center gap-space-xs text-body-md text-on-surface cursor-pointer">
                        <input
                          checked=""
                          className="w-[18px] h-[18px] accent-primary"
                          type="checkbox"
                        />
                        <span>GeForce RTX 4080 SUPER</span>
                        <span className="text-secondary font-label-sm ml-auto">
                          28
                        </span>
                      </label>
                      <label className="flex items-center gap-space-xs text-body-md text-on-surface cursor-pointer">
                        <input
                          checked=""
                          className="w-[18px] h-[18px] accent-primary"
                          type="checkbox"
                        />
                        <span>GeForce RTX 4070 Ti SUPER</span>
                        <span className="text-secondary font-label-sm ml-auto">
                          45
                        </span>
                      </label>
                      <label className="flex items-center gap-space-xs text-body-md text-on-surface cursor-pointer">
                        <input
                          className="w-[18px] h-[18px] accent-primary"
                          type="checkbox"
                        />
                        <span>GeForce RTX 4070 SUPER</span>
                        <span className="text-secondary font-label-sm ml-auto">
                          38
                        </span>
                      </label>
                      <label className="flex items-center gap-space-xs text-body-md text-on-surface cursor-pointer">
                        <input
                          className="w-[18px] h-[18px] accent-primary"
                          type="checkbox"
                        />
                        <span>GeForce RTX 4060 Ti / 4060</span>
                        <span className="text-secondary font-label-sm ml-auto">
                          52
                        </span>
                      </label>
                      <label className="flex items-center gap-space-xs text-body-md text-on-surface cursor-pointer">
                        <input
                          className="w-[18px] h-[18px] accent-primary"
                          type="checkbox"
                        />
                        <span>AMD Radeon RX 7900 XTX</span>
                        <span className="text-secondary font-label-sm ml-auto">
                          11
                        </span>
                      </label>
                      <label className="flex items-center gap-space-xs text-body-md text-on-surface cursor-pointer">
                        <input
                          className="w-[18px] h-[18px] accent-primary"
                          type="checkbox"
                        />
                        <span>AMD Radeon RX 7800 XT</span>
                        <span className="text-secondary font-label-sm ml-auto">
                          19
                        </span>
                      </label>
                    </div>
                  </div>
                  {/* Brand / Manufacturer */}
                  <div className="flex flex-col gap-2 pb-space-md border-b border-surface-variant">
                    <span className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-wide">
                      Fabricante / Ensamblador
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      <label className="flex items-center gap-1.5 text-body-md text-on-surface cursor-pointer">
                        <input
                          checked=""
                          className="w-[18px] h-[18px] accent-primary"
                          type="checkbox"
                        />
                        <span>ASUS</span>
                      </label>
                      <label className="flex items-center gap-1.5 text-body-md text-on-surface cursor-pointer">
                        <input
                          checked=""
                          className="w-[18px] h-[18px] accent-primary"
                          type="checkbox"
                        />
                        <span>MSI</span>
                      </label>
                      <label className="flex items-center gap-1.5 text-body-md text-on-surface cursor-pointer">
                        <input
                          checked=""
                          className="w-[18px] h-[18px] accent-primary"
                          type="checkbox"
                        />
                        <span>Gigabyte</span>
                      </label>
                      <label className="flex items-center gap-1.5 text-body-md text-on-surface cursor-pointer">
                        <input
                          className="w-[18px] h-[18px] accent-primary"
                          type="checkbox"
                        />
                        <span>Zotac</span>
                      </label>
                      <label className="flex items-center gap-1.5 text-body-md text-on-surface cursor-pointer">
                        <input
                          className="w-[18px] h-[18px] accent-primary"
                          type="checkbox"
                        />
                        <span>PNY</span>
                      </label>
                      <label className="flex items-center gap-1.5 text-body-md text-on-surface cursor-pointer">
                        <input
                          className="w-[18px] h-[18px] accent-primary"
                          type="checkbox"
                        />
                        <span>Sapphire</span>
                      </label>
                      <label className="flex items-center gap-1.5 text-body-md text-on-surface cursor-pointer">
                        <input
                          className="w-[18px] h-[18px] accent-primary"
                          type="checkbox"
                        />
                        <span>XFX</span>
                      </label>
                      <label className="flex items-center gap-1.5 text-body-md text-on-surface cursor-pointer">
                        <input
                          className="w-[18px] h-[18px] accent-primary"
                          type="checkbox"
                        />
                        <span>Palit</span>
                      </label>
                    </div>
                  </div>
                  {/* VRAM Memory Size */}
                  <div className="flex flex-col gap-2 pb-space-md border-b border-surface-variant">
                    <span className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-wide">
                      Capacidad VRAM
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        className="px-2.5 py-1 text-label-md font-label-md border border-surface-variant bg-surface-container-low text-secondary hover:text-on-surface hover:border-on-surface rounded"
                        type="button"
                      >
                        8 GB
                      </button>
                      <button
                        className="px-2.5 py-1 text-label-md font-label-md border border-surface-variant bg-surface-container-low text-secondary hover:text-on-surface hover:border-on-surface rounded"
                        type="button"
                      >
                        12 GB
                      </button>
                      <button
                        className="px-2.5 py-1 text-label-md font-label-md bg-primary text-on-primary border border-primary font-bold rounded"
                        type="button"
                      >
                        16 GB
                      </button>
                      <button
                        className="px-2.5 py-1 text-label-md font-label-md bg-primary text-on-primary border border-primary font-bold rounded"
                        type="button"
                      >
                        24 GB
                      </button>
                    </div>
                  </div>
                  {/* Power & Recommended PSU */}
                  <div className="flex flex-col gap-2 pb-space-md border-b border-surface-variant">
                    <span className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-wide">
                      Fuente Sugerida (PSU)
                    </span>
                    <div className="flex flex-col gap-1.5 text-body-md text-on-surface">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          className="w-[18px] h-[18px] accent-primary"
                          type="checkbox"
                        />
                        <span>650W a 750W</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          checked=""
                          className="w-[18px] h-[18px] accent-primary"
                          type="checkbox"
                        />
                        <span>750W a 850W</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          checked=""
                          className="w-[18px] h-[18px] accent-primary"
                          type="checkbox"
                        />
                        <span>1000W o superior</span>
                      </label>
                    </div>
                  </div>
                  {/* Sidebar Actions */}
                  <div className="flex flex-col gap-2 pt-space-xs">
                    <button
                      className="w-full h-10 bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider font-bold rounded transition-colors flex items-center justify-center gap-2"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        done
                      </span>
                      Aplicar Filtros
                    </button>
                    <button
                      className="w-full h-9 bg-surface-container border border-surface-variant hover:border-outline text-secondary hover:text-on-surface font-label-md text-label-md uppercase tracking-wider rounded transition-colors"
                      type="button"
                    >
                      Limpiar Parámetros
                    </button>
                  </div>
                </aside>
                {/* ==================== PRODUCT GRID (9 Cols)
              ==================== */}
                <main className="lg:col-span-9 flex flex-col gap-space-lg">
                  {/* Information banner for Argentine Shoppers */}
                  <div className="bg-surface-container-low border border-surface-variant p-space-sm flex flex-col md:flex-row items-center justify-between gap-space-sm rounded">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-tertiary text-[24px]">
                        verified_user
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-on-surface font-bold uppercase">
                          Garantía Directa ZeroLag de 12 a 36 Meses
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          RMA propio express y cambio directo dentro de las 72hs
                          de recibido en CABA y GBA.
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="bg-surface-container border border-surface-variant text-on-surface font-label-sm text-label-sm px-2 py-1 rounded">
                        Emitimos Factura A y B
                      </span>
                    </div>
                  </div>
                  {/* Product Card Grid (3x3 Desktop Architecture) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter-desktop">
                    {/* PRODUCT CARD 1 */}
                    <article className="bg-surface-container-lowest border border-surface-variant p-space-md rounded flex flex-col justify-between hover:border-primary transition-colors group">
                      <div>
                        {/* Badges & Wishlist */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex flex-col gap-1">
                            <span className="bg-primary text-on-primary font-label-sm text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm">
                              15% OFF Transferencia
                            </span>
                            <span className="bg-tertiary text-on-tertiary font-label-sm text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm">
                              Envío Gratis Express
                            </span>
                          </div>
                          <button
                            className="text-secondary hover:text-primary transition-colors p-1"
                            title="Favorito"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              favorite_border
                            </span>
                          </button>
                        </div>
                        {/* Product Photo container (flat background) */}
                        <div className="w-full h-48 bg-surface-container-low border border-surface-variant flex items-center justify-center p-2 rounded-sm mb-space-sm overflow-hidden">
                          <img
                            className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                            data-alt="High performance ASUS ROG Strix GeForce RTX 4070 Ti SUPER OC graphic card with triple axial fan cooling system against neutral clean background under studio hardware lighting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBahjfNr79EQATxoyPnXykmdGO8l1kc8JJjah6RlAjqoPx4_4-eXO3iKaXuX_a147FCDVDkgGA8ZN49K6Hi1IyVUzltvwilG0ZXd0PqDAlBMngVNPBPveytsesnEkpPXuRPi0-XBNceeotz3I4ethmSamekh2u3n3eVLHGNj3EUI_quXbEdC3BxxBo_K7S4RH7l0fX9t9pjGzGZBPllFhtFXiTIyUvNPBjBe3gJtAk4Zb9VKp-SMFsY"
                          />
                        </div>
                        {/* Brand & Product Title */}
                        <div className="flex flex-col mb-space-sm">
                          <span className="font-label-sm text-[11px] text-secondary uppercase font-bold">
                            ASUS ROG STRIX
                          </span>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-2">
                            GeForce RTX 4070 Ti SUPER 16GB GDDR6X OC Edition
                          </h3>
                        </div>
                        {/* Technical Specs Bullets */}
                        <ul className="flex flex-col gap-1 font-body-sm text-body-sm text-secondary bg-surface-container-low p-2 rounded mb-space-sm border border-surface-variant">
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Boost Clock:</strong> 2670 MHz (OC Mode)
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Memoria:</strong> 16GB GDDR6X / 256-bit bus
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Refrigeración:</strong> 3x Fans Axial-Tech
                            3.15 slots
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Conector:</strong> 1x 16-pin 12VHPWR (PSU
                            750W+)
                          </li>
                        </ul>
                      </div>
                      {/* Stock & Pricing Container */}
                      <div>
                        <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-tertiary mb-2">
                          <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                          <span>7 unidades en depósito CABA (Inmediata)</span>
                        </div>
                        <div className="border-t border-surface-variant pt-space-xs mb-space-sm">
                          <div className="flex flex-col">
                            <span className="font-label-sm text-[10px] text-secondary uppercase">
                              Efectivo / Transferencia (-15%)
                            </span>
                            <span className="font-headline-md text-headline-md text-primary font-bold leading-none">
                              $1.420.000
                              <span className="text-xs font-normal text-secondary">
                                ARS
                              </span>
                            </span>
                          </div>
                          <div className="flex flex-col mt-1">
                            <span className="font-body-sm text-body-sm text-secondary">
                              Precio de lista:
                              <span className="line-through">$1.670.500</span>
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                              Hasta 12 cuotas fijas de $139.208
                            </span>
                          </div>
                        </div>
                        {/* CTA Actions */}
                        <div className="grid grid-cols-4 gap-2">
                          <button
                            className="col-span-3 h-10 bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md uppercase font-bold rounded flex items-center justify-center gap-1.5 transition-colors"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              add_shopping_cart
                            </span>
                            <span>Comprar</span>
                          </button>
                          <button
                            className="col-span-1 h-10 border border-surface-variant hover:border-on-surface bg-surface-container-low text-secondary hover:text-on-surface font-label-sm text-label-sm uppercase rounded flex items-center justify-center transition-colors"
                            title="Comparar specs"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              compare_arrows
                            </span>
                          </button>
                        </div>
                      </div>
                    </article>
                    {/* PRODUCT CARD 2 */}
                    <article className="bg-surface-container-lowest border border-surface-variant p-space-md rounded flex flex-col justify-between hover:border-primary transition-colors group">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex flex-col gap-1">
                            <span className="bg-primary text-on-primary font-label-sm text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm">
                              15% OFF Transferencia
                            </span>
                            <span className="bg-surface-container-highest text-on-surface font-label-sm text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm border border-surface-variant">
                              Top Tier
                            </span>
                          </div>
                          <button
                            className="text-secondary hover:text-primary transition-colors p-1"
                            title="Favorito"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              favorite_border
                            </span>
                          </button>
                        </div>
                        <div className="w-full h-48 bg-surface-container-low border border-surface-variant flex items-center justify-center p-2 rounded-sm mb-space-sm overflow-hidden">
                          <img
                            className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                            data-alt="MSI GeForce RTX 4090 Suprim Liquid X graphics card with liquid cooling radiator and black brushed metal finish clean flat studio lighting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjY6SJhVJS1qfxqBTw3um3sBQpkcb4FbDxvbAXHCqZU_-EOP3DfJSpZJKlGQ6tYsogeNemKajm0vN3azqSIhpwR4Vc_voGvecIya-M9dyZ17loV2SY5dtIVD14ZTXkeuWK3JEzPm1vdoZj8nvmhQeAnbJvM4CnRX8vw603fj_L4aaFZHH8Wsph0k8yKF0FiqaMTPDJSknxi1XMSudvYdmVU4hB3b2eJ83zzGjdIp8-P-zAk2QNScSr"
                          />
                        </div>
                        <div className="flex flex-col mb-space-sm">
                          <span className="font-label-sm text-[11px] text-secondary uppercase font-bold">
                            MSI GAMING
                          </span>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-2">
                            GeForce RTX 4090 SUPRIM X 24GB GDDR6X High-End
                          </h3>
                        </div>
                        <ul className="flex flex-col gap-1 font-body-sm text-body-sm text-secondary bg-surface-container-low p-2 rounded mb-space-sm border border-surface-variant">
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>CUDA Cores:</strong> 16.384 núcleos
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>VRAM:</strong> 24GB GDDR6X / 384-bit ultra
                            high
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Cooling:</strong> TRI FROZR 3S Vapor Chamber
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Requisito PSU:</strong> 1000W PCIe 5.0
                            nativo
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-tertiary mb-2">
                          <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                          <span>3 unidades en depósito Belgrano</span>
                        </div>
                        <div className="border-t border-surface-variant pt-space-xs mb-space-sm">
                          <div className="flex flex-col">
                            <span className="font-label-sm text-[10px] text-secondary uppercase">
                              Efectivo / Transferencia (-15%)
                            </span>
                            <span className="font-headline-md text-headline-md text-primary font-bold leading-none">
                              $2.990.000
                              <span className="text-xs font-normal text-secondary">
                                ARS
                              </span>
                            </span>
                          </div>
                          <div className="flex flex-col mt-1">
                            <span className="font-body-sm text-body-sm text-secondary">
                              Precio de lista:
                              <span className="line-through">$3.517.600</span>
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                              Hasta 12 cuotas fijas de $293.133
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          <button
                            className="col-span-3 h-10 bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md uppercase font-bold rounded flex items-center justify-center gap-1.5 transition-colors"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              add_shopping_cart
                            </span>
                            <span>Comprar</span>
                          </button>
                          <button
                            className="col-span-1 h-10 border border-surface-variant hover:border-on-surface bg-surface-container-low text-secondary hover:text-on-surface font-label-sm text-label-sm uppercase rounded flex items-center justify-center transition-colors"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              compare_arrows
                            </span>
                          </button>
                        </div>
                      </div>
                    </article>
                    {/* PRODUCT CARD 3 */}
                    <article className="bg-surface-container-lowest border border-surface-variant p-space-md rounded flex flex-col justify-between hover:border-primary transition-colors group">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex flex-col gap-1">
                            <span className="bg-tertiary text-on-tertiary font-label-sm text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm">
                              12 Cuotas Sin Interés
                            </span>
                            <span className="bg-primary text-on-primary font-label-sm text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm">
                              15% OFF Transferencia
                            </span>
                          </div>
                          <button
                            className="text-secondary hover:text-primary transition-colors p-1"
                            title="Favorito"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              favorite_border
                            </span>
                          </button>
                        </div>
                        <div className="w-full h-48 bg-surface-container-low border border-surface-variant flex items-center justify-center p-2 rounded-sm mb-space-sm overflow-hidden">
                          <img
                            className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                            data-alt="Gigabyte GeForce RTX 4080 SUPER Gaming OC 16GB graphics card with Windforce cooling system and anti-sag bracket studio product shot"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBptrN8K33wYwPOQ3hGfn4XV1PiyAqw3a_kfg7V7-3iEJ3qy9BPspQH_gz_APg_veIkE_tN549E5af1qNkThEgxqaOzaMAUi8YwQjl5h_btJk2MAmUtxwjAJ-HWU2qt6h4DICW8_Bf5vg9-WdROUvCCCHBY2gYW0Bbhzns6snj7kgZtNtJPVzjHHS_DDpsJMRR5_PI3xyY_78SJfFxi9h99NKqoLGznNKq9ZKlidKK6o7dIkP5UH1rE"
                          />
                        </div>
                        <div className="flex flex-col mb-space-sm">
                          <span className="font-label-sm text-[11px] text-secondary uppercase font-bold">
                            GIGABYTE
                          </span>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-2">
                            GeForce RTX 4080 SUPER Gaming OC 16GB GDDR6X
                          </h3>
                        </div>
                        <ul className="flex flex-col gap-1 font-body-sm text-body-sm text-secondary bg-surface-container-low p-2 rounded mb-space-sm border border-surface-variant">
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Boost Clock:</strong> 2595 MHz
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Memoria:</strong> 16GB GDDR6X 256-bit
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Cooling:</strong> WINDFORCE 3x 110mm Fans
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Dual BIOS:</strong> Modo Silent / OC
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-tertiary mb-2">
                          <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                          <span>12 unidades en stock central</span>
                        </div>
                        <div className="border-t border-surface-variant pt-space-xs mb-space-sm">
                          <div className="flex flex-col">
                            <span className="font-label-sm text-[10px] text-secondary uppercase">
                              Efectivo / Transferencia (-15%)
                            </span>
                            <span className="font-headline-md text-headline-md text-primary font-bold leading-none">
                              $1.849.000
                              <span className="text-xs font-normal text-secondary">
                                ARS
                              </span>
                            </span>
                          </div>
                          <div className="flex flex-col mt-1">
                            <span className="font-body-sm text-body-sm text-secondary">
                              Precio de lista:
                              <span className="line-through">$2.175.200</span>
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                              12 cuotas sin recargo de $181.266
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          <button
                            className="col-span-3 h-10 bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md uppercase font-bold rounded flex items-center justify-center gap-1.5 transition-colors"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              add_shopping_cart
                            </span>
                            <span>Comprar</span>
                          </button>
                          <button
                            className="col-span-1 h-10 border border-surface-variant hover:border-on-surface bg-surface-container-low text-secondary hover:text-on-surface font-label-sm text-label-sm uppercase rounded flex items-center justify-center transition-colors"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              compare_arrows
                            </span>
                          </button>
                        </div>
                      </div>
                    </article>
                    {/* PRODUCT CARD 4 */}
                    <article className="bg-surface-container-lowest border border-surface-variant p-space-md rounded flex flex-col justify-between hover:border-primary transition-colors group">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex flex-col gap-1">
                            <span className="bg-primary text-on-primary font-label-sm text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm">
                              15% OFF Transferencia
                            </span>
                            <span className="bg-surface-container-highest text-on-surface font-label-sm text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm border border-surface-variant">
                              AMD RDNA 3
                            </span>
                          </div>
                          <button
                            className="text-secondary hover:text-primary transition-colors p-1"
                            title="Favorito"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              favorite_border
                            </span>
                          </button>
                        </div>
                        <div className="w-full h-48 bg-surface-container-low border border-surface-variant flex items-center justify-center p-2 rounded-sm mb-space-sm overflow-hidden">
                          <img
                            className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                            data-alt="Sapphire Nitro+ AMD Radeon RX 7900 XTX Vapor-X 24GB graphics card showing aluminum shroud and clean minimalist lighting studio setup"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaOT4vg1aL7X3x-HhGuG_LhbtURyBq3GPOZDk-VU4Oh1gm1a8q6sqj8qCAMJZ6bj8mSCmwcCUuFpAa_Q9yMldHUuGz2ZrtSlos9HtJv8Uy09k6w_bcsnpr-onUFMewUzRTFTJneU-Wv9wtsYTjhbctF7qa0r6Q-krtF2d5ThvEwe1aIZo3rinclV4tJjD5mR99JhBYflTZ3t9KSERTVqSk_5OAaPGk-efVYhcgU0veBP9-uQ6StFls"
                          />
                        </div>
                        <div className="flex flex-col mb-space-sm">
                          <span className="font-label-sm text-[11px] text-secondary uppercase font-bold">
                            SAPPHIRE NITRO+
                          </span>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-2">
                            AMD Radeon RX 7900 XTX Vapor-X 24GB GDDR6
                          </h3>
                        </div>
                        <ul className="flex flex-col gap-1 font-body-sm text-body-sm text-secondary bg-surface-container-low p-2 rounded mb-space-sm border border-surface-variant">
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Stream Processors:</strong> 6.144
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Memoria:</strong> 24GB GDDR6 / 384-bit bus
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Alimentación:</strong> 3x conectores 8-pin
                            PCIe
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>DisplayPort:</strong> 2x DP 2.1 + 2x HDMI
                            2.1
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-tertiary mb-2">
                          <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                          <span>5 unidades en depósito CABA</span>
                        </div>
                        <div className="border-t border-surface-variant pt-space-xs mb-space-sm">
                          <div className="flex flex-col">
                            <span className="font-label-sm text-[10px] text-secondary uppercase">
                              Efectivo / Transferencia (-15%)
                            </span>
                            <span className="font-headline-md text-headline-md text-primary font-bold leading-none">
                              $1.780.000
                              <span className="text-xs font-normal text-secondary">
                                ARS
                              </span>
                            </span>
                          </div>
                          <div className="flex flex-col mt-1">
                            <span className="font-body-sm text-body-sm text-secondary">
                              Precio de lista:
                              <span className="line-through">$2.094.000</span>
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                              Hasta 12 cuotas fijas de $174.500
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          <button
                            className="col-span-3 h-10 bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md uppercase font-bold rounded flex items-center justify-center gap-1.5 transition-colors"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              add_shopping_cart
                            </span>
                            <span>Comprar</span>
                          </button>
                          <button
                            className="col-span-1 h-10 border border-surface-variant hover:border-on-surface bg-surface-container-low text-secondary hover:text-on-surface font-label-sm text-label-sm uppercase rounded flex items-center justify-center transition-colors"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              compare_arrows
                            </span>
                          </button>
                        </div>
                      </div>
                    </article>
                    {/* PRODUCT CARD 5 */}
                    <article className="bg-surface-container-lowest border border-surface-variant p-space-md rounded flex flex-col justify-between hover:border-primary transition-colors group">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex flex-col gap-1">
                            <span className="bg-primary text-on-primary font-label-sm text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm">
                              15% OFF Transferencia
                            </span>
                            <span className="bg-tertiary text-on-tertiary font-label-sm text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm">
                              Envío Inmediato
                            </span>
                          </div>
                          <button
                            className="text-secondary hover:text-primary transition-colors p-1"
                            title="Favorito"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              favorite_border
                            </span>
                          </button>
                        </div>
                        <div className="w-full h-48 bg-surface-container-low border border-surface-variant flex items-center justify-center p-2 rounded-sm mb-space-sm overflow-hidden">
                          <img
                            className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                            data-alt="Zotac Gaming GeForce RTX 4070 SUPER Twin Edge 12GB compact graphics card with sleek dual fan cooler pure studio product photo"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdX4vzn02ecEbhBzPdHkxLSQ7S3zW9d2Tw5eXfJqjKWCwmU8f2ADHC4p_aVigcdqQh5ketR7MT3vUojWAEBKngNof08RjOrAQeAtY3DeTmRkEMQ4AK-vMcpKMd3mKK-ToRCyj3OcMaO0LPklu2hyHXsJkwE2oQoJHo_sCEoCPLFKr1oIyqfn-Q11AlEURFrVzgMcdV9hijfD9W18s9iqUHRrwsI__i3B4KbFoqFcHFQmZZTFHxyKMW"
                          />
                        </div>
                        <div className="flex flex-col mb-space-sm">
                          <span className="font-label-sm text-[11px] text-secondary uppercase font-bold">
                            ZOTAC GAMING
                          </span>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-2">
                            GeForce RTX 4070 SUPER Twin Edge 12GB GDDR6X
                          </h3>
                        </div>
                        <ul className="flex flex-col gap-1 font-body-sm text-body-sm text-secondary bg-surface-container-low p-2 rounded mb-space-sm border border-surface-variant">
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Factor:</strong> Dual Slot compacto (234mm
                            largo)
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Memoria:</strong> 12GB GDDR6X 192-bit
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Cooling:</strong> IceStorm 2.0 con Freeze
                            Stop
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Fuente Sugerida:</strong> 650W
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-tertiary mb-2">
                          <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                          <span>18 unidades en depósito CABA</span>
                        </div>
                        <div className="border-t border-surface-variant pt-space-xs mb-space-sm">
                          <div className="flex flex-col">
                            <span className="font-label-sm text-[10px] text-secondary uppercase">
                              Efectivo / Transferencia (-15%)
                            </span>
                            <span className="font-headline-md text-headline-md text-primary font-bold leading-none">
                              $985.000
                              <span className="text-xs font-normal text-secondary">
                                ARS
                              </span>
                            </span>
                          </div>
                          <div className="flex flex-col mt-1">
                            <span className="font-body-sm text-body-sm text-secondary">
                              Precio de lista:
                              <span className="line-through">$1.158.800</span>
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                              Hasta 12 cuotas fijas de $96.566
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          <button
                            className="col-span-3 h-10 bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md uppercase font-bold rounded flex items-center justify-center gap-1.5 transition-colors"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              add_shopping_cart
                            </span>
                            <span>Comprar</span>
                          </button>
                          <button
                            className="col-span-1 h-10 border border-surface-variant hover:border-on-surface bg-surface-container-low text-secondary hover:text-on-surface font-label-sm text-label-sm uppercase rounded flex items-center justify-center transition-colors"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              compare_arrows
                            </span>
                          </button>
                        </div>
                      </div>
                    </article>
                    {/* PRODUCT CARD 6 */}
                    <article className="bg-surface-container-lowest border border-surface-variant p-space-md rounded flex flex-col justify-between hover:border-primary transition-colors group">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex flex-col gap-1">
                            <span className="bg-primary text-on-primary font-label-sm text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm">
                              15% OFF Transferencia
                            </span>
                            <span className="bg-surface-container-highest text-on-surface font-label-sm text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm border border-surface-variant">
                              Calidad Precio 1440p
                            </span>
                          </div>
                          <button
                            className="text-secondary hover:text-primary transition-colors p-1"
                            title="Favorito"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              favorite_border
                            </span>
                          </button>
                        </div>
                        <div className="w-full h-48 bg-surface-container-low border border-surface-variant flex items-center justify-center p-2 rounded-sm mb-space-sm overflow-hidden">
                          <img
                            className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                            data-alt="XFX Speedster QICK 319 Radeon RX 7800 XT Core Edition 16GB graphics card with black aerodynamic triple fan shroud on neutral background"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSDBSZURpLoyc3wofioBmxLMnMnqEQarSypmh-Jm8FJrVgxbk9NFDpf40lbJnhHQbAXQ9mp1kbknwEYRoOsIgDTcd1TvcW2c3s94nVI9oLt1Gavjp_x3htnpIzpH3TauAvnQu0u-MyY9xp4Cl9zeD74Tk1faRoUxEI9tAKiMIyvAeptDkbNdTCinsPH2zVlnmyVjAg4sZtpQexHuad71foDClna-hBNvxa6S8jltABMAdBY10Ea7qJ"
                          />
                        </div>
                        <div className="flex flex-col mb-space-sm">
                          <span className="font-label-sm text-[11px] text-secondary uppercase font-bold">
                            XFX SPEEDSTER
                          </span>
                          <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-2">
                            AMD Radeon RX 7800 XT QICK 319 Core 16GB GDDR6
                          </h3>
                        </div>
                        <ul className="flex flex-col gap-1 font-body-sm text-body-sm text-secondary bg-surface-container-low p-2 rounded mb-space-sm border border-surface-variant">
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Boost Clock:</strong> 2430 MHz
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Memoria:</strong> 16GB GDDR6 256-bit
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Alimentación:</strong> 2x 8-pin PCIe
                            estándar
                          </li>
                          <li className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-outline rounded-full"></span>
                            <strong>Garantía:</strong> 24 Meses Oficial XFX Arg
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-tertiary mb-2">
                          <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                          <span>9 unidades disponibles</span>
                        </div>
                        <div className="border-t border-surface-variant pt-space-xs mb-space-sm">
                          <div className="flex flex-col">
                            <span className="font-label-sm text-[10px] text-secondary uppercase">
                              Efectivo / Transferencia (-15%)
                            </span>
                            <span className="font-headline-md text-headline-md text-primary font-bold leading-none">
                              $890.000
                              <span className="text-xs font-normal text-secondary">
                                ARS
                              </span>
                            </span>
                          </div>
                          <div className="flex flex-col mt-1">
                            <span className="font-body-sm text-body-sm text-secondary">
                              Precio de lista:
                              <span className="line-through">$1.047.000</span>
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                              Hasta 12 cuotas fijas de $87.250
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          <button
                            className="col-span-3 h-10 bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md uppercase font-bold rounded flex items-center justify-center gap-1.5 transition-colors"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              add_shopping_cart
                            </span>
                            <span>Comprar</span>
                          </button>
                          <button
                            className="col-span-1 h-10 border border-surface-variant hover:border-on-surface bg-surface-container-low text-secondary hover:text-on-surface font-label-sm text-label-sm uppercase rounded flex items-center justify-center transition-colors"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              compare_arrows
                            </span>
                          </button>
                        </div>
                      </div>
                    </article>
                  </div>
                  {/* COMPARISON DOCK BAR (FLAT MECHANICAL NOTIFICATION) */}
                  <div className="bg-surface-container-low border border-surface-variant p-space-md rounded flex flex-col md:flex-row items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-[28px]">
                        balance
                      </span>
                      <div>
                        <span className="font-label-lg text-label-lg uppercase font-bold text-on-surface">
                          Comparador Técnico de Hardware (2 GPUs seleccionadas)
                        </span>
                        <p className="font-body-sm text-body-sm text-secondary">
                          Compará benchmark FPS en 1440p/4K, consumo en Watts
                          bajo stress y conectores de alimentación requeridos.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-sm w-full md:w-auto">
                      <button
                        className="w-full md:w-auto px-space-lg h-10 bg-inverse-surface hover:bg-on-surface text-inverse-on-surface font-label-md text-label-md uppercase tracking-wider font-bold rounded transition-colors flex items-center justify-center gap-2"
                        type="button"
                      >
                        <span>Ver Tabla Comparativa</span>
                        <span className="material-symbols-outlined text-[16px]">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                  {/* ==================== PAGINATION & RESULTS SELECTOR
                ==================== */}
                  <div className="border-t border-surface-variant pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
                    {/* Items per page selector */}
                    <div className="flex items-center gap-2 font-label-md text-label-md text-secondary">
                      <span>Mostrar por página:</span>
                      <button
                        className="w-8 h-8 flex items-center justify-center bg-primary text-on-primary font-bold rounded"
                        type="button"
                      >
                        12
                      </button>
                      <button
                        className="w-8 h-8 flex items-center justify-center bg-surface-container-low border border-surface-variant text-on-surface hover:border-primary rounded"
                        type="button"
                      >
                        24
                      </button>
                      <button
                        className="w-8 h-8 flex items-center justify-center bg-surface-container-low border border-surface-variant text-on-surface hover:border-primary rounded"
                        type="button"
                      >
                        48
                      </button>
                    </div>
                    {/* Page Numbering Buttons */}
                    <nav
                      aria-label="Paginación"
                      className="flex items-center gap-1 font-label-md text-label-md"
                    >
                      <button
                        className="h-9 px-3 border border-surface-variant bg-surface-container-low text-secondary hover:text-on-surface rounded flex items-center gap-1 disabled:opacity-40"
                        disabled=""
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          chevron_left
                        </span>
                        <span className="hidden md:inline">Anterior</span>
                      </button>
                      <button
                        className="w-9 h-9 bg-primary text-on-primary font-bold rounded"
                        type="button"
                      >
                        1
                      </button>
                      <button
                        className="w-9 h-9 bg-surface-container-lowest border border-surface-variant text-on-surface hover:border-on-surface rounded"
                        type="button"
                      >
                        2
                      </button>
                      <button
                        className="w-9 h-9 bg-surface-container-lowest border border-surface-variant text-on-surface hover:border-on-surface rounded"
                        type="button"
                      >
                        3
                      </button>
                      <span className="px-1 text-secondary">...</span>
                      <button
                        className="w-9 h-9 bg-surface-container-lowest border border-surface-variant text-on-surface hover:border-on-surface rounded"
                        type="button"
                      >
                        12
                      </button>
                      <button
                        className="h-9 px-3 border border-surface-variant bg-surface-container-lowest text-on-surface hover:border-primary rounded flex items-center gap-1"
                        type="button"
                      >
                        <span className="hidden md:inline">Siguiente</span>
                        <span className="material-symbols-outlined text-[16px]">
                          chevron_right
                        </span>
                      </button>
                    </nav>
                    {/* Counter */}
                    <div className="font-body-sm text-body-sm text-secondary">
                      Mostrando
                      <span className="font-bold text-on-surface">
                        1 - 6
                      </span>{" "}
                      de
                      <span className="font-bold text-on-surface">
                        248
                      </span>{" "}
                      ítems
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </section>
          {/* TECHNICAL ASSISTANCE & CONSULTATION BANNER (FLAT MECHANICAL) */}
          <section className="w-full bg-surface-container-low border-t border-surface-variant py-space-xl">
            <div className="max-w-[1320px] mx-auto px-margin-desktop">
              <div className="border border-surface-variant bg-surface-container-lowest p-space-lg rounded flex flex-col lg:flex-row items-center justify-between gap-space-lg">
                <div className="flex items-center gap-space-md">
                  <div className="w-14 h-14 bg-surface-container flex items-center justify-center shrink-0 border border-surface-variant rounded">
                    <span className="material-symbols-outlined text-primary text-[32px]">
                      contact_support
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface font-bold">
                      ¿Dudas de compatibilidad con tu Gabinete o Motherboard?
                    </h3>
                    <p className="font-body-md text-body-md text-secondary mt-0.5">
                      Nuestro equipo de ensambladores en Belgrano chequea
                      dimensiones en mm, cuello de botella con tu CPU y potencia
                      real requerida de tu fuente sin costo.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm shrink-0 w-full lg:w-auto">
                  <button
                    className="w-full sm:w-auto px-space-lg h-11 bg-tertiary-container hover:bg-tertiary text-on-tertiary font-label-md text-label-md uppercase font-bold rounded flex items-center justify-center gap-2 transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      chat
                    </span>
                    <span>Consultar por WhatsApp Técnico</span>
                  </button>
                  <button
                    className="w-full sm:w-auto px-space-lg h-11 bg-surface-container border border-surface-variant hover:border-on-surface text-on-surface font-label-md text-label-md uppercase font-bold rounded flex items-center justify-center transition-colors"
                    type="button"
                  >
                    <span>Simulador de Ensamble</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* SCRIPT FOR VIEW SWITCH MICRO-INTERACTION */}
        </div>
      </main>
    </>
  );
}

export default SearchPage;
