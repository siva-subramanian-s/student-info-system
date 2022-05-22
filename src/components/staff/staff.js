import React, { useState,useEffect } from "react";
import "./staffstyle.css";
import Class from "./class";
import { Link, useLocation } from "react-router-dom";
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
  const { currentUser } = useAuth()
  const location = useLocation();
  const [subject, setSubjects] = useState([]);
  var Array = [];

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
    // console.log(data.docs);
    setSubjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  var faculties =location.state.faculty;
  console.log(faculties)
  for(let i=0;i<faculties.length;i++){
    //console.log("i loop");

    if(faculties[i].name.toUpperCase()===name){
      for (let j = 0; j < faculties[i].Subject.length; j++) {
        subject.map((doc)=>{
          // console.log(doc.code)
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
  console.log(Array);
  return (
    <>
      <div className="Faculty__header">
        <div className="faculty__name">
          <h1>{name}</h1>
        </div>
        <div>
          <ul className="staff_nav_ul" data-visible="false">
            <li className="nav_li"><Link to="/">Home</Link></li>
            <li className="nav_li"><Link to="/changepassword">Password change</Link></li>
            <li className="nav_li"><Link to="/">Sign out</Link></li>
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