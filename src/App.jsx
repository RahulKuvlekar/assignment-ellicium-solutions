import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

import NavigationBar from "./components/ui/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <main className="main__screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products">
            <Route index element={<Home />} />
            <Route path="details/:id" element={<ProductDetail />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
