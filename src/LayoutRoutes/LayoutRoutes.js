import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import ContactUs from '../components/pages/ContactUs/ContactUs'
import Docters from '../components/pages/Docters/Docters'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre'
import Emergency from '../components/Emergency/Emergency'
import Services from '../components/Services/Services'
import Appointment from '../components/Appointment/Appointment'
import Price from '../components/Price/Price'
import Notfound from '../components/pages/NotFound/Notfound'


function LayoutRoutes() {
  return (
    <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/hospitalwebsite' element={<Home/>} />
            <Route path='/contact' element={<ContactUs/>} />
            <Route path='/docters' element={<Docters/>} />
            <Route path='/about' element={<WhoWeAre/>} />
            <Route path='/emergency' element={<Emergency/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/appoinment' element={<Appointment/>} />
            <Route path='/price' element={<Price/>} />
            <Route path='/*' element={<Notfound/>} />
        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes
