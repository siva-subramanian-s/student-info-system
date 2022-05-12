import React from "react";
import ReactDOM from "react-dom";
import logo from "../../src-images/home/logo2.png";
import "./home.css";

function Home() {
  return (<div className="home" >
    <header>
      <nav className="navbar">
        <a href="/"><img className="logo" src={logo} alt="logo" /></a>
        <ul id="ul-navigation" className="nav-ul" data-visible="false">
          <li className="nav-li"><a href="/">Home</a></li>
          <li className="nav-li"><a href="/news">Newsletter</a></li>
          <li className="nav-li"><a href="/login_card">Sign In</a></li>
          <li className="nav-li"><a href="/about">About</a></li>
        </ul>
        <button className="mobile-toggle" aria-controls="ul-navigation" aria-expanded="false">
          <span className="sr-only">Menu</span>
        </button>
      </nav>
    </header>

    <div className="hero-background">
      <div className="hero-section-wrapper">
        <p className="hero-text">Centralized</p>
        <h1 className="hero-header">Database System<br /> to Manage<br /> Student Information</h1>
          <button className="hero-button">
            <span>logon dashboard</span>
          </button>
        </div>
      </div>
    </div>
    );
}
    export default Home;