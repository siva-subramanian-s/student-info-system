import React, { useState,useEffect } from "react";
import "./staffstyle.css";
import Class from "./class";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import SubjectDataService from "../adminmodule/services/subject.services";
function createCard(props) {
  return (
    <Class
      key={props.key}
      abb={props.abb}
      code={props.code}
      name={props.name}
      year={props.year}
      facname={props.facname} />
  );
}

function Staff(props) {
  const { currentUser ,logout} = useAuth()
  const location = useLocation();
  const [subject, setSubjects] = useState([]);
  var Array = [];
  const [error,setError] = useState("");
  const Navigate = useNavigate()
  var name = currentUser.email;
  var slice = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i] == '@') slice = i;
  }
  name=name.toUpperCase();
  name = name.slice(0, slice);


  useEffect(() => {
    getSubjects();
  }, []);
  const getSubjects = async () => {
    const data = await SubjectDataService.getAllSubjects();
    setSubjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  var faculties =location.state.faculty;
  for(let i=0;i<faculties.length;i++){
    if(faculties[i].name.toUpperCase()===name){
      for (let j = 0; j < faculties[i].Subject.length; j++) {
        subject.map((doc)=>{
        
          if(doc.code===faculties[i].Subject[j]){
            (
              Array =[...Array,
              {
                key:j,
                name:doc.name,
                year:doc.year,
                code:doc.code,
                abb:doc.abb,
                facname: name
              }]
            )
          }
        })
      }
    }
  }
  async function handleLogout() {         
    setError("")
    try {
       await logout()
       Navigate("/");
    } catch {

       setError("Failed to log out")
    }
 }
  return (
    <>
      <div className="Faculty__header">
        <div className="faculty__name">
          <h1>{name}</h1>
        </div>
        <div>
          <ul className="staff_nav_ul" data-visible="false">
            <li className="nav_li"><button><Link to="/">Home</Link></button></li>
            <li className="nav_li"><button><Link to="/change-fac-password">Password change</Link></button></li>
            <li className="nav_li"><button onClick={handleLogout}><Link to="/">Sign out</Link></button></li>
          </ul>
        </div>
      </div>
      <br /><br />
      <div className="Cont">
        {Array.map(createCard)}
      </div>
    </>
  );
}
export default Staff;