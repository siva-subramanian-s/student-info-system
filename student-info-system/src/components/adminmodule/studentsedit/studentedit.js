import React from "react";
import "./studentedit.css";


import { useState ,useEffect } from 'react';
// import './App.css';
import {db} from '../../../firebaseConfig';
import {collection, getDocs,addDoc } from 'firebase/firestore';

function Studentedit() {

  const[rollno,setNewNo]=useState("");
  const[newPwd,setNewPwd]=useState("");
  const [student,setUsers]=useState([]);
  const studentCollectionRef = collection(db,"student"); 

  const createUser =async() =>{

    await addDoc(studentCollectionRef,{RollNo:rollno,Password:newPwd});
  }
  
  useEffect(()=>{ 
    const getUsers= async()=>{
      const data=await getDocs(studentCollectionRef);    
      console.log(data);
      setUsers(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
    };
    getUsers();
  },[]);


    return(
        <div className="studentedit">
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
                <h4>ADD STUDENT</h4>
                <div class="admin-cards-content">
                  <form>
                    <input id="input_reg" type="text" placeholder="Registered No." onChange={(event)=>{setNewNo(event.target.value)}}/>
                    <input id="input_reg" type="text" style="top:2.5em" placeholder='Pasword...'onChange={(event)=>{setNewPwd(event.target.value)}}/>
                    <input id="input_sub_add" type="submit" onClick={createUser} value="ADD" />
                </form>
                </div>
              </div>
              <div class="admin-items">
                <h4>DELETE STUDENT</h4>
                <div class="admin-cards-content">
                  <form>
                      <input id="input_reg" type="text" placeholder="Registered No." />
                      <input id="input_sub_del" type="submit" value="DELETE" />
                  </form>
                </div>
              </div>
              <div class="admin-items">
                <h4>CHANGE STUDENT PASSWORD</h4>
                <div class="admin-cards-content">
                    <form>
                        <input id="input_reg" type="text" placeholder="Registered No." />
                        <input id="input_sub_alter" type="submit" value="CHANGE PASSWORD" />
                    </form>
                </div>
              </div>
            </div>
          </div>
   </div>
        </div>
    );
}


export default Studentedit;