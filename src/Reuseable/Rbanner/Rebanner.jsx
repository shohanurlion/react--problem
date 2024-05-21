import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import banimg from '../../assets/img/Illustration.png'
import './Rebanner.css'
import { FaArrowRightLong } from "react-icons/fa6";

 function Rebanner() {
  return (
    <>
        <Container>
           <Row>
            <Col sm={12} md={6}>
                <div className='banner_left'>
                    <h1>Building stellar websites for early startups</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className='banner_btn'>
                        <button className='view_work'>View Work</button>
                        <button className='view_pricing'>View Pricing <FaArrowRightLong /></button>
                    </div>
                </div>
            </Col>
            <Col sm={12} md={6}>
                <div className='banner_right'>
                   <img src={banimg} alt=""/> 
                </div>
            </Col>
           </Row>
        </Container>

    </>
  )
}
export default Rebanner;