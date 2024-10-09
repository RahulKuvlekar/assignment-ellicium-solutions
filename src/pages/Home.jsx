import FiltersSidebar from "@/components/ui/FiltersSidebar";
import MobileFilterSidebar from "@/components/ui/FiltersSidebar/MobileFilterSidebar";
import ProductCard from "@/components/ui/Products/Cards";
import SortBy from "@/components/ui/Products/Filters/SortBy";

const Home = () => {
  return (
    <div className="flex flex-row">
      <FiltersSidebar />
      <div className="w-full overflow-auto custom-scrollbar">
        <div className="flex flex-row items-center justify-between p-4">
          <h1 className="text-2xl font-medium hidden md:block">
            Products - 100
          </h1>
          <MobileFilterSidebar />
          <SortBy />
        </div>
        <div className="grid grid-cols-1 auto-rows-max gap-4 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-3 lg:px-4 xl:grid-cols-4 2xl:grid-cols-5 justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
