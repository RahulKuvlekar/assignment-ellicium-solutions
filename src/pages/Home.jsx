import ErrorMessage from "@/components/ui/error";
import FiltersSidebar from "@/components/ui/FiltersSidebar";
import MobileFilterSidebar from "@/components/ui/FiltersSidebar/MobileFilterSidebar";
import ProductsLoader from "@/components/ui/Loaders/ProductsLoader";
import ProductCard from "@/components/ui/Products/Cards";
import SortBy from "@/components/ui/Products/Filters/SortBy";
import ProductsPagination from "@/components/ui/Products/Pagination/Pagination";
import ProductsGrid from "@/components/ui/Products/ProductsGrid";
import { GET_ALL_PRODUCTS } from "@/constants/constant";
import usePrevious from "@/hooks/use-previous";
import useStore from "@/hooks/use-store";
import {
  dispatchAddProducts,
  dispatchError,
  dispatchLoading,
} from "@/utils/products";
import { useEffect, useMemo, useRef, useState } from "react";

const PRODUCT_COUNT_PER_PAGE = 6;

const fakeTimer = (time = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

const filteredByPrice = (products = [], price = 1000) => {
  return products.filter((product) => product.price <= price);
};

const filterByCategories = (products = [], categories = []) => {
  return products.filter((product) => categories.includes(product.category));
};

const Home = () => {
  const { productState, productDispatch } = useStore();
  const [currentPage, setCurrentPage] = useState(1);
  const {
    productLoading,
    productError,
    productList,
    categories,
    price,
    sortBy,
    search,
  } = productState;
  const previousFiltersCategories = usePrevious(Object.values(categories));
  const previousFiltersPrice = usePrevious(price);
  const previousFiltersSortBy = usePrevious(sortBy);
  const productsRef = useRef();

  const handlePageChange = (page) => {
    setCurrentPage(page);
    productsRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const FilteredProductList = useMemo(() => {
    let list = structuredClone(productList);

    if (search.length > 0) {
      list = list.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (price) {
      list = filteredByPrice(list, price);
    }

    if (Object.values(categories).includes(true)) {
      list = filterByCategories(
        list,
        Object.keys(categories).filter((key) => categories[key])
      );
    }

    if (sortBy) {
      switch (sortBy) {
        case "A-Z":
          return list.sort((a, b) => a.title.localeCompare(b.title));
        case "Z-A":
          return list.sort((a, b) => b.title.localeCompare(a.title));
        case "Low-High":
          return list.sort((a, b) => a.price - b.price);
        case "High-Low":
          return list.sort((a, b) => b.price - a.price);
        default:
          return list;
      }
    }

    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Object.keys(categories), price, sortBy]);

  async function getAllProducts() {
    try {
      productDispatch(dispatchLoading(true));
      const response = await fetch(GET_ALL_PRODUCTS);
      if (response.ok) {
        const data = await response.json();
        await fakeTimer(1000);
        productDispatch(dispatchAddProducts(data));
      }
    } catch (error) {
      productDispatch(dispatchError(error.message));
    } finally {
      productDispatch(dispatchLoading(false));
    }
  }

  useEffect(() => {
    if (
      JSON.stringify(previousFiltersCategories) !==
        JSON.stringify(Object.values(categories)) ||
      previousFiltersPrice !== price ||
      previousFiltersSortBy !== sortBy
    ) {
      setCurrentPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Object.values(categories), price, sortBy]);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="flex flex-row main__screen">
      <FiltersSidebar />
      <div className="w-full overflow-auto custom-scrollbar" ref={productsRef}>
        <div className="flex flex-row items-center justify-between p-4">
          <h1 className="text-2xl font-medium hidden md:block">
            Products - {FilteredProductList.length || ""}
          </h1>
          <MobileFilterSidebar />
          <SortBy />
        </div>
        {(() => {
          if (productLoading)
            return (
              <ProductsGrid>
                <ProductsLoader count={6} />
              </ProductsGrid>
            );
          else if (productError) return <ErrorMessage />;
          else if (FilteredProductList.length === 0)
            return <ErrorMessage message="No Products Found !!!" />;
          else
            return (
              <ProductsGrid>
                {FilteredProductList.slice(
                  (currentPage - 1) * PRODUCT_COUNT_PER_PAGE,
                  currentPage * PRODUCT_COUNT_PER_PAGE
                ).map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </ProductsGrid>
            );
        })()}
        {FilteredProductList.length > 0 && (
          <div className="flex flex-col items-center justify-center my-4">
            <ProductsPagination
              count={Math.ceil(
                FilteredProductList.length / PRODUCT_COUNT_PER_PAGE
              )}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
