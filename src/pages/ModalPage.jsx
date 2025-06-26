import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

function ModalPage() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-3">
      <Button variant="outline" onClick={() => setModalOpen(true)}>
        Open Modal
      </Button>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">This is the Modal Pop up</h2>
          <p>This will be the message of the modal</p>
          <Button onClick={() => setModalOpen(false)}>Close</Button>
        </div>
      </Modal>
      <Link to="/">
        <Button variant="ghost">Home</Button>
      </Link>
    </div>
  );
}

export default ModalPage;
