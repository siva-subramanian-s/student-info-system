import React from "react";
import "./loginstyle.css";

function AdminLogin() {
    return (
      // student
      <div className="Login">
       <div class="login_user">
    <div class="login_container">
      <div class="wrapper">
        <div class="title"><span>Admin Login</span></div>
        <form action="#">
          <div class="row">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Admin" minLength={7} required/>
          </div>
          <div class="row">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" minlenght={8} required/>
          </div>
          
          <div class="row button">
            <input type="submit" value="Login"/>
          </div>
         
        </form>
      </div>
    </div>
  </div>
  </div>


     
    );
  }
export default AdminLogin;