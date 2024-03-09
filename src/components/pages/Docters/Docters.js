import React from "react";
import { Link } from "react-router-dom";
import scrollclick from "../ScrollClick/ScrollClick";

function Docters() {
  return (
    <section className="docters">
      <div className="docters-div">
        <h2 className="docters-div-main" >Available Doctors</h2>
        <div className="docters-line"></div>

        <div className="docters-address">
          <div className="docters-address-cardiologist">
            <h2>Cardiologists Department:</h2>
            <div className="docters-address-cardiologist-docters">
              <h2>Dr. John Smith</h2>
              <ul >
                <li>Experience: 15 years</li>
                <li>
                  Bio: Dr. John Smith is a board-certified cardiologist with
                  extensive experience in treating various heart conditions. He
                  is dedicated to providing compassionate care and helping
                  patients lead healthier lives.
                </li>
              </ul>
              <h2>Dr. Emily Johnson</h2>
              <ul>
                <li>Experience: 10 years</li>
                <li>
                  Bio: Dr. Emily Johnson is a skilled interventional
                  cardiologist who specializes in minimally invasive procedures
                  to treat heart diseases. She is committed to delivering
                  personalized care to her patients.
                </li>
              </ul>
            </div>
          </div>
          <div className="docters-address-neurology">
            <h2>Neurology Department:</h2>
            <div className="docters-address-neurology-docter">
              <h2>Dr. David Brown</h2>
              <ul>
                <li>Experience: 12 years</li>
                <li>
                  Bio: Dr. David Brown is a renowned neurologist known for his
                  expertise in diagnosing and treating neurological disorders.
                  He is dedicated to providing comprehensive care and improving
                  the quality of life for his patients.
                </li>
              </ul>
              <h2>Dr. Sarah Martinez</h2>
              <ul>
                <li>Experience: 8 years</li>
                <li>
                  Bio: Dr. Sarah Martinez is a compassionate pediatric
                  neurologist with a focus on providing specialized care to
                  children with neurological conditions. She is committed to
                  ensuring the well-being of her young patients.
                </li>
              </ul>
            </div>
          </div>
          <div className="docters-address-neurology">
            <h2>Dentistry Department:</h2>
            <div className="docters-address-neurology-docter">
              <h2>Dr. Michael Johnson</h2>
              <ul>
                <li>Experience: 10 years</li>
                <li>
                  Bio: Dr. Michael Johnson is a skilled dentist known for his
                  expertise in general dentistry services. He is committed to
                  providing personalized care and promoting good oral health for
                  his patients.
                </li>
              </ul>
              <h2>Dr. Emily White</h2>
              <ul>
                <li>Experience: 7 years</li>
                <li>
                  Bio: Dr. Emily White is a caring pediatric dentist who
                  specializes in providing dental care to children of all ages.
                  She is dedicated to creating a positive and comfortable dental
                  experience for her young patients.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="docters-div-button">
        <div className="docters-div-button-appoinment-btn">
          <Link to="/appoinment" className="docters-div-button-appoinment-btn-link" onClick={scrollclick} >
            Book Appoinment
          </Link>
        </div>
        <div className="docters-div-button-home">
          <Link to="/" className="docters-div-button-home-link" onClick={scrollclick} >
            Home
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Docters;
