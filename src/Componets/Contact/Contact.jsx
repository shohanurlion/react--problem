import React from 'react'
import {Container, Row ,Col} from 'react-bootstrap'
import './Contact.css'
 function Contact() {
  return (
    <>
    <section id="Contact">
        <Container>
                <Row className='d-flex justify-content-center'>
                    <Col sm={12} md={6}>
                    <div className='contact_title text-center'>
                        <h2>Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    </Col>
                   
                </Row>
                <Row className='d-flex justify-content-center'>
                    <Col sm={12} md={12}>
                        <div className='from_part'>
                        <form>
                    <div className='nameorgmai d-flex'>
                    <div className='customdiv'>
                    <label>Name:</label><br/>
                    <input type="text" placeholder='Enter your name'/>
                    </div>
                    <div  className='customdiv'>
                    <label>Email:</label><br/>
                    <input type="text" placeholder='Enter your Emial'/>
                    </div>
                    </div >
                    <div className='nameorgmai d-flex'>
                    <div className='customdiv'>
                    <label>Name:</label><br/>
                    <input type="text" placeholder='Enter your name'/>
                    </div>
                    <div  className='customdiv'>
                    <label>Email:</label><br/>
                    <input type="text" placeholder='Enter your Emial'/>
                    </div>
                    </div>
                    <div>
                        <label>Message</label><br/>
                        <textarea placeholder='Write your  question here'></textarea>
                    </div>
                  <div>
                        <a href="" className='contact_btn'>Send Messege</a>
                  </div>
                </form>
                        </div>
              
                    </Col>
                </Row>
             
        </Container>
    </section>

    </>
  )
}
export default Contact;