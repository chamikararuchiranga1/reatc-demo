import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function NavigationBar () {
    return(
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React Demo</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link><Link className='link' to='/home'>Home</Link></Nav.Link>
                    <Nav.Link><Link  className='link' to='/dashboard'>Dashboard</Link></Nav.Link>
                    <Nav.Link><Link  className='link' to='/hooks'>Hooks</Link></Nav.Link>
                    <Nav.Link><Link  className='link' to='/fetch'>Fetch</Link></Nav.Link>
                    <Nav.Link><Link  className='link' to='/todo'>Todo</Link></Nav.Link>
                    <Nav.Link><Link  className='link' to='/axios'>Axios</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;