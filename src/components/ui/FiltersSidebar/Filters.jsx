import { CategoryFilter } from "@/utils/Data/filters";
import React from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const Filters = () => {
  const [selectedCategories, setSelectedCategories] = React.useState({});
  const [selectedPrice, setSelectedPrice] = React.useState(0);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const handlePriceChange = (event) => {
    const price = event.target.value;
    setSelectedPrice((prev) => ({ ...prev, [price]: !prev[price] }));
  };

  return (
    <>
      <section className="flex flex-col gap-2">
        <Button className="mb-4 hidden md:block" variant="outline">
          Clear All Filters
        </Button>
        <h2 className="text-lg md:text-md font-medium">Categories</h2>
        <fieldset className="flex flex-col gap-2">
          {CategoryFilter.map(({ name, id, value }) => (
            <div key={id}>
              <input
                type="checkbox"
                // checked={false}
                // onChange={handleCategoryChange}
                value={value}
              />
              <span className="ml-2">{name}</span>
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
          //   value={selectedPrice}
          onValueChange={(value) => setSelectedPrice(value)}
        />
        <div className="flex flex-row justify-between items-center">
          <Button variant="outline" size="icon" disabled>
            0
          </Button>
          {selectedPrice > 0 && (
            <Button variant="outline" size="icon">
              {selectedPrice} $
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
