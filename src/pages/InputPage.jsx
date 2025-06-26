import Input from "../components/Inputs";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function InputPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <Input
        id="name"
        label="Username"
        type="text"
        placeholder="Enter your name"
      />
      <Input
        id="password"
        type="password"
        label="Password"
        placeholder="Enter the Password"
      />
      <Input
        id="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
      />
      <Link to="/">
        <Button variant="ghost">Home</Button>
      </Link>
    </div>
  );
}

export default InputPage;
