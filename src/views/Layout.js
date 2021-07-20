import React, { useState } from 'react';

import Form from "../components/Form";
import Map from "../components/Map";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function Layout() {
  const [address, setAddress] = useState({});
  return (
    <Container>
      <Row>
        <Col sm={12} md={8}>
          {" "}
          <Map address={address}/>
        </Col>
        <Col sm={12} md={4}>
          <Form setAddress={setAddress}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
