import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import './thestyle.css'

export default function NavbarComponent() {
  return (
    <Navbar  id="thenav">
      <Navbar.Brand as={Link} to="/" >
       Tiger Cloud
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user">
          Mon compte
      </Nav.Link>
       
      </Nav>
    </Navbar>
  )
}
