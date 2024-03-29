import React from "react";
import "./subjects.css";
function Subjectedit() {
    return (
        <div className="subjectedit">
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
                        <li><a href="/admin-dashboard"><i class="fas fa-home"></i>Home</a></li>
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
                            <h4>ADD SUBJECT</h4>
                            <div class="admin-cards-content">
                                <form>
                                    <select id="input_reg" name="staff_name">
                                        <option value="">subject1</option>
                                    </select>
                                    <input id="input_sub_add" type="submit" value="ADD" />
                                </form>
                            </div>
                        </div>
                        <div class="admin-items">
                            <h4>DELETE SUBJECT</h4>
                            <div class="admin-cards-content">
                                <form>
                                    <select id="input_reg" name="staff_name">
                                        <option value="">subject1</option>
                                    </select>
                                    <input id="input_sub_del" type="submit" value="DELETE" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subjectedit;