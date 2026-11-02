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
import TrackingPage from "./pages/TrackingPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ControlPanelPage from "./pages/ControlPanelPage.jsx";
import InventoryPage from "./pages/InventoryPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [hideHeaderFooter, setHideHeaderFooter] = useState(false);

  const loadCart = async () => {
    // Opcional: Si guardas tu token en localStorage, puedes verificarlo aquí.
    // Cambia "token" por el nombre exacto que uses (ej: "access_token", "authToken", etc.)
    const token = localStorage.getItem("token");
    if (!token) {
      setCart([]);
      return;
    }

    try {
      const response = await axiosAuth.get(`/api/carrito`);
      setCart(response.data);
    } catch (error) {
      // Si el error es 401 (No autorizado), lo manejamos de forma silenciosa para usuarios no logueados
      if (error.response && error.response.status === 401) {
        setCart([]);
      } else {
        console.error("Error al cargar el carrito:", error);
      }
    }
  };

  const handleAddToCart = async (producto_id) => {
    try {
      await axiosAuth.post("/api/carrito/items", {
        producto_id,
        cantidad: 1,
      });

      console.log("Se ha agregado un producto al carrito con exito!");
      loadCart();
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
    }
  };

  useEffect(() => {
    const handleHideHeaderFooter = () => {
      setHideHeaderFooter(
        window.location.pathname.startsWith("/control-panel") ||
          window.location.pathname.startsWith("/inventory") ||
          window.location.pathname.startsWith("/admin-orders"),
      );
    };

    handleHideHeaderFooter();
    loadCart();
  }, []);

  return (
    <>
      {!hideHeaderFooter && (
        <Header
          cart={cart}
          searchTerm={searchTerm}
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
          element={<ProductDetailsPage />}
        />
        <Route
          path="search"
          element={
            <SearchPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
          <Route path="orders/tracking/:orderId" element={<TrackingPage />} />
        </Route>

        {/* Paginas visibles solo para ADMINS */}
        <Route element={<AdminRoute />}>
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="control-panel" element={<ControlPanelPage />} />
          <Route path="admin-orders" element={<OrdersPage />} />
        </Route>
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
