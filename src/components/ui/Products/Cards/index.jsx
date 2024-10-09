import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircleHeart } from "lucide-react";
import { Link } from "react-router-dom";
import VerticalProductCard from "./VerticalCard";

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

  if (variant === "cart") {
    return <VerticalProductCard {...props} />;
  }

  return (
    <Card className="w-[260px] flex flex-col items-center relative justify-self-center md:justify-self-start">
      <CardHeader>
        <Link to="/products/details/1">
          <img
            className="w-[150px] h-[200px] object-center object-cover"
            src={image ?? FALLBACK_IMAGE_URL}
            alt={title}
          />
        </Link>
        {variant === "default" && (
          <Button variant="iconButton" className="absolute top-0 right-0">
            {true ? (
              <MessageCircleHeart className="text-red-400" />
            ) : (
              <Heart className="text-neutral-600" />
            )}
          </Button>
        )}
      </CardHeader>
      <CardContent className="p-3">
        <CardTitle className="mb-2 font-medium line-clamp-2">{title}</CardTitle>
        <CardDescription className="font-medium  line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="px-3 w-full flex flex-col gap-3">
        <span className="flex  items-center justify-between w-full">
          <h5 className="text-md text-neutral-800 font-medium">{category}</h5>
          <h4 className="text-2xl font-medium text-neutral-800">${price}</h4>
        </span>
        {variant === "default" && (
          <Button className="w-full">Add to cart</Button>
        )}
        {variant === "wishlist" && (
          <Button className="w-full" variant="secondary">
            Remove from cart
          </Button>
        )}
        {variant === "wishlist" && (
          <Button className="w-full" variant="default">
            Move to cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
