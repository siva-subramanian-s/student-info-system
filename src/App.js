import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Logincard from "./components/logincard/Logincard.js";
import Staff from "./components/staff/staff.js";
import News from "./components/card/news.js";
import About from "./components/about/about.js";
import StudentLogin from "./components/login/student_login.js";
import StaffLogin from "./components/login/staff_login";
import AdminLogin from "./components/login/admin_login";
import Attendance from "./components/attendance/attendance.js";
import Admin from "./components/adminmodule/admin/admin";
import Studentedit from "./components/adminmodule/studentsedit/studentedit";
import Staffedit from "./components/adminmodule/staffedit/staffedit";
import Subjectedit from "./components/adminmodule/subjectsedit/subjectedit";
import ChangePWD from "./components/adminmodule/changePWD/changepwd";
import { AuthProvider } from "./components/contexts/AuthContext";
import PrivateRoute from "./components/contexts/privateroutes";
import Studentdash from "./components/studentdashboard/studentdash";
import Biodoc from "./components/studentdashboard/Biodoc";
import Mydetailsdisplay from "./components/studentdashboard/mydetailsdisplay";
import ChangePWDstudent from "./components/studentdashboard/changePWD/changepwdstudent";
import ChangeStaffPWD from "./components/staff/changeStaffPwd"
import Studentbio_data from "./components/studentdashboard/studentbio_data";
import SearchStudent from "./components/staff/searchstud_info";
import Report from "./components/Report/report";


function App() {
  return (
    <Router>
      <AuthProvider>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Login_card" element={<Logincard />} />
          <Route path="/login-Student" element={<StudentLogin />} />
          <Route path="/login-Staff" element={<StaffLogin />} />
          <Route path="/login-Admin" element={<AdminLogin />} />
          <Route path="/News" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route element={<PrivateRoute/>}>
            <Route path="/student-dashboard" element={<Studentdash />} />
            <Route path="/bio-data" element={<Studentbio_data />} />
            <Route path="/change-password" element={<ChangePWD />} />
            <Route path="/admin-subjects-edit" element={<Subjectedit />} />
            <Route path="/Classes" element={<Staff />} />
            <Route path="/admin-staff-edit" element={<Staffedit />} />
            <Route path="/Admin-dashboard" element={<Admin />} />
            <Route path="/Attendance" element={<Attendance />} />
            <Route path="/Admin-student-edit" element={<Studentedit />} />
            <Route path="/student-dashboard/details" element={<Mydetailsdisplay/>}/>
            <Route path="/student-dashboard/change-password" element={<ChangePWDstudent/>}/>
            <Route path="/change-fac-password" element={<ChangeStaffPWD />} />
            <Route path="/report" element={<Report/>}/>
            <Route path="/search-student" element={<SearchStudent/>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>

  );
}


export default App;
