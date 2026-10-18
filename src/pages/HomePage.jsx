import axios from "axios";
import { useEffect, useState } from "react";

import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import BuildYourPCBanner from "./home/BuildYourPCBanner.jsx";
import FlashOffersAndFeatured from "./home/FlashOffersAndFeatured.jsx";
import HardwareCategoriesBanner from "./home/HardwareCategoriesBanner.jsx";
import HeroBannerMain from "./home/HeroBannerMain.jsx";
import LocalBenefits from "./home/LocalBenefits.jsx";
import MonthlyAssemblies from "./home/MonthlyAssemblies.jsx";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get(`/api/products`).then((response) => {
      setProducts(response.data);
    });

    axios.get(`/api/cart-items`).then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.svg" />
      <title>ZeroLag</title>
      {/*
      SECCIÓN GENERAL: HEADER PRINCIPAL
      Incluye la barra de anuncios superior, el buscador, logo y menú de navegación.
      */}
      <Header cart={cart} />

      {/* 
          SECCIÓN GENERAL: CONTENIDO PRINCIPAL (MAIN)
       */}
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
          <FlashOffersAndFeatured products={products} />

          {/* 6. BANNER CONFIGURADOR ARMA TU PC */}
          <BuildYourPCBanner />
        </div>
      </main>

      {/* 
          SECCIÓN GENERAL: FOOTER (PIE DE PÁGINA)
      */}
      <Footer />
    </>
  );
}

export default HomePage;
