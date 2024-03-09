import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <section className="notfound">
      <div className="notfound-div">
        <h2 className='notfound-head'>Oops!  Page Not Found</h2>
        <div className="notfound-div-button">
        <div className="notfound-div-button-appoinment-btn">
          <Link to="/appoinment" className="notfound-div-button-appoinment-btn-link">
            Book Appoinment
          </Link>
        </div>
        <div className="notfound-div-button-home">
          <Link to="/" className="notfound-div-button-home-link">
            Home
          </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Notfound
