import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuth} from "../contexts/AuthContext"
import "./stud_dashboard.css"

export default function Studentdash() {

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


   return (
      <div><div id="stud_header"><h1>STUDENT DASHBOARD</h1></div>
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
                  <li><a href="/student-dashboard"><i class="fas fa-home"></i>Home</a></li>
                  <li><a href="/bio-data"><i class="fas fa-sliders-h"></i>Bio Details</a></li>
                  <li><a href="/student-dashboard/documents"><i class="fas fa-address-book"></i>Documents </a></li>
                  <li><a href="#"><i class="fas fa-cog"></i>Scholarship details</a></li>
                  <li><a href="/student-dashboard/change-password"><i class="fas fa-stream"></i>Change Password</a></li>
                  <li><button onClick={handleLogout}><i class="fas fa-user"></i>Log out</button></li>
               </ul>
            </nav>
            {error && <h2>{error}</h2>}
         </div>

      </div>
   )
}
