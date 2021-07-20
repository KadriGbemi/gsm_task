import React, { useState, useEffect } from "react";
import { getTaskLists } from "../api/request";

import Form from "../components/Form";
import Map from "../components/Map";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function Layout() {
  const [address, setAddress] = useState({});
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await getTaskLists();
      setTasks(response);
    }
    setInterval(() => fetchData(), 7000);
  }, [tasks]);
  return (
    <Container>
      <Row>
        <Col sm={12} md={8}>
          {" "}
          <Map address={address} tasks={tasks} />
        </Col>
        <Col sm={12} md={4}>
          <Form setAddress={setAddress} />
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
