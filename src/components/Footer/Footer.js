import React from 'react'
import { Link } from 'react-router-dom'
import scrollclick from '../pages/ScrollClick/ScrollClick';


function Footer() {
  function openinstagram() {
    window.open('https://www.instagram.com', '_blank');
  }
  function opentwitter() {
    window.open('https://www.twitter.com', '_blank');
  }
  function openfacebook() {
    window.open('https://www.facebook.com', '_blank');
  }
  
  return (
    <div className='footer'>
      <div className='footer-links'>
        <h2>Quick Links</h2>
        <div className='footer-links-line' ></div>
        <h3>  <Link to='/' className='footer-link-h3-link1' onClick={scrollclick} >Home</Link></h3>
        <h3><Link to='/about' className='footer-link-h3-link2' onClick={scrollclick} >About Us</Link></h3>
        <h3><Link to='/services' className='footer-link-h3-link3' onClick={scrollclick} >Services</Link></h3>
        <h3><Link to='/appoinment' className='footer-link-h3-link4' onClick={scrollclick} >Book Appoinment</Link></h3>
      </div>
      <div className='footer-open'>
            <h2>Opening Hours</h2>
            <div className='footer-open-line' ></div>
            <div className="footer-open-opening-time">
            <div className="footer-open-opening-time-days" >
            <p> Monday - Friday </p>
            <p> Saturday  </p>
            <p> Sunday</p>
            </div>
            
            <div className="footer-open-opening-time-timing"  >
            <p>8AM-8PM</p>
            <p>9AM-9PM</p>
            <p>9AM-2PM</p>
            </div>

            
            
        </div>
      </div>
      <div className='footer-contact'>
        <h2>Contact Us</h2>
        <div className='footer-contact-line' ></div>
        <div className='footer-contact-img'>
        <div className='footer-contact-pic1'>
           <box-icon name='facebook' type='logo' color='#ffffff' onClick={openfacebook} ></box-icon>
        </div>
        <div className='footer-contact-pic2'>
           <box-icon name='instagram' type='logo' color='#ffffff' onClick={openinstagram} ></box-icon>  
        </div>
        <div className='footer-contact-pic3'>
           <box-icon name='twitter' type='logo' color='#ffffff' onClick={opentwitter} ></box-icon> 
        </div></div>
      </div>
    </div>
  )
}

export default Footer
