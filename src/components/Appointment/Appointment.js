import React,{useState,useEffect} from "react";
import image from "../../assets/img/section-img.png";
import contactimg from "../../assets/img/contact-img.png";

function Appointment() {

  const [showConfirmation, setShowConfirmation] = useState(false);
  

  useEffect(() => {
    let timeoutId;
    if (showConfirmation) {
      timeoutId = setTimeout(() => {
        setShowConfirmation(false);
      }, 10000); // 1 minute in milliseconds
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showConfirmation]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowConfirmation(true);
    
  };

  return (
    <section className="appointment">
      <div className="appointment-div">
        <div className="appointment-div-heading">
          <p className="appointment-div-heading-p">
            We Are Always Ready To Help You. Book An Appointment
          </p>
          <div className="appointment-div-heading-logo">
            <img src={image} alt="" className="news-div-heading-logo-img" />
          </div>
          <p className="appointment-div-heading-main-detail">
            Count on us for assistance anytime. Schedule an appointment with us
            for personalized care and support
          </p>
        </div>
        <div className="appointment-div-booking">
          <div className="appointment-div-booking-registration">
            <form   className=" appointment-div-booking-registration-form"  onSubmit={handleFormSubmit}  >
              <div  className=" appointment-div-booking-registration-form-name" >
              <input type="text" id="fname" name="firstname" placeholder="Your First name.."  required />
              <input type="text" id="lname" name="lastname" placeholder="Your last name.." required /></div>

              <div  className=" appointment-div-booking-registration-form-numberemail" >
              <input  type="tel"  id="number" name="number"  placeholder="Your Phone number" required />
              <input type="email" id="email" name="email" placeholder="Email" /></div>

              <div  className=" appointment-div-booking-registration-form-depamsg" >
              <div className=" appointment-div-booking-registration-form-depa" >
              <label for="department">Department</label>
              <select id="department" name="department" >
                 <option value="department">Department</option>
                <option value="neurology">Neurology</option>
                <option value="dentistry">Dentistry</option>
                <option value="cardiac">Cardiac</option>
              </select></div>
              <div className=" appointment-div-booking-registration-form-time">
                <label for="time">Time</label>
                <input type="time" name="time"  id="time"  />
              </div>
              
              </div>

              <div  className=" appointment-div-booking-registration-form-msg" >
                
              <label for="subject">Message</label>
              <textarea id="subject" name="subject" placeholder="Write your message here..."
                style={{ height: "100px" }}
              ></textarea></div>

              <div className="appointment-div-booking-registration-form-submit">
                <input type="submit" value="Book Appointment" />
              </div>
            </form>
            {showConfirmation && (
              <p className="appointment-div-booking-registration-form-submit-p" > We will be giving a confirmation call soon </p>
            )}
          </div>
          <div className="appointment-div-booking-image">
            <img
              src={contactimg}
              alt=""
              className="appointment-div-booking-image-pic"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Appointment;
