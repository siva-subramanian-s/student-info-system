import React from "react";
import Logincard from "./components/logincard/Logincard.js";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Staff from "./components/staff/staff";
import News from "./components/card/news.js";

function App() {
  return (
      <Router>
        <Routes>
          <Route  path="/" exact element={<Home/>}/>
          {console.log("home..")}
          <Route path="/Login-card" element={<Logincard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Staff" element={<Staff/>}/>
          <Route path="/card" element={<News/>} />
        </Routes>
      </Router>
  );
}

export default App;
