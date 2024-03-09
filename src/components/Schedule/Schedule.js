import React from "react";
import { Link } from "react-router-dom";
import titlelogo from '../../assets/img/section-img.png'
import svg1 from '../../assets/icons/ambulance-cross.svg'
import svg2 from '../../assets/icons/medical-sign-alt.svg'
import svg3 from '../../assets/icons/stethoscope.svg'
import rightarrow from '../../assets/icons/long-arrow-right.svg'
import scrollclick from "../pages/ScrollClick/ScrollClick";

function Schedule() {
  return (
    <section className="schedule">
      <div className="schedule-div">
      <div className="schedule-availabily">
        <div className="schedule-availabily-emergency">
            <h2>Emergency Cases</h2>
            <p> Our hospital team is prepared to support you and your family whenever you may need us</p>
            <Link to='/emergency' className="schedule-availabily-opening-link" onClick={scrollclick} >Learn More <img src={rightarrow} alt="" className="schedule-availabily-opening-arrow" style={{ display: 'inline-block', verticalAlign: 'middle' }} /> </Link>
        </div>
        <div className="schedule-availabily-timetable">
            <h2>Doctors Timetable</h2>
            <p> Schedule outlining physician availability for patient consultations</p>
            <Link to='/docters' className="schedule-availabily-opening-link" onClick={scrollclick} >Learn More <img src={rightarrow} alt="" className="schedule-availabily-opening-arrow" style={{ display: 'inline-block', verticalAlign: 'middle' }} /> </Link>
        </div>
        <div className="schedule-availabily-opening">
            <h2>Opening Hours</h2>
            <div className="schedule-availabily-opening-time">
            <div className="schedule-availabily-opening-time-days" >
            <p> Monday - Friday </p>
            <p  className="schedule-availabily-opening-time-days-saturday"  > Saturday  </p>
            <p> Sunday</p>
            </div>
            
            <div className="schedule-availabily-opening-time-timing"  >
            <p>8AM-8PM</p>
            <p>9AM-9PM</p>
            <p>9AM-2PM</p>
            </div>

            </div>
            <Link to='/appoinment' className="schedule-availabily-opening-link" onClick={scrollclick} >Learn More <img src={rightarrow} alt="" className="schedule-availabily-opening-arrow" style={{ display: 'inline-block', verticalAlign: 'middle' }} /> </Link>
        </div>
        
      </div>
      <div className="schedule-title">
        <p className="schedule-title-main">
          We Are Always Ready To Help You & Your Family
        </p>
        <div className="schedule-title-logo">
          <img src={titlelogo} alt="" className="schedule-title-logo-img" />
        </div>
        <p className="schedule-title-main-detail">
          We're dedicated to being your reliable healthcare partner, ready to
          assist you and your family at any time
        </p>
      </div>
      <div className="schedule-details">
        <div className="schedule-details-emergency">
          <div className="schedule-details-emergency-logo">
          <div className="schedule-details-treatment-logo-hover">
          <img src={svg1} alt="" className="schedule-details-emergency-logo-img" />
          </div></div>
          <h2>Emergency Help</h2>
          <p className="schedule-details-emergency-p">
            Immediate assistance provided during critical situations 
          </p>
        </div>
        <div className="schedule-details-pharmecy">
          <div className="schedule-details-pharmecy-logo">
          <div className="schedule-details-treatment-logo-hover">
          <img src={svg2} alt="" className="schedule-details-pharmecy-logo-img" />
          </div></div>
          <h2>Enriched Pharmecy</h2>
          <p className="schedule-details-pharmecy-p">
             Offering specialized
            medications and personalized care 
          </p>
        </div>
        <div className="schedule-details-treatment">
          <div className="schedule-details-treatment-logo">
          <div className="schedule-details-treatment-logo-hover">
          <img src={svg3} alt="" className="schedule-details-emergency-logo-img" />
          </div></div>
          <h2>Medical Treatment</h2>
          <p className="schedule-details-treatment-p">
            Expert care tailored for individual health needs.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Schedule;
