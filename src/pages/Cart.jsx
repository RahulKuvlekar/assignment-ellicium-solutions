import ErrorMessage from "@/components/ui/error";
import Pricing from "@/components/ui/Pricing/Pricing";
import ProductCard from "@/components/ui/Products/Cards";
import UserInfo from "@/components/ui/UserInfo";
import useStore from "@/hooks/use-store";
import { Fragment } from "react";

const Cart = () => {
  const { productState } = useStore();
  const { myCart } = productState;

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <h1 className="py-4 text-2xl font-medium"> My Cart</h1>
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 w-full max-w-[880px]">
        <div className="w-full flex flex-col items-center border-[1px] border-neutral-300">
          <h1 className="py-4 text-xl font-medium"> Order Details</h1>
          <hr className="h-[1px] w-full border-0 bg-neutral-300" />
          <UserInfo />
          {Object.keys(myCart).length > 0 ? (
            Object.values(myCart).map((product) => (
              <Fragment key={`cart-list-item-${product.id}`}>
                <ProductCard {...product} variant="cart" />
                <br />
              </Fragment>
            ))
          ) : (
            <ErrorMessage message="No items in your cart" />
          )}
        </div>
        {Object.values(myCart).length > 0 && (
          <div className="w-full flex flex-col items-center border-[1px] border-neutral-300">
            <Pricing />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
