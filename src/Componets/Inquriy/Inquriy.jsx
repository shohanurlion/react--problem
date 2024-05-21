import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Inquriy.css'
import { FaArrowRightLong } from "react-icons/fa6";

function Inquriy() {
  return (
    <>
    <Container>
        <Row>
            <Col sm={12} md={6} className="inquriy_left">
                <div>
                <div >
               <h2>Building stellar websites for early startups</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
                </div>
           
            </Col>
            <Col sm={12} md={6} className="from_box">
                <div >
                    <div className="form_content">
                    <h3>Send inquiry</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                
                    <div className="main_form justify-content-center">
                    <form>
                        <input type='text' placeholder='Name'/>
                        <input type='text' placeholder='Name'/>
                        <input type='text' placeholder='Name'/>
                    </form>
                    <div className='form_btn'>
                        <a href="" className='btn033'>Send an Inquiry</a><br/>
                        <a href="" className='btn032'>Get in touch with us <FaArrowRightLong /></a>
                    </div>
                    </div>
                </div>
                </Col>
        </Row>
    </Container>
    </>
  )
}
export default Inquriy;