import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../src-images/home/logo2.png";
import "./home.css";

function Home() {
  return (<div className="home" >
    <header>
      <nav className="navbar">
        <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
        <ul id="ul-navigation" className="nav-ul" data-visible="false">
          <li className="nav-li"><Link to="/">Home</Link></li>
          <li className="nav-li"><Link to="/news">Newsletter</Link></li>
          <li className="nav-li"><Link to="/login_card">Sign In</Link></li>
          <li className="nav-li"><Link to="/about">About</Link></li>
        </ul>
        <button className="mobile-toggle" aria-controls="ul-navigation" aria-expanded="false" >
          <span className="sr-only">Menu</span>
        </button>
      </nav>
    </header>

    <div className="hero-background">
      <div className="hero-section-wrapper">
        <p className="hero-text">Centralized</p>
        <h1 className="hero-header">Database System<br /> to Manage<br /> Student Information</h1>
          <button className="hero-button">
            <span><Link to="/login_card">logon dashboard</Link></span>
          </button>
        </div>
      </div>
    </div>
    );
}
    export default Home;