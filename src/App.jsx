import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import axiosAuth from "./api/axiosAuth.js";

/* Componentes de Proteccion */
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import PublicRoute from "./components/PublicRoute.jsx";

/* Paginas y Componentes */
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import MyAccountPage from "./pages/MyAccountPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import InventoryPage from "./pages/InventoryPage.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [loadingCart, setLoadingCart] = useState(false); // <--- Nuevo estado
  const [hideHeaderFooter, setHideHeaderFooter] = useState(false);

  const loadCart = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setCart([]);
      return;
    }

    try {
      setLoadingCart(true); // <--- Activamos carga
      const response = await axiosAuth.get(`/api/carrito`);
      setCart(response.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setCart([]);
      } else {
        console.error("Error al cargar el carrito:", error);
      }
    } finally {
      setLoadingCart(false); // <--- Desactivamos carga
    }
  };

  const handleAddToCart = async (producto_id) => {
    try {
      await axiosAuth.post("/api/carrito/items", {
        producto_id,
        cantidad: 1,
      });

      console.log("Se ha agregado un producto al carrito con exito!");
      await loadCart();
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
      throw error; // Permite que el componente local capture el error si es necesario
    }
  };

  useEffect(() => {
    // 1. Carga inicial del carrito
    loadCart();

    // 2. Escuchamos cuando el usuario hace login para refrescar el carrito solo
    const handleLoginEvent = () => {
      loadCart();
    };

    window.addEventListener("user-logged-in", handleLoginEvent);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener("user-logged-in", handleLoginEvent);
    };
  }, []);

  return (
    <>
      {!hideHeaderFooter && (
        <Header
          cart={cart}
          searchTerm={searchTerm}
          loadingCart={loadingCart} // <--- Se lo pasamos al Header
          setSearchTerm={setSearchTerm}
        />
      )}

      <Routes>
        {/* Paginas Publicas SIN EXCEPCION */}
        <Route
          index
          element={
            <HomePage
              cart={cart}
              loadCart={loadCart}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="product-details/:productId"
          element={<ProductDetailsPage handleAddToCart={handleAddToCart} />}
        />
        <Route
          path="search"
          element={
            <SearchPage
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* Paginas visibles solo para usarios NO LOGUEADOS */}
        <Route element={<PublicRoute />}>
          <Route path="login" element={<LoginPage />} />
        </Route>

        {/* Paginas visibles solo para usuarios LOGUEADOS */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="checkout"
            element={<CartPage cart={cart} loadCart={loadCart} />}
          />
          <Route path="orders" element={<MyAccountPage />} />
        </Route>

        {/* Paginas visibles solo para ADMINS */}
        <Route element={<AdminRoute />}>
          <Route path="inventory" element={<InventoryPage />}></Route>
        </Route>
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
