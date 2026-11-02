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

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get(`/api/productos`);
      setProducts(response.data);
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

          {/* 
              4. SECCIÓN DE ENSAMBLADOS DEL MES
              [ZONA DE TARJETAS PARA REACT]: Aquí deberás mapear o renderizar 
              las PCs armadas dinámicamente desde la base de datos (ej: pcsArmadas.map(...))
           */}
          <MonthlyAssemblies />

          {/* 
              5. SECCIÓN DE OFERTAS RELÁMPAGO Y PRODUCTOS DESTACADOS
              [ZONA DE TARJETAS PARA REACT]: Aquí deberás mapear o renderizar 
              las tarjetas de productos sueltos (GPUs, Monitores, Periféricos, etc.) 
              provenientes de tu base de datos (ej: productosFlash.map(...))
           */}
          <FlashOffersAndFeatured
            products={products}
            loadCart={loadCart}
            handleAddToCart={handleAddToCart}
          />

          {/* 6. BANNER CONFIGURADOR ARMA TU PC */}
          <BuildYourPCBanner />
        </div>
      </main>
    </>
  );
}

export default HomePage;
