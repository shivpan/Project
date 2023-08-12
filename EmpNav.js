import React from 'react';
import { Navbar, Container, Nav} from "react-bootstrap"
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


export const EmpNav = () => {
    const[activeLink, setActiveLink]=useState('search');
    const[scrolled,setScrolled]=useState(false);

    useEffect(()=>{
        const onScroll = () => {
            if (window.scrollY>50){
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar bg="#0D1F25" expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container className="NavBar">
                <Navbar.Brand href="#about">
                    {/* <img className='logo img-fluid' src={logo} alt="logo" /> */}
                    <h1>HIRE-UP</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon' />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="emp-search" className={activeLink === 'emp-search' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('emp-search')}>Search</Nav.Link>
                        <Nav.Link href="emp-home" className={activeLink === 'emp-home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('emp-home')}>Home</Nav.Link>
                        <Nav.Link href="/" className={activeLink === 'logout' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('logout')}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
