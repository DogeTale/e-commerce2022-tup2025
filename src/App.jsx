import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import MyAccountPage from "./pages/MyAccountPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<MyAccountPage />} />
      </Routes>
    </>
  );
}

export default App;
