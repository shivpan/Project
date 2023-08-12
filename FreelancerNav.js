import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap"
import { useState, useEffect } from "react";


export const FreelancerNav=()=> {
    const[activeLink, setActiveLink]=useState('');
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
                        {/* <label className="NavLabel">Welcome, {name}</label> */}
                        <Nav.Link href="./profile" className={activeLink === 'profile' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('profile')}>Profile</Nav.Link>
                        <Nav.Link href="./find-work" className={activeLink === 'find-work' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('find-work')}>Find Work</Nav.Link>
                        <Nav.Link href="./" className={activeLink === 'logout' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('logout')}>Logout</Nav.Link>
                        {/* <Nav.Link href="#login" className={activeLink === 'login' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('login')}>Login</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
// export default FreelancerNav;