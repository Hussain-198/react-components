import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/Card";
import Input from "../components/Inputs";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function CardPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Message</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-4">
              <Input
                type="name"
                id="card-username"
                label="Username"
                placeholder="Enter the username"
              />
              <Input
                type="password"
                id="card-password"
                label="password"
                placeholder="Enter the password"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Login</Button>
        </CardFooter>
      </Card>
      <div>
        <Link to="/">
          <Button variant="ghost">Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default CardPage;
