// CustomNavbar.js
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const CustomNavbar = ({ bg, theme, brand, links }) => {
  return (
    <Navbar bg={bg} data-bs-theme={theme}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          {brand}
        </Navbar.Brand>
        <Nav className="me-auto">
          {links.map((link, index) => (
            <Nav.Item key={index}>
              <Nav.Link
                as={NavLink}
                to={link.href}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.label}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
