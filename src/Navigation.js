import { Navbar, Container, Nav } from "react-bootstrap"
import logo from './images/Coined.svg';
import Vivus from 'vivus';
import { useEffect } from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

export default function Navigation(props) {
    
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
        <Navbar bg="dark" variant="dark" className=''>
            <Container>
            <Link to='/' style={{ textDecoration: 'none' }}>
            <Navbar.Brand href="#home"><svg id='logo'>
                <use xlinkHref={logo}></use>
            </svg></Navbar.Brand>
            </Link>
            <Nav className="me-auto">
            
            { props.user == null && <Link to='/login' className='nav-link'>Login</Link> }
            { props.user == null && <Link to='/register' className='nav-link'>Register</Link> }

            { props.user != null && <Nav.Link id='logout' onClick={() => props.setUser(null)}>Logout</Nav.Link> }
            { props.user != null && <Link to='/profile' style={{ textDecoration: 'none' }}><Nav.Link id='profile'>Profile</Nav.Link></Link> }
            
            </Nav>
            </Container>
        </Navbar>
    );
}