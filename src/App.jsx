import Button from "./components/Button";
import Input from "./components/Inputs";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <div className="flex items-center gap-2">
            <Input id="email" type="email" placeholder="you@example.com" />
            <Button variant="outline" size="lg" className="hover:bg-black">
              Button
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
