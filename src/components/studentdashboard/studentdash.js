import { Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuth} from "../contexts/AuthContext"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import "./stud_dashboard.css"
import "./stud_bio.css"


export default function Studentdash() {

   const Navigate = useNavigate();
   const [error, setError] = useState("")
   const { logout,currentUser } = useAuth()
   const [docSnap,setDocSnap] = useState();

  var rollNoImg = currentUser.email;
  var slice = 0;
  for (let i = 0; i < rollNoImg.length; i++) {
    if (rollNoImg[i] == '@') slice = i;
  }
  rollNoImg=rollNoImg.toUpperCase();
  rollNoImg = rollNoImg.slice(0, slice);
  useEffect(()=>{
   getData();
},[]);
   async function handleLogout() {
      setError("")
      try {
         await logout()
         Navigate("/");
      } catch {
         setError("Failed to log out")
      }
   }
   const getData=async()=>{
      const studocref = doc(db, "student", rollNoImg);
      const snap = await getDoc(studocref);
      setDocSnap(snap)
  }  

  if(docSnap){
      console.log(docSnap.data());
  }


   return (
      <div>
         <div id="stud_header"><h1>STUDENT DASHBOARD</h1></div>
      <div className="student__dash__regno">
               <h2>{rollNoImg}</h2>
         </div>
         <div className="wrapper_stud">
            <input type="checkbox" id="btn" hidden />
            <label for="btn" className="menu-btn_stud">
               <i className="fas fa-bars"></i>
               <i className="fas fa-times"></i>
            </label>
            
            <nav id="sidebar">
               <div className="title_stud">
                  Side Menu
               </div>
               <ul className="list-items_stud">
                  <li><Link to="/student-dashboard"><i className="fas fa-home"></i>Home</Link></li>
                  <li><Link to="/bio-data"><i className="fas fa-sliders-h"></i>Update Details</Link></li>
                  <li><Link to="/student-dashboard/details"><i className="fas fa-address-book"></i>Review Details </Link></li>
                  <li><Link to="/student-dashboard/change-password"><i className="fas fa-stream"></i>Change Password</Link></li>
                  <li><button className="logout-btn" onClick={handleLogout}><i className="fas fa-user"></i>&emsp;&ensp;Log out</button></li>
               </ul>
            </nav>
            {error && <h2>{error}</h2>}

            
            {docSnap && <div className='detailBox'>
            
                  <div className="input-field-img">
                            <img className="profile_image_details" src={docSnap.data().profimg}/>
                        </div>
                  <div className='small-info'>
                        <div className="input-field">
                            <label>Full Name </label>&emsp;&nbsp;
                            <input type="text"id="fullname_cls" value={docSnap.data().name}  name="fullname_cls"  disabled/>
                        </div>

                        <div className="input-field">
                            <label>DOB</label>&emsp;&emsp;&emsp;&nbsp;
                            <input type="text"  name="dob_cls"  value={docSnap.data().dob} disabled/>
                        </div>  

                        <div className="input-field">
                            <label>Email  </label>&emsp;&emsp;&emsp;
                            <input type="text"  name="email_cls"  value={docSnap.data().email} disabled/>
                        </div>

                        <div className="input-field">
                            <label>Mobile Number</label>&nbsp;
                            <input type="text"  name="stu_mobcls"  value={docSnap.data().phno} disabled/>
                        </div>

                        <div className="input-field">
                            <label>Gender</label>&emsp;&emsp;&emsp;&ensp;
                                <input type="text" name="gend_cls" value={docSnap.data().gender} disabled/>
                            
                        </div>

                        <div className="input-field">
                            <label>Parent Number</label>&nbsp;
                            <input type="text"  name="phno_class"  value={docSnap.data().pphno} disabled/>
                        </div>
                    </div>   
      </div>}|| {
         <label className='logout-btn'>Your personal details will show up here</label>
      }

         </div>


     
      </div>
   )
}
