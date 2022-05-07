import React from "react";
import "./staff.css";
function Staffedit() {
    return (
        <div className="staffedit">
            <div id="admin_header"><h1>ADMIN DASHBOARD</h1></div>
    <div className="admin-wrapper">
       <input type="checkbox" id="btn" hidden/>
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
                <h4>ADD STAFF</h4>
                <div className="admin-cards-content">
                  <form>
                    <select id="input_reg" name="staff_name">
                      <option value="">name1</option>
                     </select> 
                    <input id="input_sub_add" type="submit" value="ADD"/>
                </form>
                </div>
              </div>
              <div className="admin-items">
                <h4>DELETE STAFF</h4>
                <div className="admin-cards-content">
                  <form>
                    <select id="input_reg" name="staff_name">
                      <option value="">name1</option>
                     </select>
                      <input id="input_sub_del" type="submit" value="DELETE" />
                  </form>
                </div>
              </div>
              <div className="admin-items">
                <h4>CHANGE STAFF PASSWORD</h4>
                <div className="admin-cards-content">
                    <form>
                      <select id="input_reg" name="staff_name">
                        <option value="">name1</option>
                       </select>
                        <input id="input_sub_alter" type="submit" value="CHANGE PASSWORD"/>
                    </form>
                </div>
              </div>
            </div>
          </div>
   </div>
        </div>
    );
}
export default Staffedit;