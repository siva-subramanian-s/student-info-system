import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuth} from "../contexts/AuthContext"
import "./stud_dashboard.css"

export default function Studentdash() {

   const Navigate = useNavigate();
   const [error, setError] = useState("")
   const { logout,currentUser } = useAuth()
  var name = currentUser.email;
  var slice = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i] == '@') slice = i;
  }
  name=name.toUpperCase();
  name = name.slice(0, slice);

   async function handleLogout() {
      setError("")
      try {
         await logout()
         Navigate("/");
      } catch {
         setError("Failed to log out")
      }
   }


   return (
      <div><div id="stud_header"><h1>STUDENT DASHBOARD</h1></div>
      <div className="student__dash__regno">
               <h2>{name}</h2>
         </div>
         <div class="wrapper_stud">
            <input type="checkbox" id="btn" hidden />
            <label for="btn" class="menu-btn_stud">
               <i class="fas fa-bars"></i>
               <i class="fas fa-times"></i>
            </label>
            
            <nav id="sidebar">
               <div class="title_stud">
                  Side Menu
               </div>
               <ul class="list-items_stud">
                  <li><Link to="/student-dashboard"><i class="fas fa-home"></i>Home</Link></li>
                  <li><Link to="/bio-data"><i class="fas fa-sliders-h"></i>Bio Details</Link></li>
                  <li><Link to="/student-dashboard/details"><i class="fas fa-address-book"></i>My Details </Link></li>
                  <li><Link to="/student-dashboard/change-password"><i class="fas fa-stream"></i>Change Password</Link></li>
                  <li><button onClick={handleLogout}><i class="fas fa-user"></i>Log out</button></li>
               </ul>
            </nav>
            {error && <h2>{error}</h2>}
         </div>

      </div>
   )
}
