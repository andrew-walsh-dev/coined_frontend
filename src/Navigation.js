import { Navbar, Container, Nav } from "react-bootstrap"
import logo from './images/Coined.svg';
import Vivus from 'vivus';
import { useEffect } from 'react';
import './Navigation.css';

export default function Navigation() {
    
    const drawLogo = () => {
        new Vivus('logo', {
            type: 'sync',
            duration: 300,
            animTimingFunction: Vivus.EASE_IN,
            file: logo,
            start: 'autostart'
          })
        }

    useEffect(drawLogo);
    
    return (
        <Navbar bg="dark" variant="dark" className='mb-5'>
            <Container>
            <Navbar.Brand href="#home"><svg id='logo'>
                <use xlinkHref={logo}></use>
            </svg></Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#login" id='login'>Login</Nav.Link>
            <Nav.Link href="#register" id='register'>Register</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    );
}