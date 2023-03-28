import React from 'react';
import './main-nav.scss'
import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import ClickBtn from '../buttons/click-btn';
import { search_v1 } from '../../../services/utils/svg';

const MainNav = () => {

    return (
        <Navbar bg="light" expand="lg" fixed="top" id="main_nav" className='border-bottom'>
            <Container>
                <div className="d-flex pe-5 border-end">
                    <Logo />
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/" className="text-primary">Marketplace</Link>
                        <Link to="/">Resource</Link>
                        <Link to="/">About</Link>
                    </Nav>
                    <Form className="d-flex me-3">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="rounded-pill px-4"
                            aria-label="Search"
                        />
                        <div className='search'>
                            {search_v1}
                        </div>
                    </Form>
                    <ClickBtn className="me-3 mb-3">Upload</ClickBtn>
                    <ClickBtn type="outline" className="mb-3">Connect Wallet</ClickBtn>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNav;