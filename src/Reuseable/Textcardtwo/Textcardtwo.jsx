import './Textcardtwo.css'
import {Container,Row,Col} from 'react-bootstrap'
import textcardtwo from '../../assets/img/photowoman.png'

function Textcardtwo() {
  return (
   <>
    <Container>
        <Row>
        <Col sm={12} md={6}>
                <div className='right_img'>
                    <img src={textcardtwo} alt=""/>
                </div>
            </Col>

            <Col sm={12} md={6}>
                <div className='left_text'>
                    <span className='abouttext'>About us</span>
                    <h3 className='textcardhedar'>Our designs solve problems</h3>
                    <p className='textcardptag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                </div>
            </Col>
       
        </Row>
    </Container>
   </>
  )
}
export default Textcardtwo;