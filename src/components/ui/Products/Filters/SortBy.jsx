import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useStore from "@/hooks/use-store";
import { SortByFilter } from "@/utils/Data/filters";
import { dispatchUpdateSortByFilter } from "@/utils/products";
const SortBy = () => {
  const { productState, productDispatch } = useStore();
  const { sortBy } = productState;

  return (
    <Select
      defaultValue={sortBy}
      value={sortBy}
      onValueChange={(value) =>
        productDispatch(dispatchUpdateSortByFilter(value))
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={SortByFilter[0].name} />
      </SelectTrigger>
      <SelectContent>
        {SortByFilter.map((item) => (
          <SelectItem key={item.id} value={item.value}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SortBy;
