import React from 'react'
import { Col, Container,Row } from 'react-bootstrap';
import './Privacy.css'

function Privacy() {
  return (
    <>
        <section id="privacy">
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col sm={12} md={6}>
                        <div className='privacy_text text-center'>
                            <h3>Privacy Policy</h3>
                            <p>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help you bring your </p>
                        </div>
                    </Col>
                </Row>
                <div className='privacy_alltext'>
                    <h3>Lorem ipsum dolor.</h3><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <br/>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br/>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                    </ul>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>

                </div>
            </Container>
        </section>
    </>
  )
}
export default Privacy;