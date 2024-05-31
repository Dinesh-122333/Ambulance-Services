import React , { useState } from "react";
import login_img from "../assets/Image/login_Amb.jpg";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Login() {
    const [showOTP, setShowOTP] = useState(false);
    return (
<div className="d-flex justify-content-center align-items-center m-5">
            <div className="p-5 m-5 shadow bg-body" style={{ borderRadius: '10px' }}>
                <div className="d-flex">
                    <div className="w-50" style={{ marginRight: '20px' }}>
                        <img src={login_img} className="w-100" alt="Login Illustration" />
                    </div>
                    <div className="w-50" style={{ marginLeft: '20px' }}>
                        {!showOTP ? (
                            <>
                                <h1 className="pb-3 main_text_color">Login</h1>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        style={{ paddingTop: '35px' }}
                                    />
                                    <label
                                        htmlFor="floatingInput"
                                        className="login-placeholder"
                                        style={{ color: '#ff6464' }}
                                    >
                                        Email address
                                    </label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        style={{ paddingTop: '35px' }}
                                    />
                                    <label
                                        htmlFor="floatingPassword"
                                        className="login-placeholder"
                                        style={{ color: '#ff6464' }}
                                    >
                                        Password
                                    </label>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <p className="main_text_color col">Forget password</p>
                                        <p
                                            className="main_text_color col-md-4"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => setShowOTP(true)}
                                        >
                                            Try another way
                                        </p>
                                        <p>Won't Registered <span style={{color : 'blueviolet' , cursor: 'pointer'}}>Register Soon</span></p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-5">
                                    <button className="px-3 py-2 rounded-pill login-button">Login</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h1 className="pb-3 main_text_color">OTP Verification</h1>
                                <div className="form-floating mb-3">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="floatingPhone"
                                        placeholder="Phone Number"
                                        style={{ paddingTop: '35px' }}
                                    />
                                    <label
                                        htmlFor="floatingPhone"
                                        className="login-placeholder"
                                        style={{ color: '#ff6464' }}
                                    >
                                        Phone Number
                                    </label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingOTP"
                                        placeholder="OTP"
                                        style={{ paddingTop: '35px' }}
                                    />
                                    <label
                                        htmlFor="floatingOTP"
                                        className="login-placeholder"
                                        style={{ color: '#ff6464' }}
                                    >
                                        OTP
                                    </label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-5">
                                    <button className="px-3 py-2 rounded-pill login-button">Verify OTP</button>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-3">
                                    <p
                                        className="main_text_color"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setShowOTP(false)}
                                    >
                                        Email Verification
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
