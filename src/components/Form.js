import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { handleCreateTask } from "../api/request";

const handleSubmit = (e, setLocation) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const address = formData.get("address");
  console.log("Address is submitted", address);
  if (address) {
    handleCreateTask(address);
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
