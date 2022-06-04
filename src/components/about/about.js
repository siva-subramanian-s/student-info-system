import { Link } from 'react-router-dom';
import React from "react";
import "./about.css";
function About() {

    return (
        <div className="About">
            <main className="about_container">
                <header id="body_header">
                    <h1 className="heading-1">Mini Project Website</h1>
                    <h2 className="heading-2">Powered by Technology</h2>
                    <p className="description-text">
                        Our project provides tools to ease student data manipulation.
                    </p>
                </header>
                <div id="about_card_container">
                    <div id="col-1">
                        <div id="about_card_1" className="about_card">
                            <h2 className="heading-2">Guide</h2>
                            <p className="description-text">Administration to reach a destination. <br /><br />Tmt. P Tharani</p>
                            <img src="https://www.dropbox.com/s/8du2nx9afplvh8i/icon-supervisor.svg?raw=1" alt="supervisor icon" />
                        </div>
                    </div>
                    <div id="col-2">
                        <div id="about_card_2" className="about_card">
                            <h2 className="heading-2">Motto</h2>
                            <p className="description-text">Offer better communication, faster attendance management and streamlined
                                activities to the respective classrooms.</p>
                            <img src="https://www.dropbox.com/s/t3110vdlwn9btzj/icon-team-builder.svg?raw=1" alt="team builder icon" />
                        </div>
                    </div>
                    <div id="about_card_3" className="about_card">
                        <h2 className="heading-2">Team</h2>
                        <p className="description-text">S Siva Subramanian <br />K Shahul Hameed
                            Mansoor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br /> S Gowtham
                        </p>
                        <img src="https://www.dropbox.com/s/y0lhucvdi8q6pnj/icon-karma.svg?raw=1"
                         alt="altar icon" />
                    </div>

                    <div id="col-3">
                        <div id="about_card_4" className="about_card">
                            <h2 className="heading-2">GOVERNMENT COLLEGE OF ENGINEERING- SALEM 11</h2>
                            <p className="description-text"> DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING 
                            </p>
                            <img src="https://www.dropbox.com/s/oieegpnnmynmrbm/icon-calculator.svg?raw=1" alt="calculator icon" />
                        </div>
                    </div>
                </div>
            </main>
            <div class="wrapper">
                <Link to="https://google.com">
                    <div class="icon facebook">
                        <div class="tooltip">
                            Facebook
                        </div>
                        <span><i class="fab fa-facebook-f"></i></span>
                    </div>
                </Link>

                <Link to="https://google.com">
                    <div class="icon twitter">
                        <div class="tooltip">
                            Twitter
                        </div>
                        <span><i class="fab fa-twitter"></i></span>
                    </div>
                </Link>

                <Link to="https://google.com">
                    <div class="icon instagram">
                        <div class="tooltip">
                            Instagram
                        </div>
                        <span><i class="fab fa-instagram"></i></span>
                    </div>
                </Link>
                <Link to="https://google.com">
                    <div class="icon github">
                        <div class="tooltip">
                            Github
                        </div>
                        <span><i class="fab fa-github"></i></span>
                    </div>
                </Link>
                <Link to="https://google.com">
                    <div class="icon youtube">
                        <div class="tooltip">
                            YouTube
                        </div>
                        <span><i class="fab fa-youtube"></i></span>
                    </div>
                </Link>
                
            </div >
            <div className="footer">
                <footer>
                    <p className="description-text">
                        Centralized <Link to="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Database System</Link>.
                        To Manage <Link to="/">Student Information</Link>.
                    </p>
                </footer>
            </div>
        </div >
    );
}

export default About;