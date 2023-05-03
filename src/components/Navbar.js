import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function ProductNavbar({ url, onLogout }) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        console.log(url)
        axios.get(url + 'products/getcategories.php')
            .then((response) => {
                const json = response.data
                setCategories(json)
                console.log(json)
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error)
            })
    }, [])

    function handleLogout() {
        onLogout();
    }

    return (
        <Navbar className="navbar" expand="lg">
            <Container className="navContainer">
                <NavDropdown title="Tuotteet" id="basic-nav-dropdown">
                    {categories.map(category => (
                        <NavDropdown.Item href={"/products/" + category.id} key={category.id}>{category.name}</NavDropdown.Item>
                    ))}
                </NavDropdown>
                <Navbar.Brand href="/"><img src={require("../images/logo-pieni.jpg")}/>Retkireppu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/about">Info</Nav.Link>
                        <Nav.Link className="cart" href="/order">Ostoskori</Nav.Link>
                        {localStorage.getItem('isLoggedIn') === 'true' && (
                            <NavDropdown title="Admin" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/managecategories">Hallinnoi kategorioita</NavDropdown.Item>
                                <NavDropdown.Item href="/manageproducts">Hallinnoi tuotteita</NavDropdown.Item>
                                <NavDropdown.Item href="/addadmin">Lisää admin</NavDropdown.Item>
                                <NavDropdown.Item>
                                    <span onClick={handleLogout}>Kirjaudu ulos</span>
                                </NavDropdown.Item>
                            </NavDropdown>
                        )}
                        {localStorage.getItem('isLoggedIn') === 'false' && (
                            <Nav.Link href="/login">Kirjaudu</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}