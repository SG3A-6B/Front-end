import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function ProductNavbar({ url }) {
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


    return (
        <Navbar className="navbar" expand="lg">
            <Container className="navContainer">
                <NavDropdown title="Tuotteet" id="basic-nav-dropdown">
                    {categories.map(category => (
                        <NavDropdown.Item href={"/products/" + category.id} key={category.id}>{category.name}</NavDropdown.Item>
                    ))}
                </NavDropdown>
                <Navbar.Brand href="">Retkireppu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="">Info</Nav.Link>
                        <Nav.Link className="info" href="">Ostoskori</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}