import React from 'react'
import './About.css'
import Textcardone from '../../Reuseable/Textcard/Textcardone';
import { Col, Container, Row } from 'react-bootstrap';
import aboutimg from '../../assets/img/man-in-blue-jacket-looking-at-white-board-7413916.png'
import Textcardtwo from '../../Reuseable/Textcardtwo/Textcardtwo';
import Rcard from '../../Reuseable/Rcard/Rcard';
import imag1 from '../../assets/img/Logo Number.png'
import imag2 from '../../assets/img/Logo 1.png'
import imag3 from '../../assets/img/Logo 2.png'
import imag4 from '../../assets/img/Logo 3.png'
import imag5 from '../../assets/img/Logo 4.png'
import Tame from '../Tame/Tame';


function About() {
  return (
    <>
        <section id="about">
             <Textcardone/>
        </section>
        <section id="improvement">
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <div className='improvement_left'>
                            <span>Who we are</span>
                            <h3>Goal focussed</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className='improvement_left'>
                            <h3>Continuous improvement</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </Col>
                    <Col sm="12" md={12}>
                        <img src={aboutimg} alt=""/>
                    </Col>
                </Row>
            </Container>
        </section>
        <section id="recarduse">
            <div className='cardone'>
                <Textcardone/>
            </div>
            <Textcardtwo/>
        </section>
        <section id="refeatures">
        <Container>
                <Row className='d-flex justify-content-center'>
                    <Col sm={12} md={6}>
                        <div className='benefits_title text-center'>
                            <h2>The benefits of working <br/>with our team</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Rcard/>
                    <Rcard/>
                    <Rcard/>
                </Row>
                <Row className='d-flex align-items-center'>
                    <Col sm={12} md="2">
                        <img src={imag1} alt=""/>
                    </Col>
                    <Col sm={12} md={10}>
                        <Row className='d-flex justify-content-center align-items-center'>
                            <Col sm={12} md={2}>
                                <img src={imag2} alt=""/>
                            </Col>
                            <Col sm={12} md={2}>
                                <img src={imag3} alt=""/>
                            </Col>
                            <Col sm={12} md={2}>
                                <img src={imag4} alt=""/>
                            </Col>
                            <Col sm={12} md={2}>
                                <img src={imag5} alt=""/>
                            </Col>
                            <Col sm={12} md={2}>
                                <img src={imag3} alt=""/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
        <section id="tame">
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col sm={12} md={6}>
                        <div className='tametitle text-center'>
                            <h1>Meet our team</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Tame name="John Smith" des="CEO"/>
                    <Tame name="Simon Adams" des="CTO"/>
                    <Tame name="Paul Jones" des="Design Lead"/>
                    <Tame name="Sara Hardin" des="Project Manager"/>
                </Row>
            </Container>
        </section>
    </>
  )
}
export default About;