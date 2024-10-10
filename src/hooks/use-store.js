import { useContext } from "react";
import { ProductContext } from "@/store/ProductContext";

const useStore = () => {
  return useContext(ProductContext);
};

export default useStore;
