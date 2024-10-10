import { Skeleton } from "@/components/ui/skeleton";

const ProductsLoader = ({ count = 1 }) => {
  return (
    <>
      {count > 0 &&
        [...Array(count)].map((_, i) => (
          <div
            key={i}
            className="w-[260px] flex flex-col items-center relative gap-10 justify-self-center md:justify-self-start p-4 border-[1px] border-neutral-200 rounded-md"
          >
            <Skeleton className="w-[150px] h-[200px]" />
            <div className="flex flex-col gap-4">
              <Skeleton className="h-12 w-[230px]" />
              <Skeleton className="h-12 w-[230px]" />
              <Skeleton className="h-8 w-[230px]" />
              <Skeleton className="h-10 w-[230px]" />
            </div>
          </div>
        ))}
    </>
  );
};

export default ProductsLoader;
