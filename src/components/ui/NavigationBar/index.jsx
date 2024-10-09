import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";

import NavIconButton from "./NavIconButton";

const NavigationBar = () => {
  return (
    <nav className="flex flex-row items-center  py-4 px-8 bg-neutral-800">
      <ul className="w-full flex flex-row items-center justify-between gap-4">
        <li>
          <Link to="/">
            <h1 className="text-2xl text-white hover:text-yellow-100">
              E-commerce
            </h1>
          </Link>
        </li>

        <div className="flex flex-row items-center gap-4">
          <li>
            <Link to="/cart">
              <NavIconButton icon={ShoppingCart} count={10} />
            </Link>
          </li>
          <li>
            <Link to="/wishlist">
              <NavIconButton icon={Heart} count={2} />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavigationBar;
