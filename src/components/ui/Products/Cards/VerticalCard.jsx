import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import useStore from "@/hooks/use-store";
import { useState } from "react";
import { dispatchUpdateProductQuantity } from "@/utils/products";

const FALLBACK_IMAGE_URL =
  "https://dummyimage.com/150x200/b8b8b8/ffffff&text=Product+Image";

const VerticalProductCard = ({
  id,
  title,
  price,
  category,
  image,
  quantity,
  removeFromCartHandler = () => {},
  moveToWishlistHandler = () => {},
}) => {
  const { productDispatch } = useStore();

  const [productQty, setProductQty] = useState(quantity || 1);

  const addQuantity = () => {
    productDispatch(
      dispatchUpdateProductQuantity({ id, quantity: productQty + 1 })
    );
    setProductQty((prev) => prev + 1);
  };

  const deleteQuantity = () => {
    if (productQty === 1) {
      removeFromCartHandler();
      return;
    }
    productDispatch(
      dispatchUpdateProductQuantity({ id, quantity: productQty - 1 })
    );
    setProductQty((prev) => prev - 1);
  };

  return (
    <Card className="max-w-[360px] flex flex-row items-start gap-4 p-4 relative">
      <Link to={`/products/details/${id}`}>
        <img
          className="w-[150px] h-[150px] object-cover self-start"
          src={image ?? FALLBACK_IMAGE_URL}
          alt={title}
        />
      </Link>
      <div className="flex flex-col gap-1">
        <Link
          to={`/products/details/${id}`}
          className="w-full hover:underline underline-offset-2"
        >
          <CardTitle className="text-sm font-medium line-clamp-2 max-w-[85%]">
            {title}
          </CardTitle>
        </Link>
        <h5 className="text-xs text-neutral-600">{category}</h5>
        <h4 className="text-md font-medium text-neutral-800">${price}</h4>
        <Button
          variant="iconButton"
          className="absolute top-0 right-0 opacity-50 hover:opacity-100"
          onClick={removeFromCartHandler}
        >
          <Trash2 />
        </Button>
        {productQty > 0 && (
          <span className="text-xs text-neutral-400">
            * Maximum quatity can be 10
          </span>
        )}
        <CardFooter className="flex flex-col items-center justify-start w-full gap-4 py-2 px-0">
          <div className="flex flex-row items-center justify-between w-full gap-2">
            <Button
              className="w-full"
              size="sm"
              variant="outline"
              onClick={deleteQuantity}
            >
              <Minus />
            </Button>
            <Button className="w-full cursor-default" size="sm" variant="Ghost">
              <strong>{productQty}</strong>
            </Button>
            <Button
              className="w-full"
              size="sm"
              variant="outline"
              disabled={productQty === 10}
              onClick={addQuantity}
            >
              <Plus />
            </Button>
          </div>

          <Button
            className="w-full"
            size="sm"
            variant="default"
            onClick={() => moveToWishlistHandler(quantity)}
          >
            Move to Wishlist
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default VerticalProductCard;
