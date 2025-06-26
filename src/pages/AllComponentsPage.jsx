import Button from "../components/Button";
import Input from "../components/Inputs";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/Card";
import { useState } from "react";

function AllComponentsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <Button variant="outline" onClick={() => setModalOpen(true)}>
        Open Form
      </Button>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        className="p-8"
      >
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Login form</CardTitle>
              <CardDescription>
                Please enter your email and password to login
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-3">
                  <Input
                    type="email"
                    id="card-email"
                    label="Email"
                    placeholder="you@example.com"
                    required
                  />
                  <Input
                    type="password"
                    id="card-password"
                    label="Password"
                    placeholder="Enter the password"
                    required
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button
                variant="success"
                onClick={() => {
                  setModalOpen(false);
                  setSuccessModalOpen(true);
                }}
              >
                Login
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Modal>
      <Modal
        open={successModalOpen}
        onClose={() => {
          setSuccessModalOpen(false);
          setModalOpen(false);
        }}
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Login successful</h2>
          <p>Welcome Back</p>
          <Button
            onClick={() => {
              setSuccessModalOpen(false);
              setModalOpen(false);
            }}
          >
            Close
          </Button>
        </div>
      </Modal>
      <div>
        <Link to="/">
          <Button variant="ghost">Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default AllComponentsPage;
