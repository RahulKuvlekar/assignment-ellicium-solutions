import { Input } from "@/components/ui/input";
import { useCallback, useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import debounce from "lodash/debounce";
import { GET_ALL_PRODUCTS } from "@/constants/constant";
import useStore from "@/hooks/use-store";
import { dispatchUpdateSearchFilter } from "@/utils/products";
import { useNavigate } from "react-router-dom";

const fakeTimer = async (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};

const AutoSuggestion = ({ placeholder = "Search Products", className }) => {
  const [inputValue, setInputValue] = useState("");
  const [productList, setProductList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { productDispatch } = useStore();

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      productDispatch(dispatchUpdateSearchFilter(""));
    }
  };

  const handlerSearch = () => {
    productDispatch(dispatchUpdateSearchFilter(inputValue));
    setSearchList([]);
    navigate("/products");
  };

  const getSuggestions = async () => {
    // if present in cache
    const productTitles = JSON.parse(localStorage.getItem("ProductsTitles"));
    if (productTitles) {
      setProductList(productTitles);
      return;
    }

    try {
      setIsloading(true);
      await fakeTimer(1000);
      const response = await fetch(GET_ALL_PRODUCTS);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      const productTitles = data.map((item) => item.title);
      setProductList(productTitles);
      localStorage.setItem("ProductsTitles", JSON.stringify(productTitles));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsloading(false);
    }
  };

  const getSuggestionsDebounced = useCallback(
    debounce(getSuggestions, 300),
    []
  );

  useEffect(() => {
    if (inputValue.length > 0 && productList.length === 0) {
      getSuggestionsDebounced();
    }

    if (
      inputValue.length > 0 &&
      searchList[0]?.toLowerCase() !== inputValue?.toLowerCase()
    ) {
      setSearchList(
        productList.filter((item) =>
          item.toLowerCase()?.includes(inputValue.toLowerCase())
        )
      );
    } else {
      setSearchList([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, productList]);

  return (
    <div
      className={`max-w-[400px] w-full relative ${className ? className : ""}`}
    >
      <div className="bg-white border-2  shadow relative rounded-xl flex">
        <span className="w-auto flex justify-end  items-center text-gray-500 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </span>
        <Input
          type="text"
          className="border-white outline-none w-full rounded-xl p-2 focus-visible:outline-none focus-visible:ring-0 focus-visible: border-0 focus-visible:ring-offset-0 "
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputValueChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handlerSearch();
            }
          }}
        />
        <button
          onClick={handlerSearch}
          className="bg-black hover:bg-gray-700 rounded-xl text-white text-xl p-2 pl-4 pr-4 ml-2"
        >
          <p className="font-semibold text-xs">Search</p>
        </button>
      </div>

      {inputValue.length > 0 && (
        <ScrollArea
          onBlur={() => setSearchList([])}
          className="w-full max-h-[200px] !absolute botton-0  left-0 right-0 bg-white border-1 shadow rounded-xl flex flex-col z-10 overflow-y-scroll overflow-x-hidden"
        >
          {isLoading && <li className="p-2 ">Loading .... </li>}
          {error && <p>{error}</p>}
          {searchList.map((item, index) => (
            <li
              key={`autosuggestion-list-${index}`}
              className="p-2 hover:bg-neutral-200 cursor-pointer"
              onClick={() => {
                setInputValue(item);
                setSearchList([item]);
              }}
            >
              {item}
            </li>
          ))}
        </ScrollArea>
      )}
    </div>
  );
};
export default AutoSuggestion;
