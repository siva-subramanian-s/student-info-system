import React from 'react'
import "./stud_dashboard.css"
export default function Studentdash() {
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
             <li><a href="#"><i class="fas fa-home"></i>Home</a></li>
             <li><a href="student_info.html"><i class="fas fa-sliders-h"></i>Bio Details</a></li>
             <li><a href="stud_doc.html"><i class="fas fa-address-book"></i>Documents </a></li>
             <li><a href="#"><i class="fas fa-cog"></i>Scholarship details</a></li>
             <li><a href="#"><i class="fas fa-stream"></i>Change Password</a></li>
             <li><a href="#"><i class="fas fa-user"></i>Log out</a></li>
          </ul>
       </nav>
    </div>
    
    </div>
  )
}
