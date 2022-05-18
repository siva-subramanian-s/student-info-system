import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./chagePwd.css"

function ChangePWDstudent() {

  const Navigate = useNavigate();
   const [error, setError] = useState("")
   const { logout } = useAuth()

   async function handleLogout() {
      setError("")
      try {
         await logout()
         Navigate("/");
      } catch {
         setError("Failed to log out")
      }
   }
    return(
    <div className="changepassword">
         <div id="admin_header"><h1>STUDENT DASHBOARD</h1></div>
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
          <ul class="list-items_stud">
                  <li><Link to="/student-dashboard"><i class="fas fa-home"></i>Home</Link></li>
                  <li><Link to="/bio-data"><i class="fas fa-sliders-h"></i>Bio Details</Link></li>
                  <li><Link to="/student-dashboard/documents"><i class="fas fa-address-book"></i>Documents </Link></li>
                  <li><Link to="/"><i class="fas fa-cog"></i>Scholarship details</Link></li>
                  <li><Link to="/student-dashboard/change-password"><i class="fas fa-stream"></i>Change Password</Link></li>
                  <li><button onClick={handleLogout}><i class="fas fa-user"></i>Log out</button></li>
               </ul>
       </nav>
       {error && <h2>{error}</h2>}

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

export default ChangePWDstudent;