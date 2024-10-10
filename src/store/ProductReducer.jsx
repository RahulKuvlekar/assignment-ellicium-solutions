import { INITIAL_STATE } from "./ProductContext";

export function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        productLoading: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        productError: action.payload,
      };
    case "ADD_PRODUCTS":
      return {
        ...state,
        productList: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        myCart: { ...state.myCart, [action.payload.id]: action.payload },
      };

    case "REMOVE_FROM_CART": {
      delete state.myCart[action.payload];
      return { ...state };
    }

    case "EMPTY_CART": {
      return {
        ...state,
        myCart: {},
      };
    }

    case "UPDATE_PRODUCT_QUANTITY": {
      const { id, quantity } = action.payload;
      const updatedCart = { ...state.myCart };
      updatedCart[id].quantity = quantity;
      return {
        ...state,
        myCart: updatedCart,
      };
    }

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        myWishlist: {
          ...state.myWishlist,
          [action.payload.id]: action.payload,
        },
      };

    case "REMOVE_FROM_WISHLIST": {
      delete state.myWishlist[action.payload];
      return { ...state };
    }
    case "UPDATE_PRICE_FILTER": {
      return {
        ...state,
        price: action.payload,
      };
    }

    case "ADD_CATEGORIES_FILTER": {
      return {
        ...state,
        categories: action.payload,
      };
    }

    case "UPDATE_CATEGORIES_FILTER": {
      return {
        ...state,
        categories: {
          ...state.categories,
          ...action.payload,
        },
      };
    }

    case "UPDATE_SORT_BY_FILTER": {
      return {
        ...state,
        sortBy: action.payload,
      };
    }

    case "CLEAR_ALL_FILTERS": {
      const intialCategories = Object.keys(state.categories).reduce(
        (acc, key) => {
          acc[key] = false;
          return acc;
        },
        {}
      );

      return {
        ...state,
        price: 1000,
        categories: intialCategories,
        sortBy: "A-Z",
      };
    }

    case "UPDATE_SEARCH_FILTER": {
      return {
        ...state,
        search: action.payload,
      };
    }

    case "ADD_MY_CART": {
      return {
        ...state,
        myCart: action.payload,
      };
    }

    case "ADD_MY_WISHLIST": {
      return {
        ...state,
        myWishlist: action.payload,
      };
    }

    default:
      return state;
  }
}
