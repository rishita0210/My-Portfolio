import React from 'react'
import Logo from '../../assets/logo.png';
import './Navbar.css';
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div>
       <div className="navbar-holder">
        <div className="navbar-logo">
            
        </div>
        <div className="navbar-iteams">
            <Link className="navbar-iteams-list">Home</Link>
            <Link className="navbar-iteams-list">About</Link>
            <Link className="navbar-iteams-list">Portfolio</Link>
            <Link className="navbar-iteams-list">Contact</Link>
            

        </div>

       <div className="contact-button">
            <button className='navbar-button'>Hire Me</button>
        </div>
       </div>
      
    </div>
  )
}

export default Navbar
