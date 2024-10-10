import ErrorMessage from "@/components/ui/error";
import ProductCard from "@/components/ui/Products/Cards";
import useStore from "@/hooks/use-store";

const Wishlist = () => {
  const { productState } = useStore();
  const { myWishlist } = productState;
  return (
    <div className="p-4">
      <h1 className="py-4 text-2xl font-medium text-center md:text-left">
        My Wishlist
      </h1>
      {Object.keys(myWishlist).length > 0 ? (
        <div className="grid grid-cols-1 items-center auto-rows-max gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-center md:justify-start">
          {Object.values(myWishlist).map((item) => (
            <ProductCard key={item.id} {...item} variant="wishlist" />
          ))}
        </div>
      ) : (
        <ErrorMessage message="No items in your wishlist !!" />
      )}
    </div>
  );
};

export default Wishlist;
