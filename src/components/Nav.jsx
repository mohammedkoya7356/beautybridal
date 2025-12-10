import React from "react";
import { Navbar, Nav as BSNav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav = () => {
  return (
    <Navbar expand="lg" bg="white" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center" style={{ gap: "10px" }}>
          <img
            src="/src/assets/Gemini_Generated_Image_ppimjdppimjdppim.png"
            alt="Logo"
            width="45"
            height="45"
          />
          <span className="fw-bold">Beauty Bridal</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <BSNav className="ms-auto">
            <BSNav.Link href="/">Home</BSNav.Link>
            <BSNav.Link href="/about">About</BSNav.Link>
            <BSNav.Link href="/gallery">Gallery</BSNav.Link>
            <BSNav.Link href="/contact">Contact</BSNav.Link>
          </BSNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;

