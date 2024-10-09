import { Button } from "../button";

const Pricing = () => {
  return (
    <>
      <h1 className="py-4 text-xl font-medium">Price Details</h1>
      <hr className="h-[1px] w-full border-0 bg-neutral-300" />
      <ul className="flex flex-col items-center justify-between gap-3 p-4 text-neutral-600">
        <li className="flex flex-row items-start gap-1 w-full">
          <h3 className="text-left w-full max-w-[75%] text-lg font-medium ">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h3>

          <p className="text-right w-full max-w-[25%] text-lg font-medium">
            $ 100 * <span>5</span>
          </p>
        </li>

        <li className="flex flex-row items-start gap-1 w-full">
          <h3 className="text-left w-full max-w-[75%] text-lg font-medium ">
            Shipping
          </h3>

          <p className="text-right w-full max-w-[25%] text-lg font-medium">
            <span className="cursor-default line-through">$ 20</span>
            <span className="cursor-default text-lime-700"> FREE</span>
          </p>
        </li>
      </ul>
      <hr className="h-[1px] w-full border-0 bg-neutral-300" />
      <div className="flex flex-row items-start gap-1 w-full p-4">
        <h3 className="w-full max-w-[75%] text-xl font-medium ">
          Total Amount:-
        </h3>

        <p className="w-full max-w-[25%] text-lg font-medium">1000$</p>
      </div>
      <hr className="h-[1px] w-full border-0 bg-neutral-300" />
      <Button variant="success" className="m-4">
        Place Order
      </Button>
    </>
  );
};

export default Pricing;
