
import './assets/CSS/About.css'

import { Link } from "react-router-dom"
export default function About(){
    return(
        <>
        <nav className="Adminpage-nav">
                <h1 className="title">
                    Med U Lance
                </h1>
                <h1 className="Nav-Home">
                <Link to='/' className='home-front1'>Home</Link>
                </h1>
                <h1 className="Nav-Service">
                <Link to='/services' className='service-front'>Services</Link> 
                </h1>
                 <h1 className="Nav-About1">
                 <Link to='/about' className='about-front'>About</Link>
                </h1>
                <Link to ="/book"><button type="button" className="Nav-btn1 ">Book Now</button></Link>
                <Link to='/login'><button type="button" className="Nav-btn2 ">Login</button></Link>

            </nav>
            <div>
                <h1 className='What'>What is <a className='inner-tit'>Med U Lance</a></h1>
                <h3 className='What-description'>India's first, GPS based technology platform for fast and reliable first point medical attention. 
                    With an increasing emphasis on promoting independent living today, having access to the nearest 
                    ambulance to you can provide much needed peace of mind in a worst case scenario.</h3>    
            </div>
            <div className='container-problem'>
                <h1 className='problem-tit'>Problem</h1>
                <p className='problem-description'>In 2018, 1,51,000 fatalities were caused due to road accidents. 50% lives of road accident victims 
                    could have been saved if timely assistance was made available to them. Moreover, 40%-60% deaths in 
                    India are preventable. The major issues faced are -</p>
                
                <li>Severe lack of awareness and facility of first aid communication</li>
                <li>High response time</li>
                <li>Inability of a person to have a top of mind recall of emergency numbers</li>
                <li>Large number of calls being missed</li>
                <li>No prominent national entity in emergency response</li>

                <p className='problem-end-description'>Since the COVID-19 outbreak, panic among people and lack of awareness about emergency services.</p>
            </div>
            <div className='container-solution'>
                <h1 className='solution-tit'>Solution</h1>
                <p className='solution-description'>Medulance Healthcare is India's first & leading comprehensive emergency response service provider, 
                extensively dealing in the Ambulatory Services. We provide -</p> 

                <li>End to end emergency response service</li>
                <li>GPS enabled high quality ambulances</li>
                <li>Emergency Management Technology</li>
                <li>Trained Drivers and certified Paramedics</li>
                <li>Covering 22 cities in India (All metros & Major tier 2 cities)</li>
                <li>Dedicated Helpline Number</li>

            </div>
            <div className='container-Location'>
                <h1 className='location-tit'>Location</h1>
                <div className='location1'>
                <li className='location'>Chennai</li>
                    <li className='location'>Coimbatore</li>
                    <li className='location'>Madurai</li>
                </div>
                    <div className='location2'>
                    <li className='location'>Thanjavur</li>
                    <li className='location'>Kaniyakumari</li>
                    <li className='location'>Salem</li>
                    </div>
                    
                <div className='location3'>
                <li className='location'>Hyderabad</li>
                    <li className='location'>Bangalore</li>
                    <li className='location'>Cochin</li>
                </div>
                
                <div className='location4'>
                <li className='location'>Thiruvandrum</li>
                    <li className='location'>Tirupathi</li>
                    <li className='location'>Guntoor</li>
                </div>
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