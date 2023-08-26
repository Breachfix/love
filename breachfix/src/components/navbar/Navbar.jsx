import React, { useContext } from 'react'
import "./navbar.scss"
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
  const[isScrolled, setIsScrolled]= useState ( false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () =>{
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  
  return (
    <nav>
         <div className= {isScrolled ? "navbar scrolled" :"navbar"}>
      <div className="container">
        <div className="left">
        
          <Link to = "/" className='link' >
    <img src="https://firebasestorage.googleapis.com/v0/b/joyful-a1987.appspot.com/o/breachfix%20log%20.svg?alt=media&token=fe244c7f-844f-4a3e-bbca-70e809a43515"
           alt="" 
          />
          </Link>
         

          <Link to = "/series" className='link hideOnMobile' >
          <span className="navbarmainLinks">Series</span>
          </Link>

          <Link to = "/movies" className='link hideOnMobile'>
          <span className="navbarmainLinks">Movies</span>
          </Link>
          <span className='hideOnMobile'>Epic</span>
          <span className='hideOnMobile'>My List</span>

          

        </div>
        <div className="right">
          <Search  className='icon'/>
          <span className='hideOnMobile'>KID</span>
          <Notifications className='icon hideOnMobile'/>
          <img src="https://firebasestorage.googleapis.com/v0/b/joyful-a1987.appspot.com/o/WhatsApp%20Image%202023-08-15%20at%208.08.09%20PM.jpeg?alt=media&token=973c545c-778b-4cd6-84a3-62726d0dfcbb" 
          alt="" 
          />
          <div className="profile">
             <ArrowDropDown className='icon' />
             <div className="options">
              <span> Settings</span>
              <span onClick={() => dispatch(logout())} >Logout</span>

             </div>
          </div>
         
        </div>
        
      </div>

   
    </div>

    <div className="mobile_menu">

<Link to = "/series" className='link ' >
    <span>Series</span>
    </Link>

    <Link to = "/movies" className='link '>
    <span>Movies</span>
    </Link>
   
    <span className=''>My List</span>
</div>
    </nav>
 

    
  )
}

export default Navbar