import React from 'react'
import Menubar from '../../Menubar'
import Bottom from '../Boottompart/Bottom'
import { Outlet } from 'react-router-dom';
function Leyout() {
  return (
   <>
  <Menubar/>
  <Outlet/>
  <Bottom/>
   </>
  )
}
export default Leyout;