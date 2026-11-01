import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import axiosAuth from "./api/axiosAuth.js";

/* Componentes de Proteccion */
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import PublicRoute from "./components/PublicRoute.jsx";

/* Paginas y Componentes */
import HomePage from "./pages/HomePage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
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
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    try {
      const response = await axiosAuth.get(`/api/carrito`);
      setCart(response.data);
    } catch (error) {
      console.error("Error al cargar el carrito:", error);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const adminRoutes = ["/control-panel", "/inventory", "/admin-orders"];
  const hideHeaderFooter = adminRoutes.includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header cart={cart} />}

      <Routes>
        {/* Paginas Publicas SIN EXCEPCION */}
        <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
        <Route path="product-details" element={<ProductDetailsPage />} />
        <Route path="search" element={<SearchPage />} />
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
            element={<CheckoutPage cart={cart} loadCart={loadCart} />}
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
