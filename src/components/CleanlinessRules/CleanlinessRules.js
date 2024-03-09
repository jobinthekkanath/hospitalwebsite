import React from "react";
import logoimage from "../../assets/img/section-img.png";
import backslideImg1 from "../../assets/img/pf1.jpg";
import backslideImg2 from "../../assets/img/blog2.jpg";
import backslideImg3 from "../../assets/img/pf3.jpg";
import backslideImg4 from "../../assets/img/pf4.jpg";
import { Link } from "react-router-dom";
import scrollclick from "../pages/ScrollClick/ScrollClick";

function CleanlinessRules() {
  return (
    <section className="cleanlinessrules">
      <div className="cleanlinessrules-div">
        <div className="cleanlinessrules-div-heading">
          <p className="cleanlinessrules-div-heading-p">
            We Maintain Cleanliness Rules Inside Our Hospital
          </p>
          <div className="cleanlinessrules-div-heading-logo">
            <img
              src={logoimage}
              alt=""
              className="cleanlinessrules-div-heading-logo-img"
            />
          </div>
          <p className="cleanlinessrules-div-heading-main-detail">
            We strictly adhere to cleanliness protocols within our hospital to
            ensure a hygienic environment for all
          </p>
        </div>
        <div className="cleanlinessrules-div-details">
          <div className="cleanlinessrules-div-details-slide">
            <img
              src={backslideImg1}
              alt=""
              className="cleanlinessrules-div-details-slide-img"
            />
            <Link to='/price' className="cleanlinessrules-div-details-slide-btn" onClick={scrollclick} >View Deatils</Link>
          </div>
          <div className="cleanlinessrules-div-details-slide">
            <img
              src={backslideImg2}
              alt=""
              className="cleanlinessrules-div-details-slide-img"
            />
            <Link to='/price' className="cleanlinessrules-div-details-slide-btn" onClick={scrollclick} >View Deatils</Link>
          </div>
          <div className="cleanlinessrules-div-details-slide">
            <img
              src={backslideImg3}
              alt=""
              className="cleanlinessrules-div-details-slide-img"
            />
            <Link to='/price' className="cleanlinessrules-div-details-slide-btn" onClick={scrollclick} >View Deatils</Link>
          </div>
          <div className="cleanlinessrules-div-details-slide">
            <img
              src={backslideImg4}
              alt=""
              className="cleanlinessrules-div-details-slide-img"
            />
            <Link to='/price' className="cleanlinessrules-div-details-slide-btn" onClick={scrollclick} >View Deatils</Link>
          </div>
          
          
        </div>
      </div>
    </section>
  );
}

export default CleanlinessRules;
