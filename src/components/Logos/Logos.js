import React from 'react'
import img from '../../assets/img/client-bg.jpg'
import logo1 from '../../assets/img/client1.png'
import logo2 from '../../assets/img/client2.png'
import logo3 from '../../assets/img/client3.png'
import logo4 from '../../assets/img/client4.png'
import logo5 from '../../assets/img/client5.png'

function Logos() {
  return (
    <section className="logos">
      <div
        className="logos-div"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="logos-div-call">
          <div className="logos-div-call-alignment">
           <div className="logos-div-call-alignment-logo1">
            <img src={logo1} alt=''  className="logos-div-call-alignment-logo1-img"   />
           </div>
           <div className="logos-div-call-alignment-logo2">
            <img src={logo2} alt=''  className="logos-div-call-alignment-logo2-img"   />
           </div>
           <div className="logos-div-call-alignment-logo3">
            <img src={logo3} alt=''  className="logos-div-call-alignment-logo3-img"   />
           </div>
           <div className="logos-div-call-alignment-logo4">
            <img src={logo4} alt=''  className="logos-div-call-alignment-logo4-img"   />
           </div>
           <div className="logos-div-call-alignment-logo5">
            <img src={logo5} alt=''  className="logos-div-call-alignment-logo5-img"   />
           </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Logos
