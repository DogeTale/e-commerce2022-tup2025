import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

import HomePage from "./pages/HomePage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import MyAccountPage from "./pages/MyAccountPage.jsx";
import TrackingPage from "./pages/TrackingPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get(`/api/cart-items?expand=product`);
      setCart(response.data);
    };

    fetchAppData();
  }, []);

  return (
    <>
      <Header cart={cart} />

      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="orders" element={<MyAccountPage />} />
        <Route path="orders/tracking" element={<TrackingPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
