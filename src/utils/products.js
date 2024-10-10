
export const dispatchAddProducts = (data) => {
    return {
        type: "ADD_PRODUCTS",
        payload: data
    }
}

export const dispatchAddToCart = (data) => {
    return {
        type: "ADD_TO_CART",
        payload: data
    }
}

export const dispatchEmptyCart = () => {
    return {
        type: "EMPTY_CART",
    }
}

export const dispatchRemoveProductFromCart = (id) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: id
    }
}

export const dispatchRemoveProductFromWishlist = (id) => {
    return {
        type: "REMOVE_FROM_WISHLIST",
        payload: id
    }
}

export const dispatchAddProductTowishlist = (data) => {
    return {
        type: "ADD_TO_WISHLIST",
        payload: data
    }
}

export const dispatchUpdateProductQuantity = (data) => {
    return {
        type: "UPDATE_PRODUCT_QUANTITY",
        payload: data
    }
}

export const dispatchLoading = (payload) => {
    return {
        type: "LOADING",
        payload,
    }
}

export const dispatchError = (payload) => {
    return {
        type: "ERROR",
        payload
    }
}

export const dispatchUpdatePriceFilter = (payload) => {
    return {
        type: "UPDATE_PRICE_FILTER",
        payload
    }
}
export const dispatchUpdateCategoryFilter = (payload) => {
    return {
        type: "UPDATE_CATEGORIES_FILTER",
        payload
    }
}

export const dispatchUpdateSortByFilter = (payload) => {
    return {
        type: "UPDATE_SORT_BY_FILTER",
        payload
    }
}

export const dispatchUpdateSearchFilter = (payload) => {
    return {
        type: "UPDATE_SEARCH_FILTER",
        payload
    }
}

export const getMyCartFromCache = (userId) => {
    if (localStorage.getItem(`${userId}-myCart`)) {
        return JSON.parse(localStorage.getItem(`${userId}-myCart`));
    }
}

export const storeMyCartToCache = (userId, myCart) => {
    // console.log("removed myCart from cache", myCart);
    // localStorage.removeItem(`${userId}-myCart`);
    localStorage.setItem(`${userId}-myCart`, JSON.stringify(myCart));
}

export const getMyWishlistFromCache = (userId) => {
    if (localStorage.getItem(`${userId}-myWishlist`)) {
        return JSON.parse(localStorage.getItem(`${userId}-myWishlist`));
    }
}

export const storeMyWishlistToCache = (userId, myWishlist) => {
    // console.log("removed wishlist from cache", myWishlist);

    // localStorage.removeItem(`${userId}-myWishlist`);
    localStorage.setItem(`${userId}-myWishlist`, JSON.stringify(myWishlist));
}   