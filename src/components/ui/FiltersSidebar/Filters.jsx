import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import useStore from "@/hooks/use-store";
import {
  dispatchUpdateCategoryFilter,
  dispatchUpdatePriceFilter,
} from "@/utils/products";

const Filters = () => {
  const { productState, productDispatch } = useStore();
  const { price, categories } = productState;

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    productDispatch(
      dispatchUpdateCategoryFilter({ [category]: !categories[category] })
    );
  };

  const handlePriceChange = (value) => {
    productDispatch(dispatchUpdatePriceFilter(value));
  };

  return (
    <>
      <section className="flex flex-col gap-2">
        <Button
          className="mb-4 hidden md:block"
          variant="outline"
          onClick={() =>
            productDispatch({
              type: "CLEAR_ALL_FILTERS",
            })
          }
        >
          Clear All Filters
        </Button>
        {Object.keys(categories).length > 0 && (
          <h2 className="text-lg md:text-md font-medium">Categories</h2>
        )}
        <fieldset className="flex flex-col gap-2">
          {Object.keys(categories).map((name, index) => (
            <div key={`categories-filter-${index}`} className="cursor-pointer">
              <input
                id={name}
                type="checkbox"
                checked={categories[name]}
                onChange={handleCategoryChange}
                value={name}
              />
              <label htmlFor={name} className="ml-2 cursor-pointer">
                {name}
              </label>
            </div>
          ))}
        </fieldset>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-lg md:text-md font-medium ">Price</h2>
        <Slider
          min={0}
          max={1000}
          step={100}
          value={[price]}
          onValueChange={handlePriceChange}
        />
        <div className="flex flex-row justify-between items-center">
          <Button variant="outline" size="icon" disabled>
            0
          </Button>
          {price > 0 && (
            <Button variant="outline" size="icon">
              {price} $
            </Button>
          )}
          <Button variant="outline" size="icon" disabled>
            1000
          </Button>
        </div>
      </section>
    </>
  );
};

export default Filters;
