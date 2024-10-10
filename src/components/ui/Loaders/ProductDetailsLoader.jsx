import { Skeleton } from "../skeleton";

const ProductDetailsLoader = () => {
  return (
    <div className="max-w-screen-xl flex flex-col md:flex-row gap-4">
      <Skeleton className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px]" />
      <Skeleton className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px]" />
    </div>
  );
};

export default ProductDetailsLoader;
