import React from "react";
import "./loginstyle.css";

function StaffLogin() {
    return (
      // student
      <div className="Login">
       <div class="login_user">
    <div class="login_container">
      <div class="login_wrapper">
        <div class="title"><span>Staff Login</span></div>
        <form action="#" className="login_form">
          <div class="row">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Staff Name" minLength={7} required/>
          </div>
          <div class="row">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" minLength={8} required/>
          </div>
          
          <div class="row button">
            {/* <link to="/Classes"><input type="submit" value="Login" /></link> */}
          </div>
         
        </form>
      </div>
    </div>
  </div>
  </div>


     
    );
  }
export default StaffLogin;