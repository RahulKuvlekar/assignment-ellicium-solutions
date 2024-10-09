import Filters from "./Filters";

const FiltersSidebar = () => {
  return (
    <aside className="hidden md:flex flex-col gap-8 p-4 border-r-[1px] w-[250px] border-neutral-300 overflow-auto custom-scrollbar">
      <Filters />
    </aside>
  );
};

export default FiltersSidebar;
