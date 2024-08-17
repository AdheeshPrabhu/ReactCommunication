import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function LoginSuccessful() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <Container className="pt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <h1 className="text-center">Login Successful</h1>
          <Card variant="success" className="text-center">
            <h4>Welcome, {userInfo.name}!</h4>
            <p>Email: {userInfo.email}</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginSuccessful;
