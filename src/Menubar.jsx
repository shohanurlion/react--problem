import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menubar.css'
import log from '../src/assets/img/Finsweet white logo 1.png'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
 function Menubar() {
  return (
    <>
    <Navbar expand="lg" className="custom">
      <Container>
        <Navbar.Brand href="/"><img src={log} alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom2">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/features">Features</Link>
            <Link to="/">Pricing</Link>
            <Link to="/">FAQ</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact"><Button className='contactbtn'>contact</Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
export default Menubar;