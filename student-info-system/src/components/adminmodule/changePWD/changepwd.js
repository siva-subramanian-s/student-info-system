import React from "react";
import "./chagePwd.css"

function ChangePWD() {
    return(
    <div className="changepassword">
         <div id="admin_header"><h1>ADMIN DASHBOARD</h1></div>
         <div className="admin-wrapper">
       <input type="checkbox" id="btn" hidden />
       <label htmlFor="btn" className="admin-menu-btn">
       <i className="fas fa-bars"></i>
       <i className="fas fa-times"></i>
       </label>
       <nav id="sidebar">
          <div className="admin-title">
             Side Menu
          </div>
          <ul className="admin-list-items">
          <li><a href="/admin-dashboard"><i className="fas fa-home"></i>Home</a></li>
               <li><a href="/admin-student-edit"><i className="fas fa-sliders-h"></i>Students edit</a></li>
               <li><a href="/admin-staff-edit"><i className="fas fa-address-book"></i>Staffs edit </a></li>
               <li><a href="/admin-subjects-edit"><i className="fas fa-cog"></i>Subjects edit</a></li>
               <li><a href="/change-password"><i className="fas fa-stream"></i>Change Password</a></li>
               <li><a href="/"><i className="fas fa-user"></i>Log out</a></li>
          </ul>
       </nav>
    </div>
    
<div className="admin-wrapper1">
        <div className="admin-container">
            <div className="admin-simple-cards">
             
              <div className="admin-items">
                <h4>NEW PASSWORD</h4>
                <div className="admin-cards-content">
                  <form>
                    <input id="input_reg" type="text" placeholder="Enter Password"/>
                    <input id="input_reg" type="text" placeholder="Re-Enter Password" style={{marginTop: "2.5em"}} />
                    <input id="input_sub_add" type="submit" value="CHANGE" />
                </form>
                </div>
              </div>

        </div>
      </div>
   </div>
        </div>
    )
}

export default ChangePWD;