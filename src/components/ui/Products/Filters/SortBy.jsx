import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortByFilter } from "@/utils/Data/filters";
const SortBy = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]" defaultValue={SortByFilter[0].value}>
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
