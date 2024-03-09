import React from "react";
import backgroundimage1 from "../../assets/img/blockqoute-bg.jpg";
import homeimage from "../../assets/icons/home.svg";
import user from "../../assets/icons/user-alt-3.svg";
import smile from "../../assets/icons/simple-smile.svg";
import table from "../../assets/icons/table.svg";
import titlelogo1 from "../../assets/img/section-img.png";
import playbutton from '../../assets/icons/play-alt-1.svg'
import videoimg from '../../assets/img/video-bg.jpg'


function WhoWeAre() {
  function openVideo() {
    window.open('https://www.youtube.com', '_blank');
  }
  
  
  return (
    <section className="whoweare">
      <div className="whoweare-div">
        <div
          className="whoweare-div-deatails"
          style={{ backgroundImage: `url(${backgroundimage1})` }}
        >
          <div className="whoweare-div-deatails-div">
            <div className="whoweare-div-deatails-room">
              <div className="whoweare-div-deatails-room-logo">
                <div className="whoweare-div-deatails-room-logo-hover">
                  <img
                    src={homeimage}
                    alt=""
                    className="whoweare-div-deatails-room-logo-hover-img"
                  />
                </div>
              </div>
              <div className="whoweare-div-deatails-room-details">
                <span className="whoweare-div-deatails-room-details-span">
                  {" "}
                  3468
                </span>
                <p className="whoweare-div-deatails-room-details-p">
                  Hospital Rooms
                </p>
              </div>
            </div>
            <div className="whoweare-div-deatails-docter">
              <div className="whoweare-div-deatails-docter-logo">
                <div className="whoweare-div-deatails-docter-logo-hover">
                  <img
                    src={user}
                    alt=""
                    className="whoweare-div-deatails-docter-logo-hover-img"
                  />
                </div>
              </div>
              <div className="whoweare-div-deatails-docter-details">
                <span className="whoweare-div-deatails-docter-details-span">
                  557
                </span>
                <p className="whoweare-div-deatails-docter-details-p">
                  Specialist Doctors
                </p>
              </div>
            </div>
            <div className="whoweare-div-deatails-patient">
              <div className="whoweare-div-deatails-patient-logo">
                <div className="whoweare-div-deatails-patient-logo-hover">
                  <img
                    src={smile}
                    alt=""
                    className="whoweare-div-deatails-patient-logo-hover-img"
                  />
                </div>
              </div>
              <div className="whoweare-div-deatails-patient-details">
                <span className="whoweare-div-deatails-patient-details-span">
                  4379
                </span>
                <p className="whoweare-div-deatails-patient-details-p">
                  Happy Patients
                </p>
              </div>
            </div>
            <div className="whoweare-div-deatails-experience">
              <div className="whoweare-div-deatails-experience-logo">
                <div className="whoweare-div-deatails-experience-logo-hover">
                  <img
                    src={table}
                    alt=""
                    className="whoweare-div-deatails-experience-logo-hover-img"
                  />
                </div>
              </div>
              <div className="whoweare-div-deatails-experience-details">
                <span className="whoweare-div-deatails-experience-details-span">
                  32
                </span>
                <p className="whoweare-div-deatails-experience-details-p">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="whoweare-div-heading">
          <p className="whoweare-div-heading-p">
            We Offer Different Services To Improve Your Health
          </p>
          <div className="whoweare-div-heading-logo">
            <img
              src={titlelogo1}
              alt=""
              className="whoweare-div-heading-logo-img"
            />
          </div>
          <p className="whoweare-div-heading-main-detail">
            We provide diverse services tailored to enhance your health and
            overall well-being for a better quality of life
          </p>
        </div>
        <div className="whoweare-div-background">
          <div className="whoweare-div-background-details">
            <p className="whoweare-div-background-details-p1" >Who We Are</p>
            <div className="whoweare-div-background-details-line"></div>
            <p className="whoweare-div-background-details-p2">We are dedicated to providing compassionate care and innovative medical solutions
             tailored to each individual's needs. With a team of highly skilled healthcare professionals, we prioritize patient well-being and
              strive for excellence in every aspect of our services. From preventive care to specialized treatments, we are here to support 
              you and your loved ones in achieving optimal health and wellness.</p>
            <div className="whoweare-div-background-details-points">
             <div className="whoweare-div-background-details-points-one" >
              <div className="whoweare-div-background-details-points-one-logo">
                <img src={playbutton} alt="" className="whoweare-div-background-details-points-one-logo-img" />
              </div>
              <p>Compassionate and Innovative Medical Care</p>
              </div> 
             <div className="whoweare-div-background-details-points-two" >
             <div className="whoweare-div-background-details-points-two-logo">
                <img src={playbutton} alt="" className="whoweare-div-background-details-points-two-logo-img" />
              </div>
              <p>Skilled Healthcare Professionals</p>
              </div> 
             <div className="whoweare-div-background-details-points-three" >
             <div className="whoweare-div-background-details-points-three-logo">
                <img src={playbutton} alt="" className="whoweare-div-background-details-points-three-logo-img" />
              </div>
              <p>Patient-Centered and Supportive Environment</p>
              </div> 
            </div>
          </div>
          <div className="whoweare-div-background-video" style={{ backgroundImage: `url(${videoimg})` }} >
          <div class="promo-video">
          <img src={playbutton} alt="" onClick={openVideo} className="promo-video-image" />
            
									<div class="waves-block">
										<div class="waves-wave-1"></div>
										<div class="waves-wave-2"></div>
										<div class="waves-wave-3"></div>
									</div>
                  
								</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
