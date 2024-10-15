import { Link, useLocation } from "react-router-dom";
import { Component } from "react";
import Button from "../Button/Button.js";
import './header.css'
import Logo from "../Logo/Logo.js";

const Header = () => {
  return (
      <header>
      <div className="header-container flex-box-between">
        <Logo></Logo>
        <Button></Button>
        <div>
          <div className="header-information flex-box-between">
            {/* <a className="lng-home1" href="">HOME</a> */}
            <Link to="/" className="lng-home1"  >HOME</Link>
            {/* <a className="lng-abo" href="about/about.html">ABOUT</a> */}
            <Link to="/about_us" className="lng-abo"  >ABOUT</Link>
            <a className="lng-WORK" href="registration/registration.html">WORK WITH US</a>
            <a className="lng-CLIENT" href="client/client.html">CLIENT WINS</a>
            <a className="lng-EMPLOYERS" href="employers/employers.html">EMPLOYERS</a>
            <a className="profile123" href="profile/profile.html">👤</a>
          </div>
        </div>
      </div>
    </header>
    );
  }

export default Header;