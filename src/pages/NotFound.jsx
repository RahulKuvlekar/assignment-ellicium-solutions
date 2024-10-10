import error404 from "@/assets/error404.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center main__screen px-4">
      <img src={error404} alt="error404" className="w-72 md:w-96" />
      <h1 className="text-2xl my-4 font-bold text-center text-foreground">
        Oops! Page not found.
      </h1>
      <p className="text-lg text-muted-foreground text-center my-5">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link to="/">
        <Button
          className="bg-primary text-primary-foreground hover:bg-primary/80"
          size="lg"
        >
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
