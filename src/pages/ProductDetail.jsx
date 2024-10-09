import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const json = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};
const ProductDetail = () => {
  return (
    <div className="flex flex-row items-center justify-center h-full">
      <div className="max-w-screen-xl flex flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4">
          <img
            className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px]"
            src={json.image}
            alt={json.title}
          />
        </div>
        <div className="flex flex-col items-center md:items-start justify-center w-full max-w-[450px] md:w-1/2 p-4 gap-4">
          <h1 className="text-center md:text-left text-3xl font-medium">
            {json.title}
          </h1>
          <p className="text-center md:text-left text-lg">{json.description}</p>
          <p className="text-center md:text-left text-4xl">${json.price}</p>
          <div className="flex flex-col gap-4">
            <div className="w-full flex flex-row gap-2 items-center">
              <h3 className="font-medium ">Quantity :- </h3>
              <Select>
                <SelectTrigger className="w-[125px]" defaultValue={1}>
                  <SelectValue placeholder={1} />
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
              <Button>Add to Cart</Button>
              <Button variant="outline">Add to Wishlist</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
