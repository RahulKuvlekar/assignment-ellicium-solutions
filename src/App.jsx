import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-center p-4 bg-background text-foreground">
      <h1 className="text-3xl font-bold text-center">Ecommerce Application</h1>
      <div className="text-center">
        <Button variant="default">Click me</Button>
      </div>
    </div>
  );
}

export default App;
