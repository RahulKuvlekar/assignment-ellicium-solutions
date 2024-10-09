import { Filter } from "lucide-react";
import Filters from "./Filters";
import { Button } from "../button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const MobileFilterSidebar = () => {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="w-full">
            <Filter />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <aside className="flex flex-col gap-8 p-4 overflow-auto custom-scrollbar">
            <SheetClose asChild>
              <Button className="w-full" variant="outline">
                Clear All Filters
              </Button>
            </SheetClose>
            <Filters />
          </aside>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileFilterSidebar;
