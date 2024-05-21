import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import footerimg from '../../assets/img/Logo.png'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import './Bottom.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Bottom() {
  return (
    <>
    <div id="footer">
    <Container>
            <Row>
                <Col sm={12} md={6}>
                    <div className='footer_left'>
                        <img src={footerimg} alt="" className='footerlog'/>
                        <p>We are always open to discuss your project and improve your online presence.</p>
                    </div>
                    <div className='footer_bottompart d-flex'>
                        <div className='gmail'>
                            <h4>Email me at</h4>
                            <p>rahmanliton387@gmail.com</p>
                        </div>
                        <div className='phone'>
                            <h4>Call us</h4>
                            <p>01645722096</p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <div className='footer_right'>
                        <h2>Lets Talk!</h2>
                        <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                    </div>
                    <div className='social_icon'>
                        <ul className='d-flex'>
                            <li><a href=""><FaFacebook /></a></li>
                            <li><a href=""><FaTwitter /></a></li>
                            <li><a href=""><CiInstagram /></a></li>
                            <li><a href=""><CiLinkedin /></a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Copyright 2024,Liton Rahman</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav><a href="/" className='nav_link'>Home</a></Nav>
            <Nav><a href="/about" className='nav_link'>About us</a></Nav>
            <Nav><a href="/features" className='nav_link'>Features</a></Nav>
            <Nav><a href="" className='nav_link'>Pricing</a></Nav>
            <Nav><a href="" className='nav_link'>FAQ</a></Nav>
            <Nav><a href="/privacy" className='nav_link'>Privacy</a></Nav>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}
export default Bottom;