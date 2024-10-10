import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import errorSvg from "../../assets/error.svg";

const ErrorMessage = ({
  message = "Something went wrong. Please try again after some time.",
}) => {
  return (
    <Card className="bg-error-foreground w-[85%] max-w-[500px] my-10 mx-auto">
      <CardHeader>
        <CardTitle className="text-error">
          <img
            src={errorSvg}
            alt="Error"
            className="h-[250px] w-[250px] mx-auto"
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="text-error-foreground">
        <h3 className="text-xl text-center text-muted-foreground">{message}</h3>
      </CardContent>
    </Card>
  );
};

export default ErrorMessage;
