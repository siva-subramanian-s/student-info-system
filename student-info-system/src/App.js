import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

import { useState ,useEffect } from 'react';
import './App.css';
import {db} from './firebaseConfig';
import {collection, getDocs,addDoc } from 'firebase/firestore';

function App() {
  return (
      <Router>
        <Routes>
          <Route  path="/" exact element={<Home/>}/>
          <Route path="/Login_card" element={<Logincard/>} />
          <Route path="/login-Student" element={<StudentLogin/>}/>
          <Route path="/login-Staff" element={<StaffLogin/>}/>
          <Route path="/login-Admin" element={<AdminLogin/>}/>
          <Route path="/Classes" element={<Staff/>}/>
          <Route path="/News" element={<News/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/Attendance" element={<Attendance/>}/>
          <Route path="/Admin-dashboard" element={<Admin/>}/>
          <Route path="/Admin-student-edit" element={<Studentedit/>}/>
          <Route path="/admin-staff-edit" element={<Staffedit/>}/>
          <Route path="/admin-subjects-edit" element={<Subjectedit/>}/>
          <Route path="/change-password" element={<ChangePWD/>} />
        </Routes>
      </Router>
  );

 
}


function connect(){

  const[newName,setNewName]=useState("");
  const[newAge,setNewAge]=useState(0);
  const [school,setUsers]=useState([]);
  const schoolCollectionRef = collection(db,"school"); 

  const createUser =async() =>{

    await addDoc(schoolCollectionRef,{Name:newName,Password:newAge});
  }
  
  useEffect(()=>{ 
    const getUsers= async()=>{
      const data=await getDocs(schoolCollectionRef);    
      console.log(data);
      setUsers(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
    };
    getUsers();
  },[]);


  return (<div className="App"> 
  
    <input placeholder='Name...'onChange={(event)=>{setNewName(event.target.value)}}/>
    <input placeholder='Pasword...'onChange={(event)=>{setNewAge(event.target.value)}}/>
    <button onClick={createUser}>Create User</button>

   { school.map((school) => {
      return( <div>     
        {""}
        <h1>String: {school.Name}</h1>
        <h2>Function: {school.Password}</h2>
      </div>
      );

    })}
  </div>
  )
}

// export connect;
export default App;
