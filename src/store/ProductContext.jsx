import { createContext, useEffect, useReducer, useRef } from "react";
import { productReducer } from "./ProductReducer";
import { GET_ALL_PRODUCT_CATEGORIES } from "@/constants/constant";
import {
  getMyCartFromCache,
  getMyWishlistFromCache,
  storeMyCartToCache,
  storeMyWishlistToCache,
} from "@/utils/products";

export const INITIAL_STATE = {
  userInfo: {
    userId: "JamesBond007",
    name: "Guest User",
    address: "Flat - 37, Guest Aparment, GuestCity, GuestState, India, 44966.",
    phone: "7777777777",
  },
  productList: [],
  myCart: {},
  myWishlist: {},
  price: 1000,
  categories: {},
  sortBy: "A-Z",
  search: "",
  productLoading: false,
  productError: false,
};

export const ProductContext = createContext({
  productState: INITIAL_STATE,
  productDispatch: () => {},
});

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, INITIAL_STATE);
  const { userInfo, myCart, myWishlist } = state;

  const hardRefreshRef = useRef(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(GET_ALL_PRODUCT_CATEGORIES);
        if (response.ok) {
          const data = await response.json();

          const categories = {};

          data.forEach((element) => {
            categories[element] = false;
          });

          dispatch({ type: "ADD_CATEGORIES_FILTER", payload: categories });
        }
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [state.userInfo.userId]);

  useEffect(() => {
    if (!hardRefreshRef.current) {
      // for first reload
      // retrive cart and wishlist from cache
      const myWishlist = getMyWishlistFromCache(state.userInfo.userId);
      if (myWishlist) {
        dispatch({ type: "ADD_MY_WISHLIST", payload: myWishlist });
      }

      const myCart = getMyCartFromCache(state.userInfo.userId);
      if (myCart) {
        dispatch({ type: "ADD_MY_CART", payload: myCart });
      }

      hardRefreshRef.current = true;
      return;
    } else {
      // update store everytime cart or wishlist changes
      storeMyCartToCache(userInfo.userId, myCart);
      storeMyWishlistToCache(userInfo.userId, myWishlist);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(myCart), JSON.stringify(myWishlist), userInfo.userId]);

  return (
    <ProductContext.Provider
      value={{ productState: state, productDispatch: dispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
