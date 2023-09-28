"use client"

import Link from "next/link";

/* ------------------------- NavBar react Bootstrap ------------------------- */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
/* -------------------------------------------------------------------------- */

/* ----------------------------- Menu principal ----------------------------- */
const NavBar1 = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand>
              <Link href="\" className="optionsNavBar1">Planificador</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link>
                    <Link href="\semanas" className="optionsNavBar1">Semanas</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link href="\menus" className="optionsNavBar1">Menús</Link>
                  </Nav.Link>
                  <NavDropdown title="Opciones" id="basic-nav-dropdown">
                      <NavDropdown.Item>
                        <Link href="\recetas" className="optionsNavBar1">Recetas</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link href="\ingredientes" className="optionsNavBar1">Ingredientes</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link href="\listas_de_compra" className="optionsNavBar1">Listas de compra</Link>
                      </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
/* -------------------------------------------------------------------------- */

export default NavBar1