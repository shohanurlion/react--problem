import React from 'react'
import './Rcard.css'
import {Col} from 'react-bootstrap'
import { IoIosPeople } from "react-icons/io";


function Rcard() {
  return (
  <>
   
    <Col sm={12} md={4}>
        <div className='card_box'>
        <span className='icon_style'><IoIosPeople /></span>
        <h3 className='cardtitle'>Uses Client First</h3>
        <p className='cardptag'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
        </div>
    </Col>
   
  </>
    
  )
}
export default Rcard;