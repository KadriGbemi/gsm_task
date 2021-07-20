import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { handleCreateTask } from "../api/request";

const handleSubmit = async (e, setAddress, setLoading) => {
  e.preventDefault();
  setLoading(true);
  const formData = new FormData(e.target);
  const address = formData.get("address");
  if (address) {
    await handleCreateTask(address, setAddress, setLoading);
  }
};
function MapForm({ setAddress }) {
  const [isLoading, setLoading] = useState(false);

  return (
    <Form onSubmit={(e) => handleSubmit(e, setAddress, setLoading)}>
      <Form.Group className="mb-3" controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" name="address" />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? "Loading…" : "Save a task"}
      </Button>
    </Form>
  );
}

export default MapForm;
