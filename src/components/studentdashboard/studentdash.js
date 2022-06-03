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
                  <li><Link to="/student-dashboard"><i class="fas fa-home"></i>Home</Link></li>
                  <li><Link to="/bio-data"><i class="fas fa-sliders-h"></i>Bio Details</Link></li>
                  <li><Link to="/student-dashboard/details"><i class="fas fa-address-book"></i>My Details </Link></li>
                  <li><Link to="/"><i class="fas fa-cog"></i>Scholarship details</Link></li>
                  <li><Link to="/student-dashboard/change-password"><i class="fas fa-stream"></i>Change Password</Link></li>
                  <li><button onClick={handleLogout}><i class="fas fa-user"></i>Log out</button></li>
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
                            <label>Gender</label>&emsp;&emsp;&emsp;
                                <input type="text" name="gend_cls" value={docSnap.data().gender} disabled/>
                            
                        </div>

                        <div className="input-field">
                            <label>Parent Number</label>&nbsp;
                            <input type="text"  name="phno_class"  value={docSnap.data().pphno} disabled/>
                        </div>
                    </div>   
      </div>}

         </div>


     
      </div>
   )
}
