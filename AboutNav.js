import React from 'react';
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


export const AboutNav = () => {
    const[activeLink, setActiveLink]=useState("about");
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
        console.log("Active Link = ",value)
        setActiveLink(value);
    }

    return(
        <Navbar bg="#0D1F25" expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container className="NavBar">
                <Navbar.Brand>
                    {/* <img className='logo img-fluid' src={logo} alt="logo" /> */}
                    <h1 >HIRE-UP</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon' />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/about" className={activeLink === '/about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                        <Nav.Link href="/browse-talent" className={activeLink === 'browse-talent' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('browse-talent')}>Find Talent</Nav.Link>
                        <Nav.Link href="/sign-up" className={activeLink === 'sign-up' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('sign-up')}>Find Work</Nav.Link>
                        {/* <Nav.Link href="./sign-in" className={activeLink === 'login' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('login')}>Login/Sign-Up</Nav.Link> */}
                        <NavDropdown className='navbar-dropdown' title={
                                                                            <span className="dropdown-text my-auto">Login</span>
                                                                        } id="basic-nav-dropdown">
                            <NavDropdown.Item href="./sign-in">
                                Sign In as Freelancer
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="./emp-sign-in">
                            Sign In as Employer
                            </NavDropdown.Item>
                            
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
