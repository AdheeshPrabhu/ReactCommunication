import React from "react";
import { Button, Container } from "react-bootstrap";
import UseCustomNavigate from "../Hooks/UseCustomNavigate";

const Welcome = () => {
  const { goToLogin, goToRegister } = UseCustomNavigate();
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to Users Module</h1>
      <div className="mt-5">
        <h3>Existing Users</h3>
        <Button
          variant="outline-dark"
          size="md"
          className="mb-3 mt-3"
          onClick={goToLogin}
        >
          Login
        </Button>
        <h3>New Users</h3>
        <Button
          variant="outline-dark"
          size="md"
          className="mb-3 mt-3"
          onClick={goToRegister}
        >
          Register
        </Button>
      </div>
    </Container>
  );
};

export default Welcome;
