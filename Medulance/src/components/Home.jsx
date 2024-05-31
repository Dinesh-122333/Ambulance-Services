import React from "react";
import { Link } from 'react-router-dom';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Nav from "./Nav";


import img1 from "../assets/Image/image1.png"
import img2 from "../assets/Image/image2.png"
import img3 from "../assets/Image/image3.png"
import icon1 from "../assets/Image/icon1.svg"
import icon2 from "../assets/Image/icon2.svg"
import icon3 from "../assets/Image/icon3.svg"

export default function Home(){
    return (
        <>
        
        <div className="container">
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-left">
                    <h3 className="h1">Get Med U Lance</h3>
                    <p className="lead fs-3 fw-normal fst-italic">For Emergency medical Service</p>
                    <div className="d-grid gap-2">
                        <button className="booknow p-3 rounded"><Link to="/book" className="booknow-text">Book Now</Link></button>
                        <p className="my-2">or</p>
                        <button className="call p-3 rounded"><Link to="/" className="call-text">Call Us</Link></button>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <img src={img1} className="img-fluid my-3 w-100" alt="Main" />
                </div>
            </div>
        </div>

      <div className="my-5">
        <h1 className="text-center mb-4">Our Other Medical Services</h1>
        <p className="text-center fs-3 fw-normal mx-5 mb-5">We are committed to provide excellent and critical care services in emergencies. We feel honoured and privileged to work for you!</p>
        <div className="d-flex justify-content-around flex-wrap">
          <img src={img2} alt="Service 1" className="img-fluid m-2" />
          <img src={img3} alt="Service 2" className="img-fluid m-2" />
          <img src={img2} alt="Service 3" className="img-fluid m-2" />
          <img src={img3} alt="Service 4" className="img-fluid m-2" />
        </div>
      </div>
      <div className="my-5">
        <h1 className="text-center mb-4">Why Us</h1>
        <div className="d-flex justify-content-around flex-wrap">
          <div className="text-center m-3">
            <img src={icon1} className="img-fluid mb-2" alt="Patient First" />
            <h5>Patient First Service</h5>
          </div>
          <div className="text-center m-3">
            <img src={icon2} className="img-fluid mb-2" alt="Emergency Assistance" />
            <h5>Emergency Assistance</h5>
          </div>
          <div className="text-center m-3">
            <img src={icon3} className="img-fluid mb-2" alt="Patient First" />
            <h5>Patient First Service</h5>
          </div>
        </div>
      </div>
    </div>
        </>
    )

   
}