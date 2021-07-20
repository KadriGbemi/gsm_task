import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target)
  const address = formData.get('address')
  console.log("Address is submitted", address);
};
function MapForm() {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" name="address"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
}

export default MapForm;
