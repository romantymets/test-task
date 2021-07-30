import React from "react"
import { GiWineBottle } from "@react-icons/all-files/gi/GiWineBottle";
import { Navbar, Container } from 'react-bootstrap';
import {link} from "../pages/index.module.css"
export default function Layout({ children }) {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
         <GiWineBottle style={{"font-size": "5rem"}}/>  Wine cart
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div>
        {children}
      </div>
    </div>
  )
}