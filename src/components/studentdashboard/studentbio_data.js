import {  Alert } from "react-bootstrap";
import React, { useState,useEffect} from 'react'
import {getStorage,ref,uploadBytes,getDownloadURL} from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import "./stud_bio.css"
import subjectServices from '../adminmodule/services/subject.services';
import { useAuth } from "../contexts/AuthContext";
export default function Studentbio_data() {





    const [imageAsFile, setImageAsFile] = useState('');
    const [imageAsUrl, setImageAsUrl] = useState('');
    
  

    const handleImageFile = (e)=>{
        const image = e.target.files[0];
        setImageAsFile(() => (image));
    }
    
    

   
 

    
    const [id, setAttendId] = useState("");
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ error: false, msg: "" });

    
  const [name, setName] = useState(""); //here
  const [phno, setPhno] = useState("");
  const [pphno, setPphno] = useState(""); 

  const [dob, setDob] = useState(""); 
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [regno, setRollno] = useState("");
  const [nationality, setNationality] = useState("");
  const [com, setCom] = useState("");
  
  const [profimg, setProfimg] = useState("");
  const [caste, setCaste] = useState("");
  const [hstday, setHstday] = useState("");
  
  const [mothertong, setMothertong] = useState("");
  const [lang, setLang] = useState("");
 
  const [medium, setMedium] = useState("");
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");

  
  const [tnpceeno, setTnpceeno] = useState("");
  const [cutoffmrk, setCutoffmrk] = useState("");
  const [modesel, setModesel] = useState("");
 
  const [overallrank, setOverallrank] = useState("");
  const [coact, setCoact] = useState("");
  const [extract, setExtract] = useState("");
  const [prize, setPrize] = useState("");
  const [addresstyp, setAddresstyp] = useState("");
  const [address, setAddress] = useState("");
  const [fathernam, setFathernam] = useState("");
  const [fathereduc, setFathereduc] = useState("");
  const [mothernam, setMothernam] = useState("");
  const [mothereduc, setMothereduc] = useState("");
  const [annualinc, setAnnualInc] = useState("");
  const {currentUser } = useAuth();
  const handleHstday=e=>{
      setHstday(e.target.value)
  }
  const handleGender=e=>{
    setGender(e.target.value)
}
    var rollNoImg = currentUser.email;
    var slice = 0;
    for (let i = 0; i < rollNoImg.length; i++) {
    if (rollNoImg[i] == '@') slice = i;
    }
    rollNoImg=rollNoImg.toUpperCase();
    rollNoImg = rollNoImg.slice(0, slice);

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Uploading...')
    // async magic goes here...
    if(imageAsFile === '' ) {
        console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
      }
     
     
    const storage = getStorage();
    const storageRef = ref(storage, `${"Profile"}/${rollNoImg}`);
    const metadata = {
        contentType: `${imageAsFile.type}`,
      };

    uploadBytes(storageRef, imageAsFile, metadata);

    window.setTimeout(()=>{
        getDownloadURL(ref(storage,  `${"Profile"}/${rollNoImg}`
       ))
        .then((url) => {
            // `url` is the download URL
            alert("Image uploaded!!!");
            console.log(url);
            subjectServices.updateStudent(rollNoImg,{
                profimg:url
            })
            setImageAsUrl(url);
        })
        .catch((error) => {
            // Handle any errors
        });
    },2000)

    e.preventDefault();
    setMessage("");
    if (name === "" || phno === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;

      
    }
    const newStudent = {
      name,//here
      phno,
      pphno,
      dob,
      email,
      gender,
      phno,
      regno,
      nationality,
      com,
      profimg:imageAsUrl,
      caste,
      hstday,    
      mothertong,
      lang,  
      medium,
      subject1,
      subject2,
      subject3,
      tnpceeno,
      cutoffmrk,
      modesel, 
      overallrank,
      coact,
      extract,
      prize,
      addresstyp,
      address,
      fathernam,
      fathereduc,
      mothernam,
      mothereduc,
      annualinc

    };

    try {
      if (id !== undefined && id !== "") {
        await subjectServices.updateSubject(id, newStudent);
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await subjectServices.addStudent(rollNoImg,newStudent);
        setMessage({ error: false, msg: "Student registered successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    
    // window.setTimeout(()=>{
    //     console.log(imageAsUrl)
    //     subjectServices.updateStudent(rollNoImg,{
    //         profimg:imageAsUrl
    //     })
    // },3000)


    // setName("");//here
    // setPhno("");
    // setDob("");
    // setEmail("");
    // setGender("");
    // setRollno("");
    // setNationality("");
    // setCom("");
    // setProfimg("");
    // setCaste("");
    // setHstday("");
    // setMothertong("");
    // setLang("");
    // setMedium("");
    // setSubject1("");
    // setSubject2("");
    // setSubject3("");
    // setTnpceeno("");
    // setCutoffmrk("");
    // setModesel("");
    // setOverallrank("");
    // setCoact("");
    // setExtract("");
    // setPrize("");
    // setAddresstyp("");
    // setAddress("");
    // setFathernam("");
    // setFathereduc("");
    // setMothernam("");
    // setMothereduc("");
    // setAnnualInc("");

  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await subjectServices.getSubject(id);
      
      setName(docSnap.data().name);
      setPhno(docSnap.data().phno);//here
      setDob(docSnap.data().dob);
      setEmail(docSnap.data().email);
      setGender(docSnap.data().gender);
      setRollno(docSnap.data().regno);
      setNationality(docSnap.data().nationality);
      setCom(docSnap.data().com);
      setProfimg(docSnap.data().profimg);
      setCaste(docSnap.data().caste);
      setHstday(docSnap.data().hstday);
      setMothertong(docSnap.data().mothertong);
      setLang(docSnap.data().lang);
      setMedium(docSnap.data().medium);
      setSubject1(docSnap.data().subject1);
      setSubject2(docSnap.data().subject2);
      setSubject3(docSnap.data().subject3);
      setTnpceeno(docSnap.data().tnpceeno);
      setCutoffmrk(docSnap.data().cutoffmrk);
      setModesel(docSnap.data().modesel);
      setOverallrank(docSnap.data().overallrank);
      setCoact(docSnap.data().coact);
      setExtract(docSnap.data().extract);
      setPrize(docSnap.data().prize);
      setAddresstyp(docSnap.data().setAddresstyp);
      setAddress(docSnap.data().address);
      setFathernam(docSnap.data().fathernam);
      setFathereduc(docSnap.data().fathereduc);
      setMothernam(docSnap.data().mothernam);
      setMothereduc(docSnap.data().mothereduc);
      setAnnualInc(docSnap.data().annualinc);
     




    //   setSubject(docSnap.data().subject);
    //   set(docSnap.data().clad);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };
    // async function handleSubmit(e) {

    //     e.preventDefault();
    //     try {
    //         setError("");
    //             setLoading(true)
    //             navigate("/student-dashboard");
    //     } catch {
    //         setError("Failed to log in");
    //     }
    //     setLoading(false)

    // }
    useEffect(() => {
        if (id !== undefined && id !== "") {
          editHandler();
        }
      }, [id]);
    return (

        <>
        {message?.msg && (
            <Alert
              variant={message?.error ? "danger" : "success"}
              dismissible
              onClose={() => setMessage("")}
            >
              {message?.msg}
            </Alert>
          )}
        <div>
            <div id="biodata_body">
            {error && <h2>{error}</h2>}

                <div className="biodata-container">
                    <div className="stud_bio_header"><header>STUDENT - BIO DATA REGISTRATION</header></div>

                    <form onSubmit={handleSubmit} >
                        <div className="form first">
                            <div className="details personal">
                                <span className="title">Personal Details</span>

                                <div className="fields">
                                    <div className="input-field">
                                        <label>Full Name <span style={{color:"red"}}>*</span></label>
                                        <input type="text" placeholder="Enter your name and initial" name="fullname_cls" required 
                                        value={name}//here
                                        onChange={(e) => setName(e.target.value)}/>
                                    </div>

                                    <div className="input-field">
                                        <label>Date of Birth <span style={{color:"red"}}>*</span></label>
                                        <input type="date" placeholder="Enter birth date" name="dob_cls"  required
                                         value={dob}//here
                                         onChange={(e) => setDob(e.target.value)}/>
                                    </div>

                                    <div className="input-field">
                                        <label>Email <span style={{color:"red"}}>*</span></label>
                                        <input type="text" placeholder="Enter your email" name="email_cls" required 
                                         value={email}//here
                                         onChange={(e) => setEmail(e.target.value)}/>
                                    </div>

                                    <div className="input-field">
                                        <label>Mobile phno <span style={{color:"red"}}>*</span></label>
                                        <input type="phno" placeholder="Enter mobile phno" name="stu_mobcls"  required
                                        value={phno}
                                        onChange={(e) => setPhno(e.target.value)}/>
                                    </div>
                                    <div className="input-field">
                                    
                                        <div>
                                            <label>Gender <span style={{color:"red"}}>*</span></label> <br />

                                            <input type="radio"  name="gender"
                                            value="Male"
                                            onChange={handleGender}/><label>Male</label>

                                            <input type="radio"  name="gender" 
                                            value="Female"
                                            onChange={handleGender}/><label >Female</label>

                                               <input type="radio"  name="gender"
                                            value="Other"
                                            onChange={handleGender}/><label>Others</label>
                                        </div>
                                    </div>

                                    <div className="input-field">
                                        <label>Parent phone no. <span style={{color:"red"}}>*</span></label>
                                        <input type="number" placeholder="Enter parent ph.no" name="phno_class"  required
                                         value={pphno}
                                         onChange={(e) => setPphno(e.target.value)}/>
                                    </div>                                  

                                    
                                </div>
                            </div>

                            <div className="details ID">
                                <span className="title">Identity Details </span>

                                <div className="fields">
                                    <div className="input-field">
                                        <label>Roll no. <span style={{color:"red"}}>*</span></label>
                                        <input type="text" placeholder="Enter roll-no" name="rollno_class" required
                                        value={regno}
                                        onChange={(e) => setRollno(e.target.value)} />
                                    </div>

                                    <div className="input-field">
                                        <label>Nationality <span style={{color:"red"}}>*</span></label>
                                        <input type="text" placeholder="Enter nationality" name="nation" required
                                        value={nationality}
                                        onChange={(e) => setNationality(e.target.value)} />
                                    </div>

                                    <div className="input-field">
                                        <div id="community">
                                            <label htmlFor="comm" id="community">Community <span style={{color:"red"}}>*</span></label><br />
                                            <label>
                                            <input type="radio" id="OC" name="com_radio"
                                            value="OC"
                                            onChange={(e) => {
                                                setCom(e.target.value);
                                            }}/>
                                            OC</label>

                                            <label><input type="radio" id="BC"  name="com_radio" 
                                            value="BC"
                                            onChange={(e) => setCom(e.target.value)}/>
                                            BC</label>

                                            <label><input type="radio" id="MBC" name="com_radio"
                                            value="MBC"
                                            onChange={(e) => setCom(e.target.value)}/>
                                            MBC</label>

                                            <label><input type="radio" id="SC"value="SC"
                                            onChange={(e) => setCom(e.target.value)} />
                                            SC</label>

                                            <label> <input type="radio" id="ST"  name="com_radio" 
                                            value="ST"
                                            onChange={(e) => setCom(e.target.value)}/>
                                            ST</label>

                                        </div>
                                    </div>

                                    <div className="input-field">
                                        <label>Profile Image <span style={{color:"red"}}>*</span></label>
                                        <input type="file" style={{ padding: "10px" }} name="prof_img" required
                                        onChange={handleImageFile}   />
                                    </div>

                                    <div className="input-field">
                                        <label htmlFor="nameofcaste" id="nameofcaste" >
                                            Name of the Caste <span style={{color:"red"}}>*</span>
                                        </label>
                                        <input type="text" name="nameofcaste" required
                                        value={caste}
                                        onChange={(e) => setCaste(e.target.value)}/>    

                                    </div>

                                    <div className="input-field">
                                        <div>
                                            <label>Hosteller/Dayscholar <span style={{color:"red"}}>*</span></label> <br />

                                            <input type="radio"  name="hstday_radio"
                                            value="Hosteller"
                                            onChange={handleHstday}/><label>Hosteller</label>

                                            <input type="radio"  name="hstday_radio" 
                                            value="Dayscholar"
                                            onChange={handleHstday}/><label >Dayscholar</label>
                                        </div>
                                    </div>

                                    <div className="input-field">
                                        <label htmlFor="mother-tongue" id="mother_tongue">Mother Tongue <span style={{color:"red"}}>*</span></label>
                                        <input type="text" name="mother_tongue" required
                                        value={mothertong}
                                        onChange={(e) => setMothertong(e.target.value)} />
                                    </div> <br />

                                    <div className="input-field">
                                        <div>
                                            <label >Languages known <span style={{color:"red"}}>*</span></label><br />
                                            <input type="text" name="lang_cls" required
                                            value={lang}
                                            onChange={(e) => setLang(e.target.value)} />
                                        </div>

                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="medium" id="medium">Medium of Instructions/Upto 12th <span style={{color:"red"}}>*</span></label>
                                        <input type="text" name="medium"  required
                                        value={medium}
                                        onChange={(e) => setMedium(e.target.value)}/>
                                    </div> <br />

                                    <div className="input-field">
                                        <label htmlFor="marks" id="marks">Marks obtained in +2 <span style={{color:"red"}}>*</span></label><br />

                                        <label htmlFor="maths" id="Mathematics">Mathematics <span style={{color:"red"}}>*</span></label>
                                        <input type="number" name="1"  required
                                        value={subject1}
                                        onChange={(e) => setSubject1(e.target.value)}
                                        />

                                        <label htmlFor="physics" id="physics">Physics <span style={{color:"red"}}>*</span></label>
                                        <input type="number" name="2" required 
                                        value={subject2}
                                        onChange={(e) => setSubject2(e.target.value)}/>

                                        <label htmlFor="chemistry" id="chemistry">Chemistry <span style={{color:"red"}}>*</span></label>
                                        <input type="number" name="3" required
                                        value={subject3}
                                        onChange={(e) => setSubject3(e.target.value)} />

                                    </div>

                                    <div className="input-field">
                                        <label htmlFor="tnpcee" id="tnpcee">TNPCEE REG.NO and Cutoff Marks <span style={{color:"red"}}>*</span></label>
                                        <input type="number" id="tnpcee" placeholder="TNPCEE REG.NO" name="tn_reg"  required
                                        value={tnpceeno}
                                        onChange={(e) => setTnpceeno(e.target.value)}/>
                                        <input type="number" id="tnpcee" placeholder="Cutoff Marks" maxLength="100" name="cutoff_marks" required
                                        value={cutoffmrk}
                                        onChange={(e) => setCutoffmrk(e.target.value)} />
                                    </div>

                                    <div className="input-field">
                                        <div>
                                            <label htmlFor="selection" id="selection">Mode of selection for this course <span style={{color:"red"}}>*</span></label><br />

                                            <input type="radio" id="selection" name="course_radio" 
                                            value="Merit"
                                            onChange={(e) => setModesel(e.target.value)} />
                                            <label htmlFor="Merit" id="merit">Merit</label>

                                            <input type="radio" id="selection"  name="course_radio" 
                                            value="Community"
                                            onChange={(e) => setModesel(e.target.value)}/>
                                            <label html For="com-based" id="com_based">Community </label>

                                            <input type="radio" id="selection" name="course_radio" 
                                            value="Rural"
                                            onChange={(e) => setModesel(e.target.value)}/>
                                            <label html For="rural" id="rural">Rural </label><br />

                                            <label html For="anyother">Any other Quota:</label>
                                            <input type="text" id="anyother_quota" name="course_radio"
                                            value={modesel}
                                            onChange={(e) => setModesel(e.target.value)} />
                                        </div>
                                    </div>


                                    <div className="input-field">
                                        <label htmlFor="rank" id="rank">Overall rank <span style={{color:"red"}}>*</span></label>
                                        <input type="text" name="rank" placeholder="rank" required
                                        value={overallrank}
                                        onChange={(e) => setOverallrank(e.target.value)} />
                                    </div>

                                    <div className="input-field">
                                        <label htmlFor="cocuri" id="co_activities">Co-curricular Activities <span style={{color:"red"}}>*</span></label>
                                        <input type="text" name="co_activities" required
                                        value={coact}
                                        onChange={(e) => setCoact(e.target.value)} />

                                        <label htmlFor="extraacct" id="extra_activity">Extra curricular Activities <span style={{color:"red"}}>*</span></label>
                                        <input type="text" name="extra_activity"  required
                                        value={extract}
                                        onChange={(e) => setExtract(e.target.value)}/>
                                    </div>
                                    <div className="input-field">
                                        <div>
                                            <label >Any prize or awards received? <span style={{color:"red"}}>*</span></label><br />
                                            <input type="radio"  name="prize_radio" required
                                            value="Yes"
                                            onChange={(e) => setPrize(e.target.value)} /><label >Yes</label >

                                            <input type="radio"  name="prize_radio"
                                            value="No"
                                            onChange={(e) => setPrize(e.target.value)} /><label >No</label >
                                        </div>
                                    </div>
                             </div>
                         </div>
                         <div className="details address">
                                <span className="title">Address Details </span>

                                <div className="fields">
                                    <div className="input-field">
                                        <label>Address Type <span style={{color:"red"}}>*</span></label>
                                        <input type="text" placeholder="Permanent or Temporary" name="temp_perman" required
                                        value={addresstyp}
                                        onChange={(e) => setAddresstyp(e.target.value)} />
                                    </div>

                                    <div className="input-field">
                                        <label>Address <span style={{color:"red"}}>*</span></label>
                                        <textarea name="adress_stud" style={{ resize: "none" }} cols="15" rows="10" required
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="details family">
                                <span className="title">Family Details </span>

                                <div className="fields">
                                    <div className="input-field">
                                        <label>Father Name <span style={{color:"red"}}>*</span></label>
                                        <input type="text" placeholder="Enter father name" name="dad_name" required
                                        value={fathernam}
                                        onChange={(e) => setFathernam(e.target.value)} />
                                    </div>

                                    <div className="input-field">
                                        <label>Father's Educational Qualification <span style={{color:"red"}}>*</span></label>
                                        <input type="text" placeholder="Edu. Qualification" name="dad_educ" required
                                        value={fathereduc}
                                        onChange={(e) => setFathereduc(e.target.value)} />
                                    </div>

                                    <div className="input-field">
                                        <label>Mother Name <span style={{color:"red"}}>*</span></label>
                                        <input type="text" placeholder="Enter mother name" name="mom_name" required 
                                        value={mothernam}
                                        onChange={(e) => setMothernam(e.target.value)}/>
                                    </div>
                                    <div className="input-field">
                                        <label>Mother's Educational Qualification <span style={{color:"red"}}>*</span></label>
                                        <input type="text" placeholder="Edu. Qualification" name="mom_educ" required
                                        value={mothereduc}
                                        onChange={(e) => setMothereduc(e.target.value)} />
                                    </div>

                                    <div className="input-field">
                                        <label>Annual Income <span style={{color:"red"}}>*</span></label>
                                        <input type="number" placeholder="Annual income" name="annual_income" required
                                        value={annualinc}
                                            onChange={(e) => setAnnualInc(e.target.value)}/>
                                    </div>
                               </div>

                          </div>

                                    <button id="studbio_submit" className="sumbit" disabled={loading}>
                                        <span className="btnText">Submit</span>
                                        <i className="uil uil-navigator"></i>
                                    </button>    

                       </div>



                    </form>
                    {/* {imageAsUrl && <div className="download_url">
                <h2>URL</h2>
                <a href={imageAsUrl} target="_blank" rel="noreferrer">{imageAsUrl}</a>
            </div>} */}
                </div>

                {/* <script>
                    $("#studbio_submit").click(function() {
                        alert("Your bio data  has been Submitted sucessfully!!!.")});
                </script> */}

            </div>
        </div>
        </>
    )
}
