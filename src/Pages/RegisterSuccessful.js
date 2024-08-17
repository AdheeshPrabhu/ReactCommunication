import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const RegistrationSuccess = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h3>Registration Successful</h3>
          <br />
          <h3>Thank you for your registration</h3>
          <br />
          <Button variant="primary" href="/">
            Click to return to home page
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationSuccess;
