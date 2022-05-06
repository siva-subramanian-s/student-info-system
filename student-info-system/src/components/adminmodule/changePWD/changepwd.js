import React from "react";


function ChangePWD() {
    return(
        <div className="changepassword">
            <div id="admin_header"><h1>ADMIN DASHBOARD</h1></div>
    <div class="admin-wrapper">
       <input type="checkbox" id="btn" hidden />
       <label for="btn" class="admin-menu-btn">
       <i class="fas fa-bars"></i>
       <i class="fas fa-times"></i>
       </label>
       <nav id="sidebar">
          <div class="admin-title">
             Side Menu
          </div>
          <ul class="admin-list-items">
          <li><a href="/admin-dashboard"><i className="fas fa-home"></i>Home</a></li>
               <li><a href="/admin-student-edit"><i className="fas fa-sliders-h"></i>Students edit</a></li>
               <li><a href="/admin-staff-edit"><i className="fas fa-address-book"></i>Staffs edit </a></li>
               <li><a href="/admin-subjects-edit"><i className="fas fa-cog"></i>Subjects edit</a></li>
               <li><a href="/change-password"><i className="fas fa-stream"></i>Change Password</a></li>
               <li><a href="/"><i className="fas fa-user"></i>Log out</a></li>
          </ul>
       </nav>
    </div>
    
<div class="admin-wrapper1">
        <div class="admin-container">
            <div class="admin-simple-cards">
             
              <div class="admin-items">
                <h4>NEW PASSWORD</h4>
                <div class="admin-cards-content">
                  <form>
                    <input id="input_reg" type="text" placeholder="Enter Password"/>
                    <input id="input_reg" type="text" placeholder="Re-Enter Password" style="margin-top: 2.5em;" />
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