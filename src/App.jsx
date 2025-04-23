import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // ✅ Import CartProvider
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import HomeList from "./components/HomeList";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider> {/* ✅ Wrap the whole app */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeList />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
