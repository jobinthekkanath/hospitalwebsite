import React from "react";
import callimg from "../../assets/img/call-bg.jpg";
import { Link } from "react-router-dom";
import rightarrow from '../../assets/icons/long-arrow-right.svg'
import scrollclick from "../pages/ScrollClick/ScrollClick";

function Emergency() {
  return (
    <section className="emergency">
      <div
        className="emergency-div"
        style={{ backgroundImage: `url(${callimg})` }}
      >
        <div className="emergency-div-call">
          <div className="emergency-div-call-alignment">
            <p className="emergency-div-call-p1">
              Do you need Emergency Medical Care? Call @ 1234 56789
            </p>
            <p className="emergency-div-call-p2">
              Seeking immediate medical attention. Contact us for emergency care
            </p>
            <div className="emergency-div-call-alignment-btn">
            <Link to="/contact" className="emergency-div-call-alignment-btn-link1" onClick={scrollclick} >
            Contact Now
          </Link>
            <Link to="/appoinment" className="emergency-div-call-alignment-btn-link2" onClick={scrollclick} >
            Learn More <img src={rightarrow} alt="" className="emergency-div-call-alignment-btn-link2-arrow" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
          </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Emergency;
