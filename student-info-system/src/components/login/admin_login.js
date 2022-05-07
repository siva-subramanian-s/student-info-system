import React from "react";
import "./loginstyle.css";

function AdminLogin() {
  return (

    <div className="Login">
      <div className="login_user">
        <div className="login_container">
          <div className="login_wrapper">
            <div className="title"><span>Admin Login</span></div>
            <form action="#" className="login_form">
              <div className="row">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Admin" minLength={7} required />
              </div>
              <div className="row">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" minlenght={8} required />
              </div>
              <div className="row button">
                <a href="/Admin-dashboard"><input type="submit" value="Login" /></a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>



  );
}
export default AdminLogin;