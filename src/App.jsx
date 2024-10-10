import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import NavigationBar from "./components/ui/NavigationBar";
import { Toaster } from "./components/ui/toaster";
import Hourglass from "./components/ui/Loaders/Hourglass";
import ErrorMessage from "./components/ui/error";

const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <main className="main__screen">
        <ErrorBoundary
          fallback={
            <ErrorMessage message="Something went wrong. Please try again after some time." />
          }
        >
          <Suspense fallback={<Hourglass size={100} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products">
                <Route index element={<Home />} />
                <Route path="details/:productId" element={<ProductDetail />} />
              </Route>
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Toaster />
    </BrowserRouter>
  );
}
export default App;
