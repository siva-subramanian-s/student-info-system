import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./admin.css"
import {useAuth} from "../../contexts/AuthContext"

function Admin() {
      const [error, setError] = useState("")
      const Navigate = useNavigate()
      const { logout } = useAuth()


      async function handleLogout() {         
      setError("")
      try {
         console.log("inside ");
         await logout()
         Navigate("/");
      } catch {
         console.log("logged out successfully catch");
         setError("Failed to log out")
      }
   }


   return (
      <div className="Admin">
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
                  <li><Link to="/admin-dashboard"><i className="fas fa-home"></i>Home</Link></li>
                  <li><Link to="/admin-student-edit"><i className="fas fa-sliders-h"></i>Students edit</Link></li>
                  <li><Link to="/admin-staff-edit"><i className="fas fa-address-book"></i>Staffs edit </Link></li>
                  <li><Link to="/admin-subjects-edit"><i className="fas fa-cog"></i>Subjects edit</Link></li>
                  <li><Link to="/change-password"><i className="fas fa-stream"></i>Change Password</Link></li>
                  <li><button className="logout-btn" onClick={handleLogout}><i class="fas fa-user"></i>Log out</button></li>
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