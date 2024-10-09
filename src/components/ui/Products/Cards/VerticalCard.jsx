import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const FALLBACK_IMAGE_URL =
  "https://dummyimage.com/150x200/b8b8b8/ffffff&text=Product+Image";

const VerticalProductCard = ({ title, price, category, image }) => {
  return (
    <Card className="max-w-[360px] flex flex-row items-start gap-4 p-4 relative">
      <Link to="/products/details/1">
        <img
          className="w-[150px] h-[150px] object-cover self-start"
          src={image ?? FALLBACK_IMAGE_URL}
          alt={title}
        />
      </Link>
      <div className="flex flex-col gap-1">
        <CardTitle className="text-sm font-medium line-clamp-2">
          {title}
        </CardTitle>
        <h5 className="text-xs text-neutral-600">{category}</h5>
        <h4 className="text-md font-medium text-neutral-800">${price}</h4>
        <Button
          variant="iconButton"
          className="absolute top-0 right-0 opacity-50 hover:opacity-100"
        >
          <Trash2 />
        </Button>
        <CardFooter className="flex flex-col items-center justify-start w-full gap-4 py-2 px-0">
          <div className="flex flex-row items-center justify-between w-full gap-2">
            <Button className="w-full" size="sm" variant="outline">
              <Plus />
            </Button>
            <Button className="w-full cursor-default" size="sm" variant="Ghost">
              <strong>10</strong>
            </Button>
            <Button className="w-full" size="sm" variant="outline">
              <Minus />
            </Button>
          </div>

          <Button className="w-full" size="sm" variant="default">
            Move to Wishlist
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default VerticalProductCard;
