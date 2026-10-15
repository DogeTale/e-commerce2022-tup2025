import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import Checkout from "./pages/Checkout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
