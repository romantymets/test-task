import React from "react"
import { GiWineBottle } from "@react-icons/all-files/gi/GiWineBottle";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { Navbar, Container } from 'react-bootstrap';
import { Link } from "gatsby"
import { footer, brandLink } from "../pages/index.module.css"

export default function Layout({ children }) {
  return (
    <div style={{ "background": " #f8f9fa" }}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className={brandLink}>
          <Navbar.Brand>
            <GiWineBottle style={{ "font-size": "5rem" }}/> WINE CARD
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>

      <div>
        {children}
      </div>
      <footer className={footer}>
        <AiFillFacebook style={{ "font-size": "2rem", "margin-right": "15px" }}/>
        <FaInstagramSquare style={{ "font-size": "2rem", "margin-right": "15px" }}/>
        <FcGoogle style={{ "font-size": "2rem" }}/>
      </footer>
    </div>
  )
}