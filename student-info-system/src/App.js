import React from "react";
// import Logincard from "./components/logincard/Logincard.js";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
// import Login from "./components/login/login";
// import Staff from "./components/staff/staff";
import News from "./components/card/news.js";
import About from "./components/about/about.js";
// import Attendance from "./components/attendance/attendance.js";

function App() {
  return (
      <Router>
        <Routes>
          <Route  path="/" exact element={<Home/>}/>
          {/* <Route path="/Login-card" element={<Logincard/>} /> */}
          {/* <Route path="/login" element={<Login/>} /> */}
          {/* <Route path="/Staff" element={<Staff/>}/> */}
          <Route path="/News" element={<News/>} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="/Attendance" element={<Attendance/>}/> */}
        </Routes>
      </Router>
  );
}

export default App;
