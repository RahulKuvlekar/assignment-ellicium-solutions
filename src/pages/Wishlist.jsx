import ProductCard from "@/components/ui/Products/Cards";

const Wishlist = () => {
  return (
    <div className="p-4">
      <h1 className="py-4 text-2xl font-medium text-center md:text-left">
        My Wishlist
      </h1>
      <div className="grid grid-cols-1 items-center auto-rows-max gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-center md:justify-start">
        <ProductCard variant="wishlist" className="md:mx-auto" />
        <ProductCard variant="wishlist" className="md:mx-auto" />
        <ProductCard variant="wishlist" className="md:mx-auto" />
        <ProductCard variant="wishlist" className="md:mx-auto" />
      </div>
    </div>
  );
};

export default Wishlist;
