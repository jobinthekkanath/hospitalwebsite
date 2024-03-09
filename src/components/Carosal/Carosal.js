import React, { useRef,useState,useEffect  } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../assets/img/slider.jpg";
import slider2 from "../../assets/img/slider2.jpg";
import slider3 from "../../assets/img/slider3.jpg";
import { Link } from "react-router-dom";
import scrollclick from "../pages/ScrollClick/ScrollClick";

function Carosal() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [initialAnimationDone, setInitialAnimationDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialAnimationDone(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slideHeight: 600,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1800,

    afterChange: (current) => {
      setCurrentSlide(current);
    }
    
    
  };

  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
      <div className="carosal-slide">
        <div className="carosal-slide-booking" style={{ backgroundImage: `url(${slider1})`,backgroundSize:'cover', height: "600px",}}>
          <div className={`carosal-content ${initialAnimationDone &&currentSlide === 0 ? 'show' : ''}`}>
            <div className="carosal-content-text">
              <p >We Provide <span className="carosal-content-text-p-span">medical</span> Services That You Can <span className="carosal-content-text-p-span">Trust!</span></p>
              <h5>Discover peace of mind through our trusted medical services, ensuring care and reliability at every step</h5>
            </div>
            <div className="carosal-content-buttons">
              <Link to="/appoinment" className="carosal-slide-booking-btn-link1" onClick={scrollclick} >
                Get Appointment
              </Link>
              <Link to="/about" className="carosal-slide-booking-btn-link2" onClick={scrollclick} >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="carosal-slide">
        <div className="carosal-slide-booking" style={{ backgroundImage: `url(${slider2})`, backgroundSize: "cover", height: "600px" }}>
          <div className={`carosal-content ${currentSlide === 1 ? 'show' : ''}`} >
            <div className="carosal-content-text">
              <p>We Provide <span className="carosal-content-text-p-span">medical</span> Services That You Can <span className="carosal-content-text-p-span">Trust!</span></p>
              <h5>Discover peace of mind through our trusted medical services, ensuring care and reliability at every step</h5>
            </div>
            <div className="carosal-content-buttons">
              <Link to="/appoinment" className="carosal-slide-booking-btn-link1" onClick={scrollclick} >
                Get Appointment
              </Link>
              <Link to="/about" className="carosal-slide-booking-btn-link2" onClick={scrollclick} >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="carosal-slide">
        <div className="carosal-slide-booking" style={{ backgroundImage: `url(${slider3})`, backgroundSize: "cover", height: "600px" }}>
          <div className={`carosal-content ${currentSlide === 2 ? 'show' : ''}`} >
            <div className="carosal-content-text">
              <p>We Provide <span className="carosal-content-text-p-span">medical</span> Services That You Can <span className="carosal-content-text-p-span">Trust!</span></p>
              <h5>Discover peace of mind through our trusted medical services, ensuring care and reliability at every step</h5>
            </div>
            <div className="carosal-content-buttons">
              <Link to="/appoinment" className="carosal-slide-booking-btn-link1" onClick={scrollclick} >
                Get Appointment
              </Link>
              <Link to="/about" className="carosal-slide-booking-btn-link2" onClick={scrollclick} >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      </Slider>
      <button className="prev-arrow" onClick={goToPrev}>
        {"<"}
      </button>
      <button className="next-arrow" onClick={goToNext}>
        {">"}
      </button>
    </div>
  );
}

export default Carosal;
