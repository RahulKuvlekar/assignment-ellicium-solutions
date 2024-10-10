import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import VerticalProductCard from "./VerticalCard";
import useStore from "@/hooks/use-store";
import { useMemo } from "react";
import {
  dispatchAddProductTowishlist,
  dispatchAddToCart,
  dispatchRemoveProductFromCart,
  dispatchRemoveProductFromWishlist,
} from "@/utils/products";
import { useToast } from "@/hooks/use-toast";

const FALLBACK_IMAGE_URL =
  "https://dummyimage.com/150x200/b8b8b8/ffffff&text=Product+Image";

const ProductCard = (props) => {
  const {
    id,
    title,
    price,
    description,
    category,
    image,
    variant = "default",
  } = props;

  const { productState, productDispatch } = useStore();
  const { myCart, myWishlist } = productState;
  const { toast, dismiss } = useToast();

  const isPresentInCart = useMemo(
    () => !!myCart[id],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Object.keys(myCart), id]
  );

  const isPresentInWishlist = useMemo(
    () => !!myWishlist[id],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Object.keys(myWishlist), id]
  );

  const removeToast = (id) => {
    setTimeout(() => {
      dismiss(id);
    }, 1000);
  };

  const addToCartHandler = () => {
    productDispatch(dispatchAddToCart({ ...props, quantity: 1 }));
    const { id } = toast({
      title: "Success ✅",
      description: "Product added to cart",
      variant: "success",
      position: "top-right",
    });
    removeToast(id);
  };

  const removeFromCartHandler = () => {
    productDispatch(dispatchRemoveProductFromCart(id));
    const { id: toastId } = toast({
      title: "Success ✅",
      description: "Product removed from cart",
      variant: "destructive",
      position: "top-right",
    });
    removeToast(toastId);
  };

  const addToWishlistHandler = () => {
    productDispatch(dispatchAddProductTowishlist({ ...props, quantity: 1 }));
    const { id } = toast({
      title: "Success ✅",
      description: "Product added to wishlist",
      variant: "success",
      position: "top-right",
    });
    removeToast(id);
  };

  const removeFromWishlistHandler = () => {
    productDispatch(dispatchRemoveProductFromWishlist(id));
    const { id: toastId } = toast({
      title: "Success ✅",
      description: "Product removed from wishlist",
      variant: "destructive",
      position: "top-right",
    });
    removeToast(toastId);
  };

  const moveToCartHandler = () => {
    productDispatch(dispatchAddToCart({ ...props, quantity: 1 }));
    productDispatch(dispatchRemoveProductFromWishlist(id));
    const { id: toastId } = toast({
      title: "Success ✅",
      description: "Product moved to cart",
      variant: "success",
      position: "top-right",
    });
    removeToast(toastId);
  };

  const moveToWishlistHandler = (qty = 1) => {
    productDispatch(dispatchAddProductTowishlist({ ...props, quantity: qty }));
    productDispatch(dispatchRemoveProductFromCart(id));
    const { id: toastId } = toast({
      title: "Success ✅",
      description: "Product moved to wishlist",
      variant: "success",
      position: "top-right",
    });
    removeToast(toastId);
  };

  if (variant === "cart") {
    return (
      <VerticalProductCard
        {...props}
        variant="cart"
        removeFromCartHandler={removeFromCartHandler}
        moveToWishlistHandler={moveToWishlistHandler}
      />
    );
  }

  return (
    <Card className="w-[260px] flex flex-col items-center relative justify-self-center md:justify-self-start">
      <CardHeader>
        <Link to="/products/details/1">
          <img
            className="w-[150px] h-[200px] object-center object-contain"
            src={image ?? FALLBACK_IMAGE_URL}
            alt={title}
          />
        </Link>
        <Button variant="iconButton" className="absolute top-0 right-0">
          <Heart
            className={
              isPresentInWishlist ? "text-red-400" : "text-neutral-600"
            }
            fill={isPresentInWishlist ? "#f87171" : "none"}
            onClick={
              isPresentInWishlist
                ? removeFromWishlistHandler
                : addToWishlistHandler
            }
          />
        </Button>
      </CardHeader>
      <CardContent className="p-3 w-full">
        <Link
          to={`/products/details/${id}`}
          className="w-full hover:underline underline-offset-2"
        >
          <CardTitle className="mb-2 text-xl font-medium line-clamp-2 min-h-14">
            {title}
          </CardTitle>
        </Link>
        <CardDescription className="font-medium  line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="px-3 w-full flex flex-col gap-3">
        <span className="flex  items-center justify-between w-full">
          <h5 className="text-md text-neutral-800 font-medium">{category}</h5>
          <h4 className="text-2xl font-medium text-neutral-800">${price}</h4>
        </span>
        {variant === "default" &&
          (isPresentInCart ? (
            <Link to="/cart" className="w-full">
              <Button className="w-full" variant="success">
                Go to Cart
              </Button>
            </Link>
          ) : (
            <Button className="w-full" onClick={addToCartHandler}>
              Add to cart
            </Button>
          ))}
        {variant === "wishlist" &&
          (isPresentInCart ? (
            <Link to="/cart" className="w-full">
              <Button className="w-full" variant="success">
                Go to Cart
              </Button>
            </Link>
          ) : (
            <Button
              className="w-full"
              variant="default"
              onClick={moveToCartHandler}
            >
              Move to cart
            </Button>
          ))}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
