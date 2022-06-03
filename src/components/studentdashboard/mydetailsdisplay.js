
import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import subjectDataService from "../adminmodule/services/subject.services";
import { getMetadata } from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import "./stud_bio.css"

const Mydetailsdisplay=()=>{
    
    var slice = 0;
    const {currentUser } = useAuth();
    var rollNoImg = currentUser.email;
    const [docSnap,setDocSnap] = useState();
    
    for (let i = 0; i < rollNoImg.length; i++) {
    if (rollNoImg[i] == '@') slice = i;
    }
    rollNoImg=rollNoImg.toUpperCase();
    rollNoImg = rollNoImg.slice(0, slice);
    useEffect(()=>{
        getData();
    },[]);
  
    const getData=async()=>{
        const studocref = doc(db, "student", rollNoImg);
        const snap = await getDoc(studocref);
        setDocSnap(snap)
    }  

    if(docSnap){
        console.log(docSnap.data());
    }
    
    return(
        <>
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
                            <input type="text"id="fullname_cls" value={docSnap.data().name}  name="fullname_cls" required disabled/>
                        </div>

                        <div className="input-field">
                            <label>Date of Birth</label>
                            <input type="text"  name="dob_cls" required value={docSnap.data().dob}/>
                        </div>  

                        <div className="input-field">
                            <label>Email</label>
                            <input type="text"  name="email_cls" required value={docSnap.data().email}/>
                        </div>

                        <div className="input-field">
                            <label>Mobile Number</label>
                            <input type="text"  name="stu_mobcls" required value={docSnap.data().phno}/>
                        </div>

                        <div className="input-field">
                            <label>Gender</label>
                                <input type="text" name="gend_cls" value={docSnap.data().gender}/>
                            
                        </div>

                        <div className="input-field">
                            <label>Parent phone no.</label>
                            <input type="text"  name="phno_class" required value={docSnap.data().pphno}/>
                        </div>
                    </div>
                </div>

                <div className="details ID">
                    <span className="title">Identity Details</span>

                    <div className="fields">
                        <div className="input-field">
                            <label>Roll no.</label>
                            <input type="text"  name="rollno_class" required value={docSnap.data().regno}/>
                        </div>

                        <div className="input-field">
                            <label>Nationality</label>
                            <input type="text"  name="nation" required value={docSnap.data().nationality}/>
                        </div>

                        <div className="input-field">
                            <div id="community">
                                <label htmlFor="comm"id="community">Community:</label><br/>
                                <input type="text"  name="com_radio" required value={docSnap.data().com}/>
                            </div>
                        </div>

                        <div className="input-field">
                            <label>Profile Image</label>
                            <img className="profile_image" src={docSnap.data().profimg} />
                        </div>

                        <div className="input-field">
                            <label htmlFor="nameofcaste" id="nameofcaste" required>
                                Name of the Caste
                            </label>
                            <input type="text" name="nameofcaste" required value={docSnap.data().caste}/>
                    
                        </div>

                        <div className="input-field">
                            <div>
                            <label>Hosteller/Dayscholar:</label> <br/>
                            
                            <input type="text"  name="hstday_radio" value={docSnap.data().hstday}/>
                            
                            
                        </div>
                        </div>

                        <div className="input-field">
                            <label htmlFor="mother-tongue" id="mother_tongue">Mother Tongue</label>
                            <input type="text" name="mother_tongue" required value={docSnap.data().mothertong}/>
                        </div> <br/>

                        <div className="input-field">
                            <div>
                            <label >Languages known:</label><br/>
                            
                            <input type="text" name="lang_cls" required value={docSnap.data().lang}/>
                        </div>
                    
                        </div>
                        <div className="input-field">
                            <label htmlFor="medium" id="medium">Medium of Instructions/Upto 12th:</label>
                            <input type="text" name="medium" required value={docSnap.data().medium}/>
                        </div> <br/>

                        <div className="input-field">
                            <label htmlFor="marks" id="marks">Marks obtained in +2:</label><br/>
                            <input type="text" name="subj_cls" required value={docSnap.data().subject1}/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="tnpcee" id="tnpcee">TNPCEE REG.NO and Cutoff Marks:</label>
                            <input type="text" id="tnpcee"  name="tn_reg" required value={docSnap.data().tnpceeno}/>
                            
                        </div>

                        <div className="input-field">
                            <div>
                                <label htmlFor="selection" id="selection">Mode of selection for this course:</label><br/>
                                <input type="text" id="selection"name="course_radio" value={docSnap.data().modesel}/>
                               
                            </div>
                        </div>
                    

                        <div className="input-field">
                            <label htmlFor="rank" id="rank">Overall rank:</label>
                            <input type="text" name="rank" required value={docSnap.data().overallrank}/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="cocuri" id="co_activities">Co-curricular Activities:</label>
                            <input type="text" name="co_activities" required value={docSnap.data().coact}/>
                            
                            <label htmlFor="extraacct" id="extra_activity">Extra curricular Activities:</label>
                            <input type="text" name="extra_activity" required value={docSnap.data().extract}/>
                        </div>
                        <div className="input-field">
                            <div>
                                <label >Any prize or awards received?</label><br/>
                                <input type="text"  name="prize_radio" value={docSnap.data().prize}/>
                               
                            </div>
                        </div>
                   </div>
                </div>

                        <div className="details address">
                            <span className="title">Address Details</span>
        
                            <div className="fields">
                                <div className="input-field">
                                    <label>Address Type</label>
                                    <input type="text"  name="temp_perman" required value={docSnap.data().addresstyp}/>
                                </div>
        
                                <div className="input-field">
                                    <label>Address:</label>
                                   <textarea name="adress_stud" style={{resize:"none"}} cols="15" rows="10" value={docSnap.data().address}/>
                                </div>
                            </div>
                        </div>
                   
                        <div className="details family">
                            <span className="title">Family Details</span>
        
                            <div className="fields">
                                <div className="input-field">
                                    <label>Father Name</label>
                                    <input type="text"  name="dad_name"required value={docSnap.data().fathernam}/>
                                </div>
        
                                <div className="input-field">
                                    <label>Father's Educational Qualification:</label>
                                    <input type="text"  name="dad_educ" required value={docSnap.data().fathereduc}/>
                                </div>
        
                                <div className="input-field">
                                    <label>Mother Name</label>
                                    <input type="text"name="mom_name" required value={docSnap.data().mothernam}/>
                                </div>
                                <div className="input-field">
                                    <label>Mother's Educational Qualification:</label>
                                    <input type="text"  name="mom_educ" required value={docSnap.data().mothereduc}/>
                                </div>
        
                                <div className="input-field">
                                    <label>Annual Income:</label>
                                    <input type="text" name="annual_income" required value={docSnap.data().annualinc}/>
                                </div>     
                            </div>
                        </div>          
                    </div>
            </form>
    </div> }
    </>
        
    );
}
export default Mydetailsdisplay;
