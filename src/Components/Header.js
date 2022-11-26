import React from "react";
import logo from "../Assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {

  const user = JSON.parse(localStorage.getItem("user"));


function logout() {
    localStorage.clear();
    window.location.href = "/";
  }




  return (
    <div className="header">
      <Link to="/">
      <div className="logo" >
        <img id="logo_image" src={logo} alt="logo" />

      </div>
      </Link>
   
      <div className="nav_bar">
       
        <Link to="/sports" style={{ textDecoration: 'none' }}>
          <li>
            <div className="nav_dot"></div>SportsNews
          </li>
        </Link>
        <Link to="/podcasts" style={{ textDecoration: 'none' }}>
          <li>
            <div className="nav_dot"></div>Podcasts
          </li>
        </Link>
        <Link to="/breakingnews" style={{ textDecoration: 'none' }}>
          <li>
            <div className="nav_dot"></div>Breaking News
          </li>
        </Link>
        <Link to="/contact_us" style={{ textDecoration: 'none' }}>
          <li>
            <div className="nav_dot"></div>Contact Us
          </li>
        </Link>
      </div>


{user ? <button onClick={logout} id="header_button" >Logout</button> : <Link to="/login"><button id="header_button" >Login</button></Link>}




    </div>
  );
}

export default Header;
