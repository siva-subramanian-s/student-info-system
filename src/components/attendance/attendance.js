import React, { useState,useEffect } from "react";
import {  Alert } from "react-bootstrap";
import acss from "./style_atten.module.css"
import { useLocation } from "react-router-dom";
import absenteesDataService from "../adminmodule/services/absentees.services";

function Attendance() {
    const [id, setAttendId] = useState("");
    const [regnoList,setRegnoList]=useState([{}]);

    const handleRegnoChange=(e,index)=>{
      const {value}=e.target;
      const list=[...regnoList];
      list[index]=value;
      setRegnoList(list);
    };
    const handleRegnoAdd=()=>{
      setRegnoList([...regnoList,{}])
    };
    const handleRegnoRemove=(index)=>{
      const list=[...regnoList];
      list.splice(index,1);
      setRegnoList(list);
    };

    const location =useLocation();
    // console.log(loctaion.state.sub)
    let sub = location.state.sub;
    let year =location.state.year;
    let d = new Date();
    d.getFullYear();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    // async function handlesubmit(e) {

    //     e.preventDefault();
    //     try {
            
    //         setError("");
    //         setLoading(true)
    //     } catch {
    //       setError("Failed to log in");
    //     }
    //     setLoading(false)
    
    //   }


    //   NEW-------------------
  const [date, setDate] = useState("");
  const [noAbs, setnoAbs] = useState(""); 
  const [period, setPeriod] = useState(""); 
  // const [regno, setRegno] = useState("1921045"); 
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (date === "" || noAbs === "" || period=== "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newAbsentees = {
      date,
      noAbs,
      period,
      sub,
      year,
      // regno,
      regnoList,
    };
    console.log(newAbsentees);

    try {
      if (id !== undefined && id !== "") {
        await absenteesDataService.updateSubject(id, newAbsentees);
        setAttendId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await absenteesDataService.addSubjects(newAbsentees);
        setMessage({ error: false, msg: "Absentees registered successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    // setRegno("");
    setPeriod("");
    setnoAbs("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await absenteesDataService.getSubject(id);
      console.log("the record is :", docSnap.data());
      setDate(docSnap.data().date);
      setnoAbs(docSnap.data().noAbs);
      setPeriod(docSnap.data().period);
    //   setSubject(docSnap.data().subject);
    //   set(docSnap.data().clad);
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
    //   NEW-------------------



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
        <div className="Attendance">
            <div className={acss.heading}>
                <center>Attendance Register</center>
            </div>
            <div className={acss.form_class}>
                <form name="atten-User" onSubmit={handleSubmit}>
                    <table /*className={acss.attentable}*/ center>
                        
                            <tr >
                                <th>Date</th>
                                <th>Subject</th>
                                <th>Period</th>
                                <th>Year</th>
                                <th>No. of absentees</th>
                            </tr>
                        
                        
                            <tr>
                                <td><input className={acss.inputBox} type="date" name="date" hint="dd-mm-yy" 
                                value={date}
                                onChange={(e) => setDate(e.target.value)}/></td>
                                <td><input className={acss.inputBox} type="text" name="subject" placeholder="Subject name" 
                                value={sub}
                               /></td>
                                <td><input className={acss.inputBox} type="number" name="period" placeholder="Class No." min="1" max="7"
                                value={period}
                                onChange={(e) => setPeriod(e.target.value)}/></td>
                                <td><input className={acss.inputBox} type="text" name="year" placeholder="Study Year" min="1" max="4"
                                value={year}
                                /></td>
                                <td><input className={acss.inputBox} type="number" name="absentees" min="0" max="60"
                                value={noAbs}
                                onChange={(e) => setnoAbs(e.target.value)}/> </td>
                            </tr>
                            
                        
                    </table>
                    <table>
                              <tr className={acss.atten__grid}>
                                {regnoList.map((singleReg,index)=> (
                                    <td key={index}><input className={acss.inputBox} type="text" placeholder="Reg no" name="regNo"
                                    value={singleReg.regNo}
                                    onChange={(e)=> handleRegnoChange(e,index)}/><br/>
                                    {regnoList.length-1===index && regnoList.length<noAbs &&
                                    (<input type="button" className={acss.btn} value="+" onClick={handleRegnoAdd}/>)}
                                    {regnoList.length>1 &&  <input type="button" className={acss.btn} value="-" onClick={()=>handleRegnoRemove(index)}/>}
                                   </td>
                                ))}
                              
                              </tr>
                            </table>
                    <br /><br />
                        <center><input disabled={loading} className={acss.submit__Btn} type="submit"/></center>
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
            </>
            );
    }

export default Attendance;