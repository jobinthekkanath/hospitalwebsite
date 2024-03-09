import React from 'react'

function ContactUs() {
  return (
    <section className='contact'>
    <div className='contact-div'>
        <h2  className='contact-div-main'>Contact Us</h2>
        <div className='contact-line' ></div>
        <p className='contact-passage'>We value your feedback and are here to assist you in any way we can. Please feel free to reach out to us using the contact information below or by filling out the form provided. Our dedicated team is committed to providing you with the highest quality care and support.</p>
        <h4 className='contact-email'>Email:<span className='contact-email-span'> info@hospital.com</span></h4>
        <h4 className='contact-phone'>Phone: <span className='contact-phone-span'> (123) 456-7890</span></h4>
        <div className='contact-address'>
            <h2 className='contact-address-sub'>Address:</h2>
            <p>Mediplus hospital,123 Hospital Street City, Mumbai,  pin:578496</p>
        </div>
    </div>
    </section>
  )
}

export default ContactUs
