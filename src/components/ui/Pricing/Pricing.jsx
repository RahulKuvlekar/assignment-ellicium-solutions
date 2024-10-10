import useStore from "@/hooks/use-store";
import { useMemo } from "react";
import PlaceOrderModal from "./PlaceOrderModal";

const Pricing = () => {
  const { productState } = useStore();
  const { myCart } = productState;

  const totalPrice = useMemo(
    () =>
      Object.values(myCart).reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Object.values(myCart)]
  );

  if (Object.keys(myCart).length === 0) {
    return null;
  }

  return (
    <>
      <h1 className="py-4 text-xl font-medium">Price Details</h1>
      <hr className="h-[1px] w-full border-0 bg-neutral-300" />
      <ul className="flex flex-col items-center justify-between gap-3 p-4 text-neutral-600">
        {Object.values(myCart).map((product) => (
          <li
            className="flex flex-row items-start gap-1 w-full"
            key={`pricing-product-list-item-${product.id}`}
          >
            <h3 className="text-left w-full max-w-[75%] text-sm md:text-lg font-medium ">
              {product.title}
            </h3>

            <p className="text-right w-full max-w-[25%] text-sm md:text-lg font-medium">
              $ {product.price} * <span>{product.quantity}</span>
            </p>
          </li>
        ))}

        {Object.values(myCart).length > 0 && (
          <>
            <li className="flex flex-row items-start gap-1 w-full">
              <h3 className="text-left w-full max-w-[75%] text-sm md:text-lg font-medium ">
                Shipping
              </h3>

              <p className="text-right w-full max-w-[25%] text-sm md:text-lg font-medium">
                <span className="cursor-default line-through">$ 20</span>
                <span className="cursor-default text-lime-700"> FREE</span>
              </p>
            </li>
            <li className="flex flex-row items-start gap-1 w-full">
              <h3 className="text-left w-full max-w-[50%] text-sm md:text-lg font-medium ">
                Payment Mode
              </h3>

              <p className="text-right w-full max-w-[50%] text-sm md:text-lg font-medium">
                <span className="cursor-default text-lime-700">
                  Cash On Delivery (COD)
                </span>
              </p>
            </li>
          </>
        )}
      </ul>
      <hr className="h-[1px] w-full border-0 bg-neutral-300" />
      <div className="flex flex-row items-start gap-1 w-full p-4">
        <h3 className="w-full max-w-[50%] text-lg md:text-xl font-medium ">
          Total Amount:-
        </h3>

        <p className="w-full max-w-[50%] text-right text-lg md:text-xl font-medium">
          {totalPrice.toFixed(2)} $
        </p>
      </div>
      <hr className="h-[1px] w-full border-0 bg-neutral-300" />
      <PlaceOrderModal />
    </>
  );
};

export default Pricing;
