import React from 'react'
import {Container, Row,Col} from 'react-bootstrap'
import Ecard from '../../Reuseable/Environment/Ecard'
import Blog from '../../Reuseable/Blogcard/Blog'
import './Blogepage.css'
import Blogingimg from '../../assets/img/mane.png'
import Blogingimg2 from '../../assets/img/top-view-photo-of-people-having-a-meeting-3182822.png'
import Blogingimg4 from '../../assets/img/man-wearing-red-crew-neck-shirt-1125028.png'


 function Blogepage() {
  return (
        <>
            <section id="enverment">
                <Ecard title="A UX Case Study on Creating a Studious Environment for Students" ptag="Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside."/>
            </section>
            <section id="main_blog">
                <div className='main_title text-center'>
                    <h2>Our Blog</h2>
                </div>
                <Container>
                    <Row>
                        <Col sm={12} md={4}>
                            <Blog imges={Blogingimg} data="30 Jan 2024"/>
                        </Col>
                        <Col sm={12} md={4}>
                            <Blog imges={Blogingimg4} data="19 Jan 2024"/>
                        </Col>
                        <Col sm={12} md={4}>
                            <Blog imges={Blogingimg2} data="10 Jan 2024"/>
                        </Col>
                        <Col sm={12} md={4}>
                            <Blog imges={Blogingimg4} data="04 Jan 2024"/>
                        </Col>
                        <Col sm={12} md={4}>
                            <Blog imges={Blogingimg} data="03 Jan 2024"/>
                        </Col>
                        <Col sm={12} md={4}>
                            <Blog imges={Blogingimg2} data="01 Jan 2024"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
  )
}
export default Blogepage;