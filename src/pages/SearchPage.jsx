import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router";

function SearchPage({ searchTerm, setSearchTerm }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Estado de filtros del cliente
  const [filters, setFilters] = useState({
    priceMin: 150000,
    priceMax: 4500000,
    inMediato: false,
    preventa: false,
    showroom: false,
    chipsets: {
      "NVIDIA GeForce RTX 4090": false,
      "GeForce RTX 4080 SUPER": false,
      "GeForce RTX 4070 Ti SUPER": false,
      "GeForce RTX 4070 SUPER": false,
      "GeForce RTX 4060 Ti / 4060": false,
      "AMD Radeon RX 7900 XTX": false,
      "AMD Radeon RX 7800 XT": false,
    },
    marcas: {
      ASUS: false,
      MSI: false,
      Gigabyte: false,
      Zotac: false,
      PNY: false,
      Sapphire: false,
      XFX: false,
      Palit: false,
    },
    vram: null, // "8 GB", "12 GB", "16 GB", "24 GB"
    psu: {
      "650W a 750W": false,
      "750W a 850W": false,
      "1000W o superior": false,
    },
  });

  // Cargar productos del backend al montar el componente
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/productos");
      setProductos(response.data);
    } catch (error) {
      console.error("Ha ocurrido un error al obtener los productos: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Manejadores de cambios en los filtros
  const handlePriceChange = (e, type) => {
    const value = Number(e.target.value);
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleCheckboxChange = (category, key) => {
    setFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: !prev[category][key],
      },
    }));
  };

  const handleSimpleCheckbox = (key) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleVramSelect = (size) => {
    setFilters((prev) => ({
      ...prev,
      vram: prev.vram === size ? null : size,
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      priceMin: 150000,
      priceMax: 4500000,
      inMediato: false,
      preventa: false,
      showroom: false,
      chipsets: Object.keys(filters.chipsets).reduce(
        (acc, k) => ({ ...acc, [k]: false }),
        {},
      ),
      marcas: Object.keys(filters.marcas).reduce(
        (acc, k) => ({ ...acc, [k]: false }),
        {},
      ),
      vram: null,
      psu: Object.keys(filters.psu).reduce(
        (acc, k) => ({ ...acc, [k]: false }),
        {},
      ),
    });
    setSearchTerm("");
  };

  // Filtrado lógico aplicado en memoria sobre el array recibido del backend
  const filteredProducts = useMemo(() => {
    return productos.filter((prod) => {
      const precioNum = Number(prod.precio) || 0;
      const nombreDesc = `${prod.nombre} ${prod.descripcion}`.toLowerCase();

      // 1. Filtro por buscador de texto
      if (searchTerm && !nombreDesc.includes(searchTerm.toLowerCase())) {
        return false;
      }

      // 2. Filtro por Rango de Precio
      if (precioNum < filters.priceMin || precioNum > filters.priceMax) {
        return false;
      }

      // 3. Filtro por Chipset (si hay alguno seleccionado, el producto debe incluir al menos uno)
      const activeChipsets = Object.keys(filters.chipsets).filter(
        (k) => filters.chipsets[k],
      );
      if (activeChipsets.length > 0) {
        const matchesChipset = activeChipsets.some((chip) =>
          nombreDesc.includes(chip.toLowerCase()),
        );
        if (!matchesChipset) return false;
      }

      // 4. Filtro por Marca / Fabricante
      const activeMarcas = Object.keys(filters.marcas).filter(
        (k) => filters.marcas[k],
      );
      if (activeMarcas.length > 0) {
        const matchesMarca = activeMarcas.some((marca) =>
          nombreDesc.includes(marca.toLowerCase()),
        );
        if (!matchesMarca) return false;
      }

      // 5. Filtro por VRAM
      if (filters.vram) {
        if (!nombreDesc.includes(filters.vram.toLowerCase())) {
          return false;
        }
      }

      return true;
    });
  }, [productos, filters, searchTerm]);

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
                      {filteredProducts.length} productos encontrados
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                    Catálogo de Hardware de Alto Rendimiento
                  </h1>
                </div>
                {/* Search bar inside category */}
                <div className="w-full lg:w-96 flex">
                  <input
                    className="w-full h-10 px-space-md bg-surface-container-low border border-surface-variant rounded-l text-body-md text-on-surface placeholder:text-secondary focus:outline-none focus:border-primary-container"
                    placeholder="Filtrar por chipset, modelo o serie..."
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
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
                <div className="flex flex-wrap items-center gap-space-xs font-label-sm text-label-sm">
                  <span className="text-secondary uppercase">
                    Filtros Activos:
                  </span>
                  {filters.vram && (
                    <span className="inline-flex items-center gap-1 bg-surface-container border border-surface-variant px-2 py-1 text-on-surface rounded">
                      VRAM: {filters.vram}
                      <button
                        className="text-secondary hover:text-primary leading-none"
                        type="button"
                        onClick={() => handleVramSelect(filters.vram)}
                      >
                        ×
                      </button>
                    </span>
                  )}
                  <button
                    className="text-primary hover:text-primary ml-1 font-bold"
                    type="button"
                    onClick={handleResetFilters}
                  >
                    Limpiar todos
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* MAIN CATALOGUE CONTAINER */}
          <section className="w-full py-space-xl">
            <div className="max-w-[1320px] mx-auto px-margin-desktop">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
                {/* ==================== SIDEBAR FILTERS (4 Cols) ==================== */}
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
                      onClick={handleResetFilters}
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
                            value={filters.priceMin}
                            onChange={(e) => handlePriceChange(e, "priceMin")}
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
                            value={filters.priceMax}
                            onChange={(e) => handlePriceChange(e, "priceMax")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chipset & GPU Series */}
                  <div className="flex flex-col gap-2 pb-space-md border-b border-surface-variant">
                    <span className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-wide">
                      Chipset / Serie
                    </span>
                    <div className="max-h-48 overflow-y-auto flex flex-col gap-2 pr-1">
                      {Object.keys(filters.chipsets).map((chip) => (
                        <label
                          key={chip}
                          className="flex items-center gap-space-xs text-body-md text-on-surface cursor-pointer"
                        >
                          <input
                            className="w-[18px] h-[18px] accent-primary"
                            type="checkbox"
                            checked={filters.chipsets[chip]}
                            onChange={() =>
                              handleCheckboxChange("chipsets", chip)
                            }
                          />
                          <span>{chip}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Brand / Manufacturer */}
                  <div className="flex flex-col gap-2 pb-space-md border-b border-surface-variant">
                    <span className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-wide">
                      Fabricante / Ensamblador
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.keys(filters.marcas).map((marca) => (
                        <label
                          key={marca}
                          className="flex items-center gap-1.5 text-body-md text-on-surface cursor-pointer"
                        >
                          <input
                            className="w-[18px] h-[18px] accent-primary"
                            type="checkbox"
                            checked={filters.marcas[marca]}
                            onChange={() =>
                              handleCheckboxChange("marcas", marca)
                            }
                          />
                          <span>{marca}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* VRAM Memory Size */}
                  <div className="flex flex-col gap-2 pb-space-md border-b border-surface-variant">
                    <span className="font-label-lg text-label-lg text-on-surface font-bold uppercase tracking-wide">
                      RAM
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {["8 GB", "12 GB", "16 GB", "24 GB"].map((size) => (
                        <button
                          key={size}
                          className={`px-2.5 py-1 text-label-md font-label-md border rounded transition-colors ${
                            filters.vram === size
                              ? "bg-primary text-on-primary border-primary font-bold"
                              : "border-surface-variant bg-surface-container-low text-secondary hover:text-on-surface"
                          }`}
                          type="button"
                          onClick={() => handleVramSelect(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </aside>

                {/* ==================== PRODUCT GRID (9 Cols) ==================== */}
                <main className="lg:col-span-9 flex flex-col gap-space-lg">
                  {loading ? (
                    <div className="text-center py-12 text-secondary">
                      Cargando productos...
                    </div>
                  ) : filteredProducts.length === 0 ? (
                    <div className="text-center py-12 text-secondary bg-surface-container-lowest border border-surface-variant rounded">
                      No se encontraron productos que coincidan con los filtros
                      seleccionados.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter-desktop">
                      {filteredProducts.map((prod) => (
                        <article
                          key={prod.id}
                          className="bg-surface-container-lowest border border-surface-variant p-space-md rounded flex flex-col justify-between hover:border-primary transition-colors group"
                        >
                          <div>
                            <div className="w-full h-48 bg-surface-container-low border border-surface-variant flex items-center justify-center p-2 rounded-sm mb-space-sm overflow-hidden">
                              <img
                                className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-200"
                                src={prod.img}
                                alt={prod.nombre}
                              />
                            </div>
                            <div className="flex flex-col mb-space-sm">
                              <span className="font-label-sm text-[11px] text-secondary uppercase font-bold">
                                {prod.categorias?.nombre || "Hardware"}
                              </span>
                              <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-2">
                                {prod.nombre}
                              </h3>
                            </div>
                            <p className="font-body-sm text-body-sm text-secondary line-clamp-3 mb-space-sm">
                              {prod.descripcion}
                            </p>
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-tertiary mb-2">
                              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                              <span>Stock disponible: {prod.stock} un.</span>
                            </div>
                            <div className="border-t border-surface-variant pt-space-xs mb-space-sm">
                              <div className="flex flex-col">
                                <span className="font-label-sm text-[10px] text-secondary uppercase">
                                  Precio contado
                                </span>
                                <span className="font-headline-md text-headline-md text-primary font-bold leading-none">
                                  ${Number(prod.precio).toLocaleString("es-AR")}
                                  <span className="text-xs font-normal text-secondary ml-1">
                                    ARS
                                  </span>
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
                              <Link
                                className="col-span-1 h-10 border border-surface-variant hover:border-on-surface bg-surface-container-low text-secondary hover:text-on-surface font-label-sm text-label-sm uppercase rounded flex items-center justify-center transition-colors"
                                to={`/product-details/${prod.id}`}
                              >
                                <span className="material-symbols-outlined text-[18px]">
                                  info
                                </span>
                              </Link>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}
                </main>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default SearchPage;
