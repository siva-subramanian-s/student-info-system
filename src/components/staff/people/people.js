import React, { useState, useEffect } from "react";
import { useLocation ,useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import acss from "../../attendance/style_atten.module.css";
import subjectServices from "../../adminmodule/services/subject.services";
import { db } from "../../../firebaseConfig";
import Person from "./Person";
import { doc, getDoc } from "firebase/firestore";
import "./people.css";
import { useAuth } from "../../contexts/AuthContext";

export default function People() {
  const [Error, setError] = useState("");
  const{logout }= useAuth();
  const location = useLocation();
  const [add, setAdd] = useState(false);
  const [message, setMessage] = useState({ error: false, msg: "" });
  const code = location.state.code;
  const Navigate = useNavigate()

  async function handleLogout() {
    setError("")
    try {
       await logout()
       Navigate("/");
    } catch {
       setError("Failed to log out")
    }
  }

  const [regno, setRegnoList] = useState([{}]);
  const [docSnap, setDocSnap] = useState();
  const [Student, setStudent] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // console.log(code);
    const studocref = doc(db, "subStud", code);
    const stddata = await subjectServices.getStudent();
    setStudent(stddata.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    const snap = await getDoc(studocref);
    setDocSnap(snap.data());
  };
console.log(docSnap)
console.log(Student)
  var people=[{}]

  if(docSnap){
  for (let index = 0; index < docSnap.rollno.length; index++) {
      Student.map((doc)=>{
        if (doc.regno===docSnap.rollno[index]) {
          if(people){
            people=[...people,
              {
                name: doc.name,
                rollno:doc.regno,
                pfp:doc.profimg
              }]
          }
        }
      })    
  }
}
  console.log(people);

  function createpeople(props) {
    return(
      <Person
      pfp={props.pfp}
      name={props.name}
      rollno={props.rollno}
      />
    )
  }
  const handleSubmit = async (e) => {
    var rollno = docSnap.rollno;
    rollno = rollno.concat(regno);

    e.preventDefault();
    setMessage("");
    const newPeople = {
      rollno,
    };

    try {
      if (docSnap) {
        await subjectServices.updatePeople(code, newPeople);
        // console.log("hi");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await subjectServices.addPeople(code, newPeople);
        setMessage({ error: false, msg: "Student(s) enrolled successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setAdd(false);
  };

  const handleRegnoChange = (e, index) => {
    const { value } = e.target;
    const list = [...regno];
    list[index] = value;
    setRegnoList(list);
  };
  const handleRegnoAdd = () => {
    setRegnoList([...regno, {}]);
  };
  const handleRegnoRemove = (index) => {
    const list = [...regno];
    list.splice(index, 1);
    setRegnoList(list);
  };
  const handleADD = () => {
    setAdd(true);
  };

  return (
    <div>
      <div className="Faculty__header">
        <div className="people__head">
          <h1>{location.state.code}</h1>
          <h3>{location.state.sub}</h3>
        </div>
        <div className="faculty__nav">
          <ul className="staff_nav_ul" data-visible="false">
            <li className="nav_li">
              <button>
                <Link to="/change-fac-password">Change Password </Link>
              </button>
            </li>
            <li className="nav_li">
              <button onClick={handleLogout}>
                <Link to="/">Sign out</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="people">
        <h3>People</h3>
        <button onClick={handleADD}>ADD</button>
      </div>
      { add && <div className="insideBox">
        {
          regno.map((singleReg, index) => (
            <td key={index}>
              <input
                className="inputBoxPeople"
                type="text"
                placeholder="Reg no"
                name="regNo"
                value={singleReg.regNo}
                onChange={(e) => handleRegnoChange(e, index)}
              />
              <br />
              {regno.length - 1 === index && (
                <input
                  type="button"
                  className={acss.btn}
                  value="+"
                  onClick={handleRegnoAdd}
                />
              )}
              {regno.length > 1 && (
                <input
                  type="button"
                  className={acss.btn}
                  value="-"
                  onClick={() => handleRegnoRemove(index)}
                />
              )}
            </td>
          ))}
        {add && (
          <center>
            <input
              onClick={handleSubmit}
              className="submit__btn"
              type="submit"
              value="Add Reg.no(s)"
            />
          </center>
        )}
      </div>}
      {people&&people.map(createpeople)}
    </div>
  );
}
