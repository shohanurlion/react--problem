import React from 'react'
import './Carusel.css'
import { Col, Container,Row } from 'react-bootstrap';
import slideimg from '../../assets/img/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg'
 function Carusel() {
  return (
    <>
    <section id="carusel">
    <Container>
        <Row>
            <Col sm={12} md={5}>
                <div className='carusel_title'>
                    <h2>What our clients say about us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
            </Col>
            <Col sm={12} md={7}>
                <div className="carusel_slide">
                    <div className="slider_box">
                        <p>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</p>
                    </div>
                    <div className="carusel_bottom">
                        <img src={slideimg} alt="" className='sliderimg' />
                        <div>
                        <h5>Jenny Wilson</h5>
                        <p>Vice President</p>
                        </div>
                       
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    </section>
  
    </>
  )
}

export default Carusel;