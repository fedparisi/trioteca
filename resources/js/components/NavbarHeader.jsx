import React from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarHeader = () => {
    return (
        <Navbar
            collapseOnSelect
            bg="dark"
            data-bs-theme="dark"
            expand="md"
            className="bg-body-tertiary"
        >
            <Container>
                <Navbar.Brand>
                    <NavLink to="/" className="navbar-brand">
                        Trioteca
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <NavLink
                                to="/appraisal-request"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active" : ""}`
                                }
                            >
                                Solicitudes de tasación
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarHeader;
