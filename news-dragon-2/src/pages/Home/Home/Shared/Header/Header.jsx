import React from 'react';
import logo from '../../../../../assets/logo.png'
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import moment from 'moment';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <div className='text-center py-4'>
                <Image src={logo} fluid />
                <h5 className='text-secondary mt-2 fw-normal'>Journalism Without Fear or Favour</h5>
                <h5 className='text-secondary'>{moment().format("dddd, MMMM D, YYYY")}</h5>
            </div>
            <div className='p-2 d-flex' style={{ background: '#F3F3F3' }}>
                <Button className='rounded-0' variant='danger'>Latest</Button>
                <Marquee speed={50}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" className='text-secondary fw-normal mb-4 mt-3 fs-5 py-3 px-2'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                    </Nav>
                    <Nav>
                        <Link className='text-decoration-none text-secondary'>Profile</Link>
                        <Link className='ms-3 text-decoration-none btn btn-dark text-light text-secondary' to='/login'>Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;