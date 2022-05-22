import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import facultyDataService from "../adminmodule/services/absentees.services";
import acss from "./style_atten.module.css"


const AddSubject = ({ id, setSubjectId }) => {
  const [date, setName] = useState("");
  const [subs_a, setSubs_a] = useState(); 
  const [subs_b, setSubs_b] = useState(); 
  const [subs_c, setSubs_c] = useState(); 
  const [clad, setclad] = useState("false");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (date === "" || subs_a === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newSubject = {
      date,
      subs_a,
      subs_b,
      subs_c,
      clad,
    };
    console.log(newSubject);

    try {
      if (id !== undefined && id !== "") {
        await facultyDataService.updateSubject(id, newSubject);
        setSubjectId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await facultyDataService.addSubjects(newSubject);
        setMessage({ error: false, msg: "Subject assigned successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setName("");
    setSubs_a("");
    setSubs_b("");
    setSubs_c("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await facultyDataService.getSubject(id);
      console.log("the record is :", docSnap.data());
      setName(docSnap.data().date);
      setSubs_a(docSnap.data().subs_a);
      setSubs_b(docSnap.data().subs_b);
      setSubs_c(docSnap.data().subs_c);
      setclad(docSnap.data().clad);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        
        <div className="Attendance">
            <div className={acss.heading}>
                <center>Attendance Register</center>
            </div>
            <div className={acss.form_class}>
                <form date="atten-User" onSubmit={handleSubmit}>
                    <table /*className={acss.attentable}*/ center>
                        
                            <tr >
                                <th>Date</th>
                                <th>Subject</th>
                                <th>Period</th>
                                <th>Year</th>
                                <th>No. of absentees</th>
                            </tr>
                        
                        
                            <tr>
                                <td><input className={acss.inputBox} type="date" date="date" hint="dd-mm-yy" /></td>
                                <td><input className={acss.inputBox} type="text" date="subject" placeholder="Subject date"/></td>
                                <td><input className={acss.inputBox} type="number" date="period" placeholder="Class No." min="1" max="7"/></td>
                                <td><input className={acss.inputBox} type="number" date="year" placeholder="Study Year" min="1" max="4"/></td>
                                <td><input className={acss.inputBox} type="number" date="absentees" min="0" max="60"/> </td>
                            </tr>
                        
                    </table><br /><br />
                        <center><input className={acss.inputBox} type="submit"/></center>
                    </form>
                    </div>
                    <div className={acss.header}>
                        <div className={acss.innerheader}>             </div>
                        <div>
                            <svg className={acss.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" 
                    shapeRendering="auto" preserveAspectRatio="none"
                             >
                                <defs>
                                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                                </defs>
                                <g className={acss.parallax}>
                                    <use xlinHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                                </g>
                            </svg>
                        </div>
                    </div>
            </div>
        
      </div>
    </>
  );
};

export default AddSubject;