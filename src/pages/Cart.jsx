import Pricing from "@/components/ui/Pricing/Pricing";
import ProductCard from "@/components/ui/Products/Cards";
import UserInfo from "@/components/ui/UserInfo";

const json = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

const Cart = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <h1 className="py-4 text-2xl font-medium"> My Cart</h1>
      <div className="flex flex-col md:flex-row items-start justify-center gap-4 w-full max-w-[880px]">
        <div className="w-full flex flex-col items-center border-[1px] border-neutral-300">
          <h1 className="py-4 text-xl font-medium"> Order Details</h1>
          <hr className="h-[1px] w-full border-0 bg-neutral-300" />
          <UserInfo />
          <ProductCard variant="cart" {...json} />
          <ProductCard variant="cart" {...json} />
          <ProductCard variant="cart" {...json} />
          <ProductCard variant="cart" {...json} />
        </div>
        <div className="w-full flex flex-col items-center border-[1px] border-neutral-300">
          <Pricing />
        </div>
      </div>
    </div>
  );
};

export default Cart;
