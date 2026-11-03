import axios from "axios";
import { useEffect, useState } from "react";
import BuildYourPCBanner from "./home/BuildYourPCBanner.jsx";
import FlashOffersAndFeatured from "./home/FlashOffersAndFeatured.jsx";
import HardwareCategoriesBanner from "./home/HardwareCategoriesBanner.jsx";
import HeroBannerMain from "./home/HeroBannerMain.jsx";
import LocalBenefits from "./home/LocalBenefits.jsx";
import MonthlyAssemblies from "./home/MonthlyAssemblies.jsx";

function HomePage({ loadCart, handleAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // <--- 1. Añadimos el estado de carga

  useEffect(() => {
    const getHomeData = async () => {
      try {
        const response = await axios.get(`/api/productos`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      } finally {
        setLoading(false); // <--- 2. Desactivamos el loading cuando finaliza (exito o error)
      }
    };

    getHomeData();
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.svg" />
      <title>ZeroLag</title>

      <main className="w-full pt-[156px] bg-surface min-h-[calc(100vh-156px)]">
        <div className="flex flex-col w-full">
          {/* 1. HERO BANNER PRINCIPAL */}
          <HeroBannerMain />

          {/* 2. BARRA DE BENEFICIOS LOCALES EN ARGENTINA */}
          <LocalBenefits />

          {/* 3. CATEGORÍAS RÁPIDAS DE HARDWARE */}
          <HardwareCategoriesBanner />

          {/* 4. SECCIÓN DE ENSAMBLADOS DEL MES */}
          <MonthlyAssemblies />

          {/* 
              5. SECCIÓN DE OFERTAS RELÁMPAGO Y PRODUCTOS DESTACADOS
          */}
          <FlashOffersAndFeatured
            products={products}
            loadCart={loadCart}
            handleAddToCart={handleAddToCart}
            loading={loading} // <--- 3. Le pasamos la prop de carga al componente
          />

          {/* 6. BANNER CONFIGURADOR ARMA TU PC */}
          <BuildYourPCBanner />
        </div>
      </main>
    </>
  );
}

export default HomePage;
