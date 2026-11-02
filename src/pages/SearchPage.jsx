import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import SearchHeaderControls from "./search/SearchHeaderControls";
import SearchSidebarFilters from "./search/SearchSidebarFilters";
import SearchProductGrid from "./search/SearchProductGrid";

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
    categoria: "", // NUEVO: Categoría seleccionada
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
    vram: null,
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

  const handleCategoryChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      categoria: e.target.value,
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      priceMin: 150000,
      priceMax: 4500000,
      inMediato: false,
      preventa: false,
      showroom: false,
      categoria: "", // NUEVO: Resetea la categoría
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

      // NUEVO: Filtro por Categoría
      if (filters.categoria && prod.categorias?.nombre !== filters.categoria) {
        return false;
      }

      // 1. Filtro por buscador de texto
      if (searchTerm && !nombreDesc.includes(searchTerm.toLowerCase())) {
        return false;
      }

      // 2. Filtro por Rango de Precio
      if (precioNum < filters.priceMin || precioNum > filters.priceMax) {
        return false;
      }

      // 3. Filtro por Chipset
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
          <Breadcrumbs />

          {/* CATEGORY HEADER & CONTROLS */}
          <SearchHeaderControls
            filteredProducts={filteredProducts}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            filters={filters}
            handleVramSelect={handleVramSelect}
            handleResetFilters={handleResetFilters}
          />

          {/* MAIN CATALOGUE CONTAINER */}
          <section className="w-full py-space-xl">
            <div className="max-w-[1320px] mx-auto px-margin-desktop">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
                {/* ==================== SIDEBAR FILTERS (4 Cols) ==================== */}
                <SearchSidebarFilters
                  handleResetFilters={handleResetFilters}
                  filters={filters}
                  handlePriceChange={handlePriceChange}
                  handleCheckboxChange={handleCheckboxChange}
                  handleVramSelect={handleVramSelect}
                  handleCategoryChange={handleCategoryChange}
                />

                {/* ==================== PRODUCT GRID (9 Cols) ==================== */}
                <SearchProductGrid
                  loading={loading}
                  filteredProducts={filteredProducts}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default SearchPage;
