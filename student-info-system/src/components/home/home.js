import React from "react";
import ReactDOM from "react-dom";
import logo from "../../src-images/home/logo2.png";
import "./home.css";

function Home() {
  return (<div className="home" >
    <header>
      <nav class="navbar">
        <a href="/"><img class="logo" src={logo} alt="logo" /></a>
        <ul id="ul-navigation" class="nav-ul" data-visible="false">
          <li class="nav-li"><a href="/">Home</a></li>
          <li class="nav-li"><a href="/news">Newsletter</a></li>
          <li class="nav-li"><a href="/login_card">Sign In</a></li>
          <li class="nav-li"><a href="/about">About</a></li>
        </ul>
        <button class="mobile-toggle" aria-controls="ul-navigation" aria-expanded="false">
          <span class="sr-only">Menu</span>
        </button>
      </nav>
    </header>

    <div class="hero-background">
      <div class="hero-section-wrapper">
        <p class="hero-text">Centralized</p>
        <h1 class="hero-header">Database System<br /> to Manage<br /> Student Information</h1>
          <button class="hero-button">
            <span>logon dashboard</span>
          </button>
        </div>
      </div>
    </div>
    );
}
    export default Home;