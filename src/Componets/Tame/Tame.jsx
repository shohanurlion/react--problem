import React from 'react'
import './Tame.css'
import { Col} from 'react-bootstrap';
import cardimg from '../../assets/img/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
 function Tame(props) {
  return (
   <>
     
    <Col sm={12} md={3}>
                <div class="team-item">
          <div class="overflow-hidden position-relative"><img class="img-fluid" src={cardimg} alt="website template image"/>
            <div class="team-social">
                <a class="btn btn-square" href=""><FaFacebookF /></a>
                 <a class="btn btn-square" href=""><FaInstagram /></a> 
                 <a class="btn btn-square" href=""><FaTwitter /></a>
                 </div>
          </div>
          <div class="text-center border border-5 border-light border-top-0 p-4">
            <h5 class="mb-0">{props.name}</h5>
            <small>{props.des}</small></div>
        </div>
    </Col>
  
   </>
  )
}
export default Tame;
