import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import "./search_studinfo.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import './search_studinfo.css'

const SearchStudent = () => {
 const [rollNoImg, setSearchInput] = useState("");
 


    const [docSnap,setDocSnap] = useState();

    const getData=async()=>{
        const studocref = doc(db, "student", rollNoImg);
        const snap = await getDoc(studocref);
        setDocSnap(snap)
    }  

    // if(docSnap){
    //     console.log(docSnap.data());
    // }
    

return( 
    <>
<div>
    
    <div className='search_stud'><header className="header-info">SEARCH STUDENT DETAILS</header></div>
<div className='input_searchstud'>
    <input type="text" placeholder="Enter Student Reg.no"
   value={rollNoImg}onChange={(e)=>setSearchInput(e.target.value)} />&emsp;
   
   <input className="button-search" type="button" value="Search" onClick={getData}/></div>
 
        {docSnap &&
        <div className="biodata-container">
        <div className="stud_bio_header"><header>STUDENT - BIO DATA INFO</header></div>

        <form action="#">
            <div className="form first">
                <div className="details personal">
                    <span className="title">Personal Details</span>

                    <div className="fields">
                        <div className="input-field">
                            <label>Full Name </label>
                            <input type="text"id="fullname_cls" value={docSnap.data().name}  disabled/>
                        </div>

                        <div className="input-field">
                            <label>Date of Birth</label>
                            <input type="text"  required value={docSnap.data().dob}  disabled/>
                        </div>  

                        <div className="input-field">
                            <label>Email</label>
                            <input type="text"  required value={docSnap.data().email}  disabled/>
                        </div>

                        <div className="input-field">
                            <label>Mobile Number</label>
                            <input type="text"  required value={docSnap.data().phno}  disabled/>
                        </div>

                        <div className="input-field">
                            <label>Gender</label>
                                <input type="text"  value={docSnap.data().gender}  disabled/>
                            
                        </div>

                        <div className="input-field">
                            <label>Parent phone no.</label>
                            <input type="text"   required value={docSnap.data().pphno}  disabled/>
                        </div>
                    </div>
                </div>

                <div className="details ID">
                    <span className="title">Identity Details</span>

                    <div className="fields">
                        <div className="input-field">
                            <label>Roll no.</label>
                            <input type="text"  required value={docSnap.data().regno}  disabled/>
                        </div>

                        <div className="input-field">
                            <label>Nationality</label>
                            <input type="text"   required value={docSnap.data().nationality}  disabled/>
                        </div>

                        <div className="input-field">
                            <div id="community">
                                <label htmlFor="comm"id="community">Community:</label><br/>
                                <input type="text"   required value={docSnap.data().com}  disabled/>
                            </div>
                        </div>

                        <div className="input-field">
                            <label>Profile Image</label>
                            <img className="profile_image" src={docSnap.data().profimg}   disabled/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="nameofcaste" id="nameofcaste" required>
                                Name of the Caste
                            </label><input required value={docSnap.data().caste}  disabled />
                    
                        </div>

                        <div className="input-field">
                            <div>
                            <label>Hosteller/Dayscholar:</label> <br/>
                            
                            <input type="text"   value={docSnap.data().hstday}  disabled/>
                            
                            
                        </div>
                        </div>

                        <div className="input-field">
                            <label htmlFor="mother-tongue" id="mother_tongue">Mother Tongue</label>
                            <input type="text" required value={docSnap.data().mothertong}  disabled/>
                        </div> <br/>

                        <div className="input-field">
                            <div>
                            <label >Languages known:</label><br/>
                            
                            <input type="text"  required value={docSnap.data().lang}  disabled/>
                        </div>
                    
                        </div>
                        <div className="input-field">
                            <label htmlFor="medium" id="medium">Medium of Instructions/Upto 12th:</label>
                            <input type="text"  required value={docSnap.data().medium}  disabled/>
                        </div> <br/>

                        <div className="input-field">
                            <label htmlFor="marks" id="marks">Marks obtained in +2:</label><br/>
                            <input type="text" required value={docSnap.data().subject1}  disabled/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="tnpcee" id="tnpcee">TNPCEE REG.NO and Cutoff Marks:</label>
                            <input type="text" id="tnpcee"   required value={docSnap.data().tnpceeno}  disabled/>
                            
                        </div>

                        <div className="input-field">
                            <div>
                                <label htmlFor="selection" id="selection">Mode of selection for this course:</label><br/>
                                <input type="text" id="selection"  value={docSnap.data().modesel}  disabled/>
                               
                            </div>
                        </div>
                    

                        <div className="input-field">
                            <label htmlFor="rank" id="rank">Overall rank:</label>
                            <input type="text"  required value={docSnap.data().overallrank}  disabled/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="cocuri" id="co_activities">Co-curricular Activities:</label>
                            <input type="text"  required value={docSnap.data().coact}  disabled/>
                            
                            <label htmlFor="extraacct" id="extra_activity">Extra curricular Activities:</label>
                            <input type="text"  required value={docSnap.data().extract}  disabled/>
                        </div>
                        <div className="input-field">
                            <div>
                                <label >Any prize or awards received?</label><br/>
                                <input type="text"  value={docSnap.data().prize}  disabled/>
                               
                            </div>
                        </div>
                   </div>
                </div>

                        <div className="details address">
                            <span className="title">Address Details</span>
        
                            <div className="fields">
                                <div className="input-field">
                                    <label>Address Type</label>
                                    <input type="text"  required value={docSnap.data().addresstyp}  disabled/>
                                </div>
        
                                <div className="input-field">
                                    <label>Address:</label>
                                   <textarea  style={{resize:"none"}} cols="15" rows="10" value={docSnap.data().address}  disabled/>
                                </div>
                            </div>
                        </div>
                   
                        <div className="details family">
                            <span className="title">Family Details</span>
        
                            <div className="fields">
                                <div className="input-field">
                                    <label>Father Name</label>
                                    <input type="text"  required value={docSnap.data().fathernam}  disabled/>
                                </div>
        
                                <div className="input-field">
                                    <label>Father's Educational Qualification:</label>
                                    <input type="text"  required value={docSnap.data().fathereduc}  disabled/>
                                </div>
        
                                <div className="input-field">
                                    <label>Mother Name</label>
                                    <input type="text" required value={docSnap.data().mothernam}  disabled/>
                                </div>
                                <div className="input-field">
                                    <label>Mother's Educational Qualification:</label>
                                    <input type="text"  required value={docSnap.data().mothereduc}  disabled/>
                                </div>
        
                                <div className="input-field">
                                    <label>Annual Income:</label>
                                    <input type="text"  required value={docSnap.data().annualinc}  disabled/>
                                </div>     
                            </div>
                        </div>          
                    </div>
            </form>
    </div> }
   
</div>
</>
);
}
export default SearchStudent;