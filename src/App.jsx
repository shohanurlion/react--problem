import './App.css'
import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Home from '../src/Componets/Home/Home'
import Leyout from './Componets/Leyout/Leyout'
import About from '../src/Componets/About/About'
import Features from '../src/Componets/Features/Features '
import Blogepage from '../src/Componets/Blogpage/Blogepage'
import Contact from '../src/Componets/Contact/Contact'
import Privacy from '../src/Componets/Privacy/Privacy'
import Readbloge from './Componets/Readbloge/Readbloge'
const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Leyout/>}>
   <Route path='/' element={<Home/>}></Route>
   <Route path='/about' element={<About/>}></Route>
   <Route path='/features' element={<Features/>}></Route>
   <Route path='/blog' element={<Blogepage/>}></Route>
   <Route path='/contact' element={<Contact/>}></Route>
   <Route path='/privacy' element={<Privacy/>}></Route>
   <Route path='/readblog' element={<Readbloge/>}></Route>
   
  </Route>
))




function App() {
  return (
    <>
 <RouterProvider router={router} />
    </>
  )
}

export default App;
