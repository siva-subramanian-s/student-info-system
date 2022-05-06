import React from "react";
import "./admin.css"

function Admin() {
    return(
        <div className="Admin">
            <div id="admin_header"><h1>ADMIN DASHBOARD</h1></div>
      <div className="admin-wrapper">
         <input type="checkbox" id="btn" hidden />
         <label for="btn" className="admin-menu-btn">
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
        <div className="admin-box">
           <div className="admin-front-face">
              <div className="admin-icon">
                 <i className="fas fa-code"></i>
              </div>
              <span>STUDENTS COUNT</span>
           </div>
           <div className="admin-back-face">
              <span>Total no of count:</span>              
           </div>
        </div>
        
        <div className="admin-box">
           <div className="admin-front-face">
              <div className="admin-icon">
                 <i className="fas fa-chart-line"></i>
              </div>
              <span>STAFFS COUNT</span>
           </div>
           <div className="admin-back-face">
              <span>Total no of count:</span>
             
           </div>
        </div>
        <div className="admin-box">
           <div className="admin-front-face">
              <div className="admin-icon">
                 <i className="fas fa-rocket"></i>
              </div>
              <span>SUBJECTS COUNT</span>
           </div>
           <div className="admin-back-face">
              <span>Total no of count:</span>
             
           </div>
        </div>
     </div>
        </div>
    );
}

export default Admin;