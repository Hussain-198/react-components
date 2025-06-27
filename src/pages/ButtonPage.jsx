import Button from "../components/Button";
import {Link} from "react-router-dom"

function ButtonPage() {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center gap-3 h-screen">
      <div className="flex justify-center items-center gap-4">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
        <Button variant="success">Save</Button>
      </div>
      <div>
        <Link to="/">
        <Button variant="ghost">Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default ButtonPage;
