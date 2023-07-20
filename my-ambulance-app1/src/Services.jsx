
import "./assets/CSS/Services.css"
import { Link } from "react-router-dom"

export default function Service(){
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
        </>
    )
} 