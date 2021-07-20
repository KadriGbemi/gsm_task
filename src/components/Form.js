import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { handleCreateTask } from "../api/request";

const handleSubmit = async (e, setLocation) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const address = formData.get("address");
  if (address) {
   await handleCreateTask(address, setLocation);
  }
};
function MapForm({ setLocation }) {
  return (
    <Form onSubmit={(e) => handleSubmit(e, setLocation)}>
      <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" name="address" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save a task
      </Button>
    </Form>
  );
}

export default MapForm;
