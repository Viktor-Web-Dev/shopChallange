import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom'
import Nav from "react-bootstrap/Nav";

const NavbarShop = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">DUV SHOP</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink
                        className="nav-link"
                        to="/"
                        exact
                       >
                        Продукты
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        to="main"
                        exact
                       >
                        Склады
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        to="create"
                        exact
                       >
                        Добавить товар
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default NavbarShop;