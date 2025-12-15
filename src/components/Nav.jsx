import React from "react";
import navLogo from "../assets/Gemini_Generated_Image_ppimjdppimjdppim.png";

import { Navbar, Nav as BSNav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  return (
    <Navbar
      expand="lg"
      bg="white"
      fixed="top"
      className="shadow-sm py-2"
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center"
          style={{ gap: "10px" }}
        >
         <img
  src={navLogo}
  alt="Logo"
  width="45"
  height="45"
/>

          <span className="fw-bold">Beauty Bridal</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <BSNav className="ms-auto gap-3">
            <BSNav.Link href="#home">Home</BSNav.Link>
            <BSNav.Link href="#bookings">Bookings</BSNav.Link>
            <BSNav.Link href="#shop">Our Shop</BSNav.Link>
            <BSNav.Link href="#contact">Contact</BSNav.Link>
          </BSNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
