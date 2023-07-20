import {  Link } from 'react-router-dom';


import "./assets/CSS/frontpage.css"
import img1 from "./assets/Image/image1.png"
import img2 from "./assets/Image/image2.png"
import img3 from "./assets/Image/image3.png"
import icon1 from "./assets/Image/icon1.svg"
import icon2 from "./assets/Image/icon2.svg"
import icon3 from "./assets/Image/icon3.svg"
export default function Frontpage(){
    return(
        <><div>
            <nav className="Adminpage-nav">
                <h1 className="title">
                    Med U Lance
                </h1>
                <h1 className="front-Nav-Home">
                    <Link to="/" className='home-front'>Home</Link>
                </h1>
                <h1 className="front-Nav-Service">
                    Service
                </h1>
                 <h1 className="front-Nav-About">
                 <Link to='/about' className='About-front'>About</Link>
                </h1>
                <Link to ="/book"><button type="button" className="Nav-btn1 ">Book Now</button></Link>
                <Link to='/login'><button type="button" className="Nav-btn2 ">Login</button></Link>
            </nav>
            
        
            
        </div>
        <div className="mainpage">
                <h3 className="main-title">Get Med U Lance</h3>

                <p className="main-subtitle">For Emergency medical Service</p>
                <Link to ="/book"><button type="button" className="main-btn1 ">Book Now</button></Link>
                <p className="main-or">or</p>
                <Link to=""><button type="button" className="main-btn2 ">Call Us</button></Link>
                
            </div>
            <div>
                <img src={ img1 } className="main-image-1"/>
                </div>
                <div>
                    <h1 className="main2-title">
                    Our Other Medical Services
                    </h1>
                    <p className="main2-description">We are commited to provise Excellent and Critical care  service in Emergencies, 
                    We feel honoured and previledged to work for you!</p>
                    <img src={img2} alt="" className="main2-image1" />
                    <img src={img3} alt="" className="main2-image2" />
                    <img src={img2} alt="" className="main2-image3" />
                    <img src={img3} alt="" className="main2-image4" />
                </div>
                <div className="Front-Why">
                    <h1 className="main3-title">
                        Why Us
                    </h1>
                    <img src={icon1} className="main3-icon1"/>
                    <h1 className="main3-icon1-detial">patient first service</h1>
                    <img src={icon2} className="main3-icon2"/>
                    <h1 className="main3-icon2-detial">Emergency Assistence</h1>
                    <img src={icon3} className="main3-icon3"/>
                    <h1 className="main3-icon3-detial">patient first service</h1>
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