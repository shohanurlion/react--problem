import {Col, Container, Row} from 'react-bootstrap'
import textcardimg from '../../assets/img/cardimg.png'
import './Textcardone.css'

export default function Textcardone() {
  return (
   <>
    <Container>
        <Row>
            <Col sm={12} md={6}>
                <div className='left_text'>
                    <span className='abouttext'>About us</span>
                    <h3 className='textcardhedar'>Our designs solve problems</h3>
                    <p className='textcardptag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </Col>
            <Col sm={12} md={6}>
                <div className='right_img'>
                    <img src={textcardimg} alt=""/>
                </div>
            </Col>
        </Row>
    </Container>
   </>
  )
}
