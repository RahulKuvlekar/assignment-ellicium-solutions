import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const NavIconButton = ({ icon: Icon, count = 0 }) => {
  return (
    <Button variant="onlyIcon" className="relative hover:opacity-80 p-2">
      <Icon className="text-white cursor-pointer" />
      {count > 0 && (
        <Badge variant={"destructive"} className="absolute -top-1 -right-1">
          {count}
        </Badge>
      )}
    </Button>
  );
};

export default NavIconButton;
