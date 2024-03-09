import React from "react";
import logoimg from '../../assets/img/section-img.png'
import prescription from '../../assets/icons/prescription.svg'
import tooth from '../../assets/icons/tooth.svg'
import heart from '../../assets/icons/heart-alt.svg'
import ear from '../../assets/icons/listening.svg'
import eye from '../../assets/icons/eye-alt.svg'
import blood from '../../assets/icons/blood.svg'

function Services() {
  return (
    <section className="services">
      <div className="services-div">
        <div className="services-div-heading">
          <p className="services-div-heading-p">
          We Offer Different Services To Improve Your Health
          </p>
          <div className="services-div-heading-logo">
            <img
              src={logoimg}
              alt=""
              className="services-div-heading-logo-img"
            />
          </div>
          <p className="services-div-heading-main-detail">
          Boost your health with our range of specialized services tailored to improve your overall well-being
          </p>
        </div>
        <div className="services-div-details">
          <div className="services-div-details-top" >
            <div className="services-div-details-top-General-Treatment">
              <div className="services-div-details-top-General-Treatment-logo" >
                <img src={prescription} alt="" className="services-div-details-top-General-Treatment-logo-img" />
              </div>
              <div className="services-div-details-top-General-Treatment-deatils" >
                <p className="services-div-details-top-General-Treatment-deatils-p1"  >General Treatment</p>
                <p className="services-div-details-top-General-Treatment-deatils-p2"  >Comprehensive medical care 
                encompassing diagnosis, treatment, and follow-up, ensuring optimal health outcomes for all patients</p>
              </div>
            </div>
            <div className="services-div-details-top-Teeth-Whitening">
              <div className="services-div-details-top-Teeth-Whitening-logo" >
              <img src={tooth} alt="" className="services-div-details-top-Teeth-Whitening-logo-img" />
              </div>
              <div className="services-div-details-top-Teeth-Whitening-deatils" >
                <p className="services-div-details-top-Teeth-Whitening-deatils-p1">Teeth Whitening</p>
                <p className="services-div-details-top-Teeth-Whitening-deatils-p2">Revitalize your smile with our professional 
                teeth whitening services, enhancing confidence and oral health effortlessly</p>

              </div>
            </div>
            <div className="services-div-details-top-Heart-Surgery">
              <div className="services-div-details-top-Heart-Surgery-logo" >
              <img src={heart} alt="" className="services-div-details-top-Heart-Surgery-logo-img" />
              </div>
              <div className="services-div-details-top-Heart-Surgery-deatils" >
                <p className="services-div-details-top-Heart-Surgery-deatils-p1">Heart Surgery</p>
                <p className="services-div-details-top-Heart-Surgery-deatils-p2">Advanced cardiac procedures performed by 
                skilled surgeons, ensuring optimal outcomes and improved quality of life for patients</p>
              </div>
            </div>
          </div>
          <div className="services-div-details-bottom" >
            <div className="services-div-details-bottom-Ear-Treatment">
              <div className="services-div-details-bottom-Ear-Treatment-logo" >
              <img src={ear} alt="" className="services-div-details-bottom-Ear-Treatment-logo-img" />
              </div>
              <div className="services-div-details-bottom-Ear-Treatment-deatils" >
                <p className="services-div-details-bottom-Ear-Treatment-deatils-p1" >Ear Treatment</p>
                <p className="services-div-details-bottom-Ear-Treatment-deatils-p2" >Comprehensive ear care services provided by
                 expert specialists, dedicated to restoring hearing health and enhancing overall well-being</p>
              </div>
            </div>
            <div className="services-div-details-bottom-Vision-Problems">
              <div className="services-div-details-bottom-Vision-Problems-logo" >
              <img src={eye} alt="" className="services-div-details-bottom-Vision-Problems-logo-img" />
              </div>
              <div className="services-div-details-bottom-Vision-Problems-deatils" >
                <p className="services-div-details-bottom-Vision-Problems-deatils-p1" >Vision Problems</p>
                <p className="services-div-details-bottom-Vision-Problems-deatils-p2" >Comprehensive vision care solutions offered 
                by experienced specialists, aiming to diagnose, treat, and improve various vision issues</p>
              </div>
            </div>
            <div className="services-div-details-bottom-Blood-Transfusion">
              <div className="services-div-details-bottom-Blood-Transfusion-logo" >
              <img src={blood} alt="" className="services-div-details-bottom-Blood-Transfusion-logo-img" />
              </div>
              <div className="services-div-details-bottom-Blood-Transfusion-deatils" >
                <p className="services-div-details-bottom-Blood-Transfusion-deatils-p1" >Blood Transfusion</p>
                <p className="services-div-details-bottom-Blood-Transfusion-deatils-p2" >Life-saving blood transfusion services provided 
                by skilled professionals, ensuring patient safety and optimal health outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
