import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import img4 from "./assets/Image/image4.png";
import Red from "./assets/Image/RedCross.svg";
import Blue from "./assets/Image/BlueCross.svg";
import "./assets/CSS/Login.css";

export default function Login() {
  // const 

  return (
    <>
      <nav  style={{ backgroundColor: "W" }}>
        <h1 className="Login-title">Med U Lance</h1>
        <Link to='/adminlogin'><button type="button" className="Nav-login-btn1">Admin Login</button></Link>
        <h1 className="Login-Nav-Home">About</h1>
        <h1 className="Login-Nav-Service">Contact Us</h1>
      </nav>
      <div className="Login-Leftside">
        <p className="Login-Main-title">Book Ambulance Service with Best Facility</p>
        <img src={img4} className="Login-img1" alt="Ambulance service" />
      </div>
      <div className="Login-Rightside">
        <p className="Login-Side-Title">Login to Med U Lance</p>
        <input className="Login-Search" type='search' placeholder="Enter your number" aria-label="Search" />
        <p className="Login-Description">Login with your otp</p>
        <Link to="/book"><button type="button" className="Login-btn1">Submit</button></Link>
        <img src={Red} className="Login-Red" alt="Red Cross" />
        <img src={Blue} className="Login-Blue" alt="Blue Cross" />
      </div>
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-4">
                <div className="footer-pad">
                  <h4>Med U Lance</h4>
                  <p>Med U Lance provides dedicated medical transportation units equipped with trained professionals and essential medical equipment. They are designed to provide immediate medical assistance and transport patients to medical facilities, ensuring timely and efficient emergency care.</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="footer-pad1">
                  <h4>About</h4>
                  <ul className="list-unstyled">
                    <li><a href="#">Who we are</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Patient Review</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer-pad2">
                  <h4>Reach Us</h4>
                  <ul className="list-unstyled">
                    <li><a href="#">Partner With Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">Work with us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 copy">
                <p className="text-center">© Copyright 2023 - Company Name. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
