import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Nav() {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow bg-body rounded">
        
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col">
                    <a className="navbar-brand" href="#"><h3 className="title-color pt-3" >Med U Lance</h3></a>
                    </div>
                
                </div>
            </div>
            
            <button className="navbar-toggler ms-auto " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="me-5 ">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5 ">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">About</a>
                    </li>
                </ul>
                </div>
                
                <div class=" d-grid gap-3 d-md-flex justify-content-md-end">
                <button className="book rounded px-3 py-2">Book now</button>
                <button className="login rounded px-3 py-2">Login</button>
                </div>
                
            </div>
        </div>
        </nav>
        </>
    );
}
