import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";

import NavIconButton from "./NavIconButton";
import useStore from "@/hooks/use-store";
import AutoSuggestion from "../AutoSuggestion";
const NavigationBar = () => {
  const { productState } = useStore();
  const { myCart, myWishlist } = productState;
  const { pathname } = useLocation();

  return (
    <nav className="flex flex-col md:flex-row items-center  py-4 px-8 bg-neutral-800 relative">
      <ul className="w-full flex flex-row items-center justify-between gap-4">
        <li>
          <Link to="/">
            <h1 className="text-2xl text-white hover:text-yellow-100">
              E-commerce
            </h1>
          </Link>
        </li>
        <AutoSuggestion className="hidden md:block" />

        <div className="flex flex-row items-center gap-4">
          <li>
            <Link to="/wishlist">
              <NavIconButton
                icon={Heart}
                fill={pathname === "/wishlist" ? "#fff" : "#262626"}
                count={Object.keys(myWishlist).length}
              />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <NavIconButton
                icon={ShoppingCart}
                fill={pathname === "/cart" ? "#fff" : "#262626"}
                count={Object.keys(myCart).length}
              />
            </Link>
          </li>
        </div>
      </ul>
      <ul className="justify-center sm:justify-end md:hidden w-full flex flex-row items-center ">
        <AutoSuggestion />
      </ul>
    </nav>
  );
};

export default NavigationBar;
