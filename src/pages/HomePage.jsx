import { Link } from "react-router-dom";
import Button from "../components/Button";

function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen gap-3">
      <Link to="/button">
        <Button variant="outline">Button</Button>
      </Link>
      <Link to="/input">
        <Button variant="outline">Input</Button>
      </Link>
      <Link to="card">
        <Button variant="outline">Card</Button>
      </Link>
      <Link to="/modal">
        <Button variant="outline">Modal</Button>
      </Link>
      <Link to="/all">
        <Button variant="outline">All Components</Button>
      </Link>
    </div>
  );
}
export default HomePage;
