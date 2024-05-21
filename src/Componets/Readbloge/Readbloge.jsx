import React from 'react'
import {Container} from 'react-bootstrap'
import Ecard from '../../Reuseable/Environment/Ecard'
import readimg from '../../assets/img/photo-of-people-near-wooden-table-3184418.jpg'
import './Readblog.css'
function Readbloge() {
  return (
    <>
        <section id="readableblog">
                <Ecard title="A UX Case Study on Creating a Studious Environment for Students"/>
        </section>
        <section>
            <Container>
                <div className='alltext'>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    <br/>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                 </p>
                 <br/>
                 <h3>Ut enim ad minim veniam, quis nostrud.</h3>
                 <br/>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 <br/>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                    </ul>
                    <br/>
                    <img src={readimg} alt=""/>
                    <br/>
                    <h3>Ut enim ad minim veniam, quis nostrud.</h3>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </Container>
        </section>
    </>
  )
}
export default Readbloge;