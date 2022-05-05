import React from "react";
import ReactDOM from "react-dom";
import logo from "../../src_images/home/sdb logo.png";
import "./home.css"

function Home() {
    return (
        <div className="home">
            <div className="sidebar close">
                <div className="logo-details">
                    <i><img src={logo} alt="logo" width="60" height="58" /></i>

                    <span className="logo_name">Menu</span>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#">
                            <i className='bx bx-home'></i>
                            <span className="link_name">Home</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Home</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="icon-link">
                            <a href="#">
                                <i className='bx bx-bulb'></i>
                                <span className="link_name">Solutions</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow'></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="#">Solutions</a></li>
                            <li><a href="#">Payments API</a></li>
                            <li><a href="#">Accounts APi</a></li>
                            <li><a href="#">Finance API</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="icon-link">
                            <a href="#">
                                <i className='bx bx-news'></i>
                                <span className="link_name">Posts</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow'></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="#">Posts</a></li>
                            <li><a href="#">Recent</a></li>
                            <li><a href="#">Trending</a></li>
                            <li><a href="#">Most Visited</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="icon-link">
                            <a href="#">
                                <i className='bx bx-file-find'></i>
                                <span className="link_name">Insights</span>
                            </a>
                            <i className='bx bxs-chevron-down arrow'></i>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="#">Insights</a></li>
                            <li><a href="#">Money Movement</a></li>
                            <li><a href="#">Enterprise Spotlight</a></li>
                            <li><a href="#">Financial Burnout</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bxs-credit-card' ></i>
                            <span className="link_name">Pricing</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Pricing</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-bar-chart'></i>
                            <span className="link_name">Chart</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Chart</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-compass'></i>
                            <span className="link_name">Explore</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Explore</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-cog'></i>
                            <span className="link_name">Setting</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Setting</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="profile-details">
                            <div className="profile-content">
                                <img src="https://github.com/Sacsam005/dropdown-menu/blob/master/image/profile.png?raw=true" alt="profileImg" />
                            </div>
                            <div className="name-job">
                                <div className="profile_name">Siva</div>
                                <div className="job">Student Dev</div>
                            </div>
                            <i className='bx bx-log-out'></i>
                        </div>
                    </li>
                </ul>
            </div>
            <section className="home-section">
                <div className="home-content">
                    <a onClick={navbar}><i  className='bx bx-menu'></i></a>
                    <span className="text">Student Data Bank</span>
                <button id="login-btn"><a href="/Login-card">Login</a></button>
                </div>
            </section>
            
        </div>
    )
}
function navbar() {
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click", (e) => {
            let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
            arrowParent.classList.toggle("showMenu");
        });
    }
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bx-menu");
    console.log(sidebarBtn);
    sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close")
    });
}
export default Home;
