import React from 'react'
import './Features.css'
import Rebanner from '../../Reuseable/Rbanner/Rebanner'
import { Col, Container, Row } from 'react-bootstrap'
import img1 from '../../assets/img/Logo Number.png'
import img2 from '../../assets/img/Logo 1.png'
import img3 from '../../assets/img/Logo 2.png'
import img4 from '../../assets/img/Logo 4.png'
import img5 from '../../assets/img/Logo 5.png'
import Rcard from '../../Reuseable/Rcard/Rcard'
import Textcardone from '../../Reuseable/Textcard/Textcardone'
import Textcardtwo from '../../Reuseable/Textcardtwo/Textcardtwo'
 function Features () {
  return (
    <>
        <section id="features">
                <Rebanner/>
        </section>
        <section id="log">
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col sm={12} md="2">
                        <img src={img1} alt=""/>
                    </Col>
                    <Col sm={12} md={10}>
                        <Row className='d-flex justify-content-center align-items-center'>
                            <Col sm={12} md={2}>
                                <img src={img2} alt=""/>
                            </Col>
                            <Col sm={12} md={2}>
                                <img src={img3} alt=""/>
                            </Col>
                            <Col sm={12} md={2}>
                                <img src={img4} alt=""/>
                            </Col>
                            <Col sm={12} md={2}>
                                <img src={img5} alt=""/>
                            </Col>
                            <Col sm={12} md={2}>
                                <img src={img2} alt=""/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
        <section id="benefits">
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
            </Container>
        </section>
        <section id="revisions">
                <Textcardone/>
        </section>
        <section id="support">
                <Textcardtwo/>
        </section>
        <section id="revisions">
                <Textcardone/>
        </section>
        <section id="delivery">
                <Textcardtwo/>
        </section>
    </>
  )
}
export default Features;