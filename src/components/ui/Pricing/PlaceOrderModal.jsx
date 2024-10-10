import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { v4 as uuid } from "uuid";
import successGif from "@/assets/success.gif";
import useStore from "@/hooks/use-store";
import { dispatchEmptyCart } from "@/utils/products";

const PlaceOrderModal = () => {
  const { productDispatch } = useStore();

  const placeOrderHandler = (open) => {
    if (!open) {
      productDispatch(dispatchEmptyCart());
    }
  };

  return (
    <Dialog onOpenChange={placeOrderHandler}>
      <DialogTrigger className="w-full max-w-[150px] my-2 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-lime-600 text-white hover:bg-lime-600/90 border border-lime-600">
        Place Order
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Congratulations 🎊 🎊 🎊 </DialogTitle>
          <img
            src={successGif}
            alt="success"
            className="mx-auto mb-4 h-[250px] w-[350px]"
          />
          <DialogDescription>
            <span className="text-lg font-medium block w-full">
              Order Placed Successfully - {new Date().toLocaleString()}
            </span>
            <span className="block w-full">Order Id :{uuid()}</span>
            <span className="block w-full">Payment Mode - COD</span>
            <span className="text-lg font-medium my-2 block w-full">
              Thank you for Shopping with us.
            </span>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PlaceOrderModal;
