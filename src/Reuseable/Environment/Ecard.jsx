import './Ecard.css'
import {Col, Container, Row} from 'react-bootstrap'
import workingimg from '../../assets/img/people-working-in-front-of-computer-3182763.png'
import { Link } from 'react-router-dom';

 function Ecard(props) {
  return (
   <>
    <Container>
        <div className='ecardtitel text-center'>
            <h3 className='etitel mx-auto'>{props.title}</h3>
            <p className='workingptags'>Andrew Jonson Posted on 27th January 2021</p>
        </div>
        <Row>
            <Col sm={12} md={12}>
                <div className='peopleworkin'>
                <img src={workingimg} alt=""/>
                </div> 
            </Col>
        </Row>
        <div className='bottom_title text-center'>
            <p className='workingptag'>{props.ptag}</p>
        <Link to="/readblog">Read more</Link>
        </div>
    </Container>

   </>
  )
}
export default Ecard;