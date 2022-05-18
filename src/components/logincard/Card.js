import { Link } from 'react-router-dom';
import React from "react";
// import ReactDOM from "react-dom";
import studentlogo from "../../src-images/images/student.jpg";
import stafflogo from "../../src-images/images/staff3.jpg";
import adminlogo from "../../src-images/images/admin3.jpg";
import pfp from "../../src-images/images/pfp.png";

function Card(props) {
  return (
    <div className="inside-login-card">

      <ul className="cards">
        <li>
          <Link to="/login-student" class="card">
            <img src={studentlogo} class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns={studentlogo}><path /></svg>
                <img class="card__thumb" src={pfp} alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">STUDENT</h3>
                  <span class="card__status">Reg.No & password</span>

                </div>
              </div>
              <p class="card__description">Handles Bio-Data And Academic Documents</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/login-staff" class="card">
            <img src={stafflogo} class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                <img class="card__thumb" src={pfp} alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">STAFF</h3>
                  <span class="card__status">StaffName & password</span>

                </div>
              </div>
              <p class="card__description">Manages Attendance and Student Database</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/login-admin" class="card">
            <img src={adminlogo} class="card__image" alt="" />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                <img class="card__thumb" src={pfp} alt="" />
                <div class="card__header-text">
                  <h3 class="card__title">ADMIN</h3>
                  <span class="card__status">AdminName & password</span>

                </div>
              </div>
              <p class="card__description">Master Of All The Database</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Card;


{/* <Link to={/login-props.link}>
                <div className="login-card-img">
                    <img src={props.img} alt="Student" />
                </div>
                <div className="login-card-content">
                    <h3><p>{props.Name}</p></h3>
                </div>
            </Link> */}