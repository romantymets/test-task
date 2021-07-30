import React from "react"
import { Link } from 'gatsby'
import { Navbar, Container } from 'react-bootstrap';
import {link} from "../pages/index.module.css"
export default function Layout({ children }) {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/" className={link}>Wine cart</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div>
        {children}
      </div>
    </div>
  )
}