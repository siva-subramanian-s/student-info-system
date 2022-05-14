import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./stud_bio.css"
export default function Studentbio_data() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {

        e.preventDefault();
        try {
            setError("");
                setLoading(true)
                navigate("/student-dashboard");
        } catch {
            setError("Failed to log in");
        }
        setLoading(false)

    }
    return (
        <div>
            <div id="biodata_body">
            {error && <h2>{error}</h2>}

                <div className="biodata-container">
                    <div className="stud_bio_header"><header>STUDENT - BIO DATA REGISTRATION</header></div>

                    <form onSubmit={handleSubmit}>
                        <div className="form first">
                            <div className="details personal">
                                <span className="title">Personal Details</span>

                                <div className="fields">
                                    <div className="input-field">
                                        <label>Full Name </label>
                                        <input type="text" placeholder="Enter your name and initial" name="fullname_cls" required />
                                    </div>

                                    <div className="input-field">
                                        <label>Date of Birth</label>
                                        <input type="date" placeholder="Enter birth date" name="dob_cls" required />
                                    </div>

                                    <div className="input-field">
                                        <label>Email</label>
                                        <input type="text" placeholder="Enter your email" name="email_cls" required />
                                    </div>

                                    <div className="input-field">
                                        <label>Mobile Number</label>
                                        <input type="number" placeholder="Enter mobile number" name="stu_mobcls" required />
                                    </div>

                                    <div className="input-field">
                                        <label>Gender</label>
                                        <select required>
                                            <option disabled value>Select gender</option>
                                            <option name="gend_cls">Male</option>
                                            <option name="gend_cls">Female</option>
                                            <option name="gend_cls">Others</option>
                                        </select>
                                    </div>

                                    <div className="input-field">
                                        <label>Parent phone no.</label>
                                        <input type="number" placeholder="Enter parent ph.no" name="phno_class" required />
                                    </div>
                                </div>
                            </div>

                            <div className="details ID">
                                <span className="title">Identity Details</span>

                                <div className="fields">
                                    <div className="input-field">
                                        <label>Roll no.</label>
                                        <input type="text" placeholder="Enter roll-no" name="rollno_class" required />
                                    </div>

                                    <div className="input-field">
                                        <label>Nationality</label>
                                        <input type="text" placeholder="Enter nationality" name="nation" required />
                                    </div>

                                    <div className="input-field">
                                        <div id="community">
                                            <label htmlFor="comm" id="community">Community:</label><br />
                                            <input type="radio" id="OC" value="OC" name="com_radio" required />
                                            <label>OC</label>
                                            <input type="radio" id="BC" value="BC" name="com_radio" required />
                                            <label>BC</label>
                                            <input type="radio" id="MBC" value="MBC" name="com_radio" required />
                                            <label>MBC</label>
                                            <input type="radio" id="SC" value="SC" name="com_radio" required />
                                            <label>SC</label>
                                            <input type="radio" id="ST" value="ST" name="com_radio" required />
                                            <label>ST</label>

                                        </div>
                                    </div>

                                    <div className="input-field">
                                        <label>Profile Image</label>
                                        <input type="file" style={{ padding: "10px" }} name="prof_img" required />
                                    </div>

                                    <div className="input-field">
                                        <label htmlFor="nameofcaste" id="nameofcaste" required>
                                            Name of the Caste
                                        </label>
                                        <input type="text" name="nameofcaste" required />

                                    </div>

                                    <div className="input-field">
                                        <div>
                                            <label>Hosteller/Dayscholar:</label> <br />

                                            <input type="radio" required name="hstday_radio" /><label>Hosteller</label>

                                            <input type="radio" required name="hstday_radio" /><label >Dayscholar</label>
                                        </div>
                                    </div>

                                    <div className="input-field">
                                        <label htmlFor="mother-tongue" id="mother_tongue">Mother Tongue</label>
                                        <input type="text" name="mother_tongue" required />
                                    </div> <br />

                                    <div className="input-field">
                                        <div>
                                            <label >Languages known:</label><br />
                                            <input type="checkbox" name="lang_cls" required /><label>English</label>

                                            <input type="checkbox" name="lang_cls" required /><label >Tamil</label>



                                            <input type="checkbox" name="lang_cls" required />  <label >Hindi</label> <br />


                                            <label htmlFor="English" id="Others">Any other Languages</label>
                                            <input type="text" name="lang_cls" required />
                                        </div>

                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="medium" id="medium">Medium of Instructions/Upto 12th:</label>
                                        <input type="text" name="medium" required />
                                    </div> <br />

                                    <div className="input-field">
                                        <label htmlFor="marks" id="marks">Marks obtained in +2:</label><br />
                                        <label htmlFor="maths" id="Mathematics">Mathematics</label>
                                        <input type="number" name="subj_cls" required />
                                        <label htmlFor="physics" id="physics">Physics</label>
                                        <input type="number" name="subj_cls" required />
                                        <label htmlFor="chemistry" id="chemistry">Chemistry</label>
                                        <input type="number" name="subj_cls" required />

                                    </div>

                                    <div className="input-field">
                                        <label htmlFor="tnpcee" id="tnpcee">TNPCEE REG.NO & Cutoff Marks:</label>
                                        <input type="number" id="tnpcee" placeholder="TNPCEE REG.NO" name="tn_reg" required />
                                        <input type="number" id="tnpcee" placeholder="Cutoff Marks" maxLength="100" name="cutoff_marks" required />
                                    </div>

                                    <div className="input-field">
                                        <div>
                                            <label htmlFor="selection" id="selection">Mode of selection for this course:</label><br />
                                            <input type="radio" id="selection" name="course_radio" value="Merit" />
                                            <label htmlFor="Merit" id="merit">Merit</label>
                                            <input type="radio" id="selection" value="com-based" name="course_radio" />
                                            <label htmlFor="com-based" id="com_based">Community </label>
                                            <input type="radio" id="selection" name="course_radio" />
                                            <label htmlFor="rural" id="rural">Rural </label><br />
                                            <label htmlFor="anyother">Any other Quota:</label>
                                            <input type="text" id="anyother_quota" name="course_radio" />
                                        </div>
                                    </div>


                                    <div className="input-field">
                                        <label htmlFor="rank" id="rank">Overall rank:</label>
                                        <input type="text" name="rank" placeholder="rank" required />
                                    </div>

                                    <div className="input-field">
                                        <label htmlFor="cocuri" id="co_activities">Co-curricular Activities:</label>
                                        <input type="text" name="co_activities" required />

                                        <label htmlFor="extraacct" id="extra_activity">Extra curricular Activities:</label>
                                        <input type="text" name="extra_activity" required />
                                    </div>
                                    <div className="input-field">
                                        <div>
                                            <label >Any prize or awards received?</label><br />
                                            <input type="radio" required name="prize_radio" /><label >Yes</label >
                                            <input type="radio" required name="prize_radio" /><label >No</label >
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="details address">
                                <span className="title">Address Details</span>

                                <div className="fields">
                                    <div className="input-field">
                                        <label>Address Type</label>
                                        <input type="text" placeholder="Permanent or Temporary" name="temp_perman" required />
                                    </div>

                                    <div className="input-field">
                                        <label>Address:</label>
                                        <textarea name="adress_stud" style={{ resize: "none" }} cols="15" rows="10"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="details family">
                                <span className="title">Family Details</span>

                                <div className="fields">
                                    <div className="input-field">
                                        <label>Father Name</label>
                                        <input type="text" placeholder="Enter father name" name="dad_name" required />
                                    </div>

                                    <div className="input-field">
                                        <label>Father's Educational Qualification:</label>
                                        <input type="text" placeholder="Edu. Qualification" name="dad_educ" required />
                                    </div>

                                    <div className="input-field">
                                        <label>Mother Name</label>
                                        <input type="text" placeholder="Enter mother name" name="mom_name" required />
                                    </div>
                                    <div className="input-field">
                                        <label>Mother's Educational Qualification:</label>
                                        <input type="text" placeholder="Edu. Qualification" name="mom_educ" required />
                                    </div>

                                    <div className="input-field">
                                        <label>Annual Income:</label>
                                        <input type="number" placeholder="Annual income" name="annual_income" required />
                                    </div>

                                    <button id="studbio_submit" className="sumbit" disabled={loading}>
                                        <span className="btnText">Submit</span>
                                        <i className="uil uil-navigator"></i>
                                    </button>
                                </div>
                            </div>

                        </div>



                    </form>
                </div>

                {/* <script>
                    $("#studbio_submit").click(function() {
                        alert("Your bio data  has been Submitted sucessfully!!!.")});
                </script> */}

            </div>
        </div>
    )
}
