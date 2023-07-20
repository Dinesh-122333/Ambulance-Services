import { Link } from "react-router-dom"
import img4 from "./assets/Image/image4.png"
import Red from "./assets/Image/RedCross.svg"
import Blue from "./assets/Image/BlueCross.svg"
import "./assets/CSS/adminlogin.css"
/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AdminLogin(){
    return(
        <><nav>
            <h1 className="Login-title">
                Med U Lance
            </h1>
            <h1 className="AdminLogin-Nav-About">
                About
            </h1>
            <h1 className="AdminLogin-Nav-Contact">
                Contact Us
            </h1>
        </nav>
        <div className="Login-Leftside">
                <p className="Login-Main-title">Already have account?
                                                Look into the details</p>
                <img src={ img4 } className="Login-img1"/>         
                

            </div>
            <div className="Login-Rightside">
                <p className="Login-Side-Title">Login in Med U Lance</p>
                <input className="Login-Search" type='Search' placeholder="Enter your Email address " aria-label="Search"/>
                <p className="Login-Description">
                Enter your Registered email address
                    </p>
                    <input className="Login-Search" type='Search' placeholder="Enter password " aria-label="Search"/>
                    <Link to="/adminpage"><button type="button" className="Login-btn1 ">Submit</button></Link> 
                    <img src={ Red } className="Login-Red"/>
                    <img src={ Blue } className="Login-Blue"/>

                </div>
                                <footer className="mainfooter" role="contentinfo">  
    <div className="footer-middle">  
    <div className="container">  
      <div className="row">  
        <div className="col-lg-5 col-md-4">  
          <div className="footer-pad">  
            <h4>Med U Lance</h4>  
                <p>
                Med U Lance is the ambulance services dedicated medical transportation units equipped with 
                trained professionals and essential medical equipment. They are designed to 
                provide immediate medical assistance and transport patients to medical facilities, 
                ensuring timely and efficient emergency care.
                </p> 
          </div>  
        </div>  
        <div className="col-md-3 col-sm-4 ">  
          <div className="footer-pad1">  
            <h4>About
            </h4>  
            <ul className="list-unstyled">  
              <li><a href="#">Who we are</a> </li>  
              <li><a href="#">Blog</a></li>  
              <li><a href="#">FAQs</a></li>  
              <li><a href="#">Patient Review</a></li>    
            </ul>  
          </div>  
        </div>  
        <div className="col-md-3 col-sm-6">  
          <div className="footer-pad2">  
            <h4> Reach Us </h4>  
            <ul className="list-unstyled">  
              <li> <a href="#"> Partner With Us </a> </li>  
              <li> <a href="#"> Contact Us</a> </li>  
              <li> <a href="#">Location</a> </li>  
              <li> <a href="#"> Work with us </a> </li>  
                
            </ul>  
          </div>  
        </div>  
          {/* <!-- <div class="col-md-3">  
              <h4> Follow Us </h4>  
              <ul class="social-network social-circle">  
               <li> <a href="#" class="icoFacebook" title="Facebook"> <i class="fa fa-facebook"> </i> </a> </li>  
               <li> <a href="#" class="icoLinkedin" title="Linkedin"> <i class="fa fa-linkedin"> </i> </a> </li>  
      <li> <a href="#"> <i class="fa fa-youtube" aria-hidden="true"> </i> </a> </li>  
              </ul>               
      </div>   --> */}
      </div>  
      <div className="row">  
      <div className="col-md-12 copy">  
      <p className="text-center"> © Copyright 2023 - Company Name.  All rights reserved. </p>  
      </div>  
      </div>  
    </div>  
    </div>  
  </footer>
                </>
    )
}