import { Button } from "@/components/ui/button";
import ErrorMessage from "@/components/ui/error";
import ProductDetailsLoader from "@/components/ui/Loaders/ProductDetailsLoader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GET_ALL_PRODUCT_DETAILS } from "@/constants/constant";
import useStore from "@/hooks/use-store";
import { useToast } from "@/hooks/use-toast";
import {
  dispatchAddProductTowishlist,
  dispatchAddToCart,
  dispatchRemoveProductFromWishlist,
  dispatchUpdateProductQuantity,
} from "@/utils/products";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const { productState, productDispatch } = useStore();
  const { myCart, myWishlist } = productState;
  const [productDetails, setProductDetails] = useState({});
  const [status, setStatus] = useState("IDLE");
  const [quantity, setQuantity] = useState(productDetails?.quantity);

  const { toast, dismiss } = useToast();

  const isPresentInCart = useMemo(
    () => !!myCart[productId],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Object.keys(myCart), productId]
  );

  const isPresentInWishlist = useMemo(
    () => !!myWishlist[productId],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Object.keys(myWishlist), productId]
  );

  const removeToast = (id) => {
    setTimeout(() => {
      dismiss(id);
    }, 1000);
  };

  const addToCartHandler = () => {
    productDispatch(
      dispatchAddToCart({ ...productDetails, quantity: quantity })
    );
    const { id } = toast({
      title: "Success ✅",
      description: "Product added to cart",
      variant: "success",
      position: "top-right",
    });
    removeToast(id);
  };

  const addToWishlistHandler = () => {
    productDispatch(dispatchAddProductTowishlist(productDetails));
    const { id } = toast({
      title: "Success ✅",
      description: "Product added to wishlist",
      variant: "success",
      position: "top-right",
    });
    removeToast(id);
  };

  const removeFromWishlistHandler = () => {
    productDispatch(dispatchRemoveProductFromWishlist(productId));
    const { id: toastId } = toast({
      title: "Success ✅",
      description: "Product removed from wishlist",
      variant: "destructive",
      position: "top-right",
    });
    removeToast(toastId);
  };

  useEffect(() => {
    (async () => {
      try {
        setStatus("LOADING");
        const response = await fetch(GET_ALL_PRODUCT_DETAILS(productId));
        if (response.ok) {
          const details = await response.json();
          setProductDetails({
            ...details,
            quantity: myCart[productId]?.quantity || 1,
          });
          setQuantity(myCart[productId]?.quantity || 1);
          setStatus("SUCCESS");
        }
      } catch (err) {
        setStatus("ERROR");
        console.log(err);
      }
    })();
    return () => {
      setProductDetails({});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return (
    <div className="flex flex-row items-center justify-center">
      {(() => {
        if (status === "LOADING") {
          return <ProductDetailsLoader />;
        } else if (status === "ERROR") {
          return (
            <ErrorMessage message="Failed to fetch details. Something went wrong. Please try again after some time." />
          );
        } else if (status === "SUCCESS" && productDetails) {
          return (
            <div className="max-w-screen-xl flex flex-col md:flex-row">
              <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4">
                <img
                  className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px]"
                  src={productDetails.image}
                  alt={productDetails.title}
                />
              </div>
              <div className="flex flex-col items-center md:items-start justify-center w-full max-w-[450px] md:w-1/2 p-4 gap-4">
                <h1 className="text-center md:text-left text-3xl font-medium">
                  {productDetails.title}
                </h1>
                <p className="text-center md:text-left text-lg">
                  {productDetails.description}
                </p>
                <p className="text-center md:text-left text-4xl">
                  ${productDetails.price}
                </p>
                <div className="flex flex-col gap-4">
                  <div className="w-full flex flex-row gap-2 items-center">
                    <h3 className="font-medium ">Quantity :- </h3>
                    <Select
                      defaultValue={quantity}
                      value={quantity}
                      onValueChange={(value) => {
                        if (isPresentInCart) {
                          productDispatch(
                            dispatchUpdateProductQuantity({
                              id: productId,
                              quantity: value,
                            })
                          );
                        }
                        setQuantity(value);
                      }}
                    >
                      <SelectTrigger className="w-[125px]">
                        <SelectValue placeholder={quantity} />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(10).keys()].map((i) => (
                          <SelectItem key={i + 1} value={i + 1}>
                            {i + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-full flex flex-row gap-2 items-center">
                    {isPresentInCart ? (
                      <Link to="/cart" className="w-full">
                        <Button className="w-full" variant="success">
                          Go to Cart
                        </Button>
                      </Link>
                    ) : (
                      <Button className="w-full" onClick={addToCartHandler}>
                        Add to cart
                      </Button>
                    )}
                    {
                      <Button
                        className="w-full"
                        variant={
                          isPresentInWishlist ? "destructive" : "outline"
                        }
                        onClick={
                          isPresentInWishlist
                            ? removeFromWishlistHandler
                            : addToWishlistHandler
                        }
                      >
                        {isPresentInWishlist
                          ? "Remove from wishlist"
                          : "Add to wishlist"}
                      </Button>
                    }
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })()}
    </div>
  );
};
export default ProductDetail;
