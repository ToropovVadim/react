import React, {Component} from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from './logo192.png';


class Header extends Component {
    render() {
        return (
            <div>
            <Navbar  collapseOnSelect expand = 'md' fixed="top" bg='dark' variant='dark' >
                <Container>
                    <Navbar.Brand href='/'>
                        <img src={logo}
                             height='30'
                             width='30'
                             className='d-inline-block align-top'
                             alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls = 'responsive-navbar-nav' />
                    <Navbar.Collapse id = 'responsive-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/about'>About</Nav.Link>
                            <Nav.Link href='/contacts'>Contacts</Nav.Link>
                            <Nav.Link href='/blog'>Blog</Nav.Link>
                            <Nav.Link href='/NewProject'>NewProject</Nav.Link>
                            <Nav.Link href='/Resume'>Resume</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            </div>
        )
    }
}

export default Header;