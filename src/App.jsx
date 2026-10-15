import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import Checkout from "./pages/Checkout.jsx";
import MyAccount from "./pages/MyAccount.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<MyAccount />} />
      </Routes>
    </>
  );
}

export default App;
