import React from "react";
import log from "../../assets/img/section-img.png";
import { Link } from "react-router-dom";
import tooth from '../../assets/icons/tooth.svg'
import cut from '../../assets/icons/ui-cut.svg'
import heartbeat from '../../assets/icons/heart-beat.svg'
import check from '../../assets/icons/check-circled.svg'
import scrollclick from "../pages/ScrollClick/ScrollClick";



function Price() {
  return (
    <section className="price">
      <div className="price-div">
        <div className="price-div-heading">
          <p className="price-div-heading-p">
            We Provide You The Best Treatment In Resonable Price
          </p>
          <div className="price-div-heading-logo">
            <img src={log} alt="" className="price-div-heading-logo-img" />
          </div>
          <p className="price-div-heading-main-detail">
            Delivering superior treatment with affordability at the forefront,
            ensuring the highest quality care accessible to everyone
          </p>
        </div>
        <div className="price-div-deatils">
          <div className="price-div-deatils-Plastic-Suggery">
            <div className="price-div-deatils-Plastic-Suggery-logo">
              <div className="price-div-deatils-Plastic-Suggery-logo-img">
                <img src={cut} alt="" className="price-div-deatils-Plastic-Suggery-logo-img-pic" />
              </div>
              <h2 className="price-div-deatils-Plastic-Suggery-logo-h2">Plastic Suggery</h2>
              <p className="price-div-deatils-Plastic-Suggery-logo-p">{" "} $199{" "}
                <span className="price-div-deatils-Plastic-Suggery-logo-p-span">  / Per Visit</span>
              </p>
            </div>
            <div className="price-div-deatils-Plastic-Suggery-details">
              <div className="price-div-deatils-Plastic-Suggery-details-desc">
                <p >Expertise in Diverse Procedures</p>
                <p >Cutting-Edge Technology</p>
                <p >Individualized Care</p>
                <p >Commitment to Safety</p>
                <p >Positive Patient Experience</p>
              </div>
              <div className="price-div-deatils-Plastic-Suggery-details-img">
                <img src={check}  alt=""   className="price-div-deatils-Plastic-Suggery-details-img-pic"  />
                <img src={check}  alt=""   className="price-div-deatils-Plastic-Suggery-details-img-pic"  />
                <img src={check}  alt=""   className="price-div-deatils-Plastic-Suggery-details-img-pic"  />
                <img src={check}  alt=""   className="price-div-deatils-Plastic-Suggery-details-img-pic"  />
                <img src={check}  alt=""   className="price-div-deatils-Plastic-Suggery-details-img-pic"  />
              </div>
            </div>
            <div className="price-div-deatils-Plastic-Suggery-button">
              <Link to="/appoinment" className="price-div-deatils-Plastic-Suggery-button-link" onClick={scrollclick} > Book Now </Link>
            </div>
          </div>
          <div className="price-div-deatils-Teeth-Whitening">
            <div className="price-div-deatils-Teeth-Whitening-logo">
              <div className="price-div-deatils-Teeth-Whitening-logo-img">
                <img src={tooth} alt="" className="price-div-deatils-Teeth-Whitening-logo-img-pic" />
              </div>
              <h2 className="price-div-deatils-Teeth-Whitening-logo-h2">Teeth Whitening</h2>
              <p className="price-div-deatils-Teeth-Whitening-logo-p">{" "} $299{" "}
                <span className="price-div-deatils-Teeth-Whitening-logo-p-span">  / Per Visit</span>
              </p>
            </div>
            <div className="price-div-deatils-Teeth-Whitening-details">
              <div className="price-div-deatils-Teeth-Whitening-details-desc">
                <p>Cost-Effective Solutions</p>
                <p>Consultation Included</p>
                <p>Insurance Coverage</p>
                <p>Senior Citizen Offers</p>
                <p>Membership Benefits</p>
              </div>
              <div className="price-div-deatils-Teeth-Whitening-details-img">
              <img src={check}  alt=""   className="price-div-deatils-Teeth-Whitening-details-img-pic"  />
              <img src={check}  alt=""   className="price-div-deatils-Teeth-Whitening-details-img-pic"  />
              <img src={check}  alt=""   className="price-div-deatils-Teeth-Whitening-details-img-pic"  />
              <img src={check}  alt=""   className="price-div-deatils-Teeth-Whitening-details-img-pic"  />
              <img src={check}  alt=""   className="price-div-deatils-Teeth-Whitening-details-img-pic"  />
              </div>
            </div>
            <div className="price-div-deatils-Teeth-Whitening-button">
                <Link to="/appoinment" className="price-div-deatils-Teeth-Whitening-button-link" onClick={scrollclick} > Book Now </Link>
            </div>
          </div>
          <div className="price-div-deatils-Heart-Suggery">
            <div className="price-div-deatils-Heart-Suggery-logo">
              <div className="price-div-deatils-Heart-Suggery-logo-img">
                <img src={heartbeat} alt="" className="price-div-deatils-Heart-Suggery-logo-img-pic" />
              </div>
              <h2 className="price-div-deatils-Heart-Suggery-logo-h2">Heart Suggery</h2>
              <p className="price-div-deatils-Heart-Suggery-logo-p">{" "} $399{" "}
                <span className="price-div-deatils-Heart-Suggery-logo-p-span">  / Per Visit</span>
              </p>
            </div>
            <div className="price-div-deatils-Heart-Suggery-details">
              <div className="price-div-deatils-Heart-Suggery-details-desc">
                <p>Medication Coverage</p>
                <p>Pre-Surgery Consultation</p>
                <p>Insurance Coverage</p>
                <p>Senior Citizen Offers</p>
                <p>Long-Term Care Plans</p>
              </div>
              <div className="price-div-deatils-Heart-Suggery-details-img">
                <img src={check}  alt=""   className="price-div-deatils-Heart-Suggery-details-img-pic"  />
                <img src={check}  alt=""   className="price-div-deatils-Heart-Suggery-details-img-pic"  />
                <img src={check}  alt=""   className="price-div-deatils-Heart-Suggery-details-img-pic"  />
                <img src={check}  alt=""   className="price-div-deatils-Heart-Suggery-details-img-pic"  />
                <img src={check}  alt=""   className="price-div-deatils-Heart-Suggery-details-img-pic"  />

              </div>
            </div>
            <div className="price-div-deatils-Heart-Suggery-button">
                <Link to="/appoinment" className="price-div-deatils-Heart-Suggery-button-link" onClick={scrollclick} > Book Now </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price;
