import React from 'react'
import Rebanner from '../../Reuseable/Rbanner/Rebanner'
import Carusel from '../Carusel/Carusel';
import Faq from '../Faq/Faq';
import './Home.css'
import Inquriy from '../Inquriy/Inquriy';
 function Home() {
  return (
    <>
    <section id="bannerpart">
    <Rebanner/>
    </section>
    <Carusel/>
    <Inquriy/>
    <Faq/>
    </>
  )
}
export default Home;