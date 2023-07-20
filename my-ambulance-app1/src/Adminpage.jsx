/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars


import "./assets/CSS/adminpage.css"
import img1 from "./assets/Image/Admin-icon1.svg"
import img2 from "./assets/Image/Admin-icon2.svg"
import img3 from "./assets/Image/Admin-icon3.svg"
import chat from "./assets/Image/Chat.svg"
import help from "./assets/Image/Help.svg"
import contact from "./assets/Image/Contact.svg"
import profile from "./assets/Image/Profile.svg"
import React, { useState, useEffect } from 'react';

export default function Adminpage(){
    const [navColor, setNavColor] = useState('transparent');

  const changeNavbarColor = () => {
    const scrollY = window.scrollY;

    if (scrollY >= 80) {
      setNavColor('#000');
    } else {
      setNavColor('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);
  
    return(
        <>
        <nav className={`navbar2 ${navColor}`}
        style={{ backgroundColor: navColor }}>
            <h1 className="Admin-nav-title">Med U Lance</h1>
            <button type="button" className="Admin-nav-btn">Logout</button>
        </nav>
        <div className="container-1">
        <div className="Admin-container">
            <img src={img1} className="tot-book-img"/>
            <h3 className="Admin-header1">Total Booking</h3>
            <h1>120,078</h1>
            <p className="Pad-1">10.9% </p><p className="Pad-2">+16K views</p>
        </div>
        <div className="Admin-description-1">
            <h3>120,078 active bookings today click to see more details</h3>
        </div>
            
        </div>
        <div className="container-2">
        <div className="Admin-container">
            <img src={img2} className="tot-book-img"/>
            <h3 className="Admin-header2">Upcoming Orders</h3>
            <h1>120,078</h1>
            <p className="Pad-1">20.9% </p><p className="Pad-2">+543K views</p>
        </div>
        <div className="Admin-description-2">
            <h3>Click to see more details on people who couldn’t finish their booking
</h3>
        </div>
        
            
        </div>
        <div className="container-3">
        <div className="Admin-description-3">
            <h3>17,821 logins today click to see more details</h3>
        </div>
        <div className="Admin-container-d">

            <img src={img3} className="tot-book-img"/>
            <h3 className="Admin-header1">Login</h3>
            <h1>17.821</h1>
            <p className="Pad-1">1.9% </p><p className="Pad-2">+206 views</p>
        </div>
        
               
            
        </div>
        <div className="container-4">
        <div className="Admin-description-4">
            <h3>1,003 users cancelled their service, see why!</h3>
        </div>
        <div className="Admin-container-d">

           
            <h3 className="Admin-header1">Cancelled</h3>
            <h1>1003</h1>
            <p className="Pad-1">1rrr% </p><p className="Pad-2">+5K views</p>
        </div>
        
        </div>
        <div className="d-container">
            <div className="Admin-content">
                <img src={ chat } className="Admin-img"/>
                <h1 className="Admin-Chat">Chat</h1>
            </div>
            <div className="Admin-content">
                <img src={ help } className="Admin-img"/>
                <h1 className="Admin-Chat">Help</h1>
            </div>
            <div className="Admin-content">
                <img src={ contact } className="Admin-img"/>
                <h1 className="Admin-Chat">Contact Us</h1>
            </div>
            <div className="Admin-content">
                <img src={ profile } className="Admin-img"/>
                <h1 className="Admin-Chat">Profile</h1>
            </div>
        </div>
        <div className="Admin-quries">
            <h1 className="query-tit">Customer Queries and Ratings</h1>
            <h2 className="query-quetion">How can I book 2 Ambulance at a time?</h2>
            <h2 className="query-quetion">How to cancel booking?</h2>
            <h2 className="query-quetion">what is the payment mode?</h2>
            <h2 className="query-quetion">How can I book 2 Ambulance at a time?</h2>
            <a href="" className="See">see more...</a>
        </div>
        </>
    )
}