
import { Link } from "react-router-dom"
import "./assets/CSS/book.css"
import location from "./assets/Image/Location.svg"
export default function Bookingpage(){
    return(
        <> <nav>
            <h1 className="Book-title">
                Med U Lance
            </h1>
            <h1 className="Book-Nav-Home">
                Home
            </h1>
            <h1 className="Book-Nav-Services">
                Services
            </h1>
            <h1 className="Book-Nav-About">
                About
            </h1>
            <h1 className="Book-Nav-Contact">
                Contact Us
            </h1>
           
        </nav>
        <div>
            <p className="Book-main">One click and Med U Lance Ambulance comes right at your door for help</p>
            <input className="Book-Search" type='Search' placeholder="" aria-label="Search"/>
            <img src={location} className="Book-location"/>
            <p className="Book-description">Turn on your Live location</p>
            <Link to="/confirm"><button type="button" className="Location-btn1 ">Submit</button></Link>
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