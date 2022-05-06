import React from "react";
import "./loginstyle.css";

function StudentLogin() {
    return (
      <div className="Login">
       <div className="login_user">
      <div className="login_container">
      <div className="login_wrapper">
        <div className="title"><span>Student Login</span></div>
        <form action="#" className="login_form">
          <div className="row">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Roll no." minLength={7} required />
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" minLength={8} required/>
          </div>
          
          <div className="row button">
            <link to="/bio-data"><input type="submit" value="Login" /></link>
          </div>
        </form>
      </div>
    </div>
    </div>
  </div>


     
    );
  }
export default StudentLogin;