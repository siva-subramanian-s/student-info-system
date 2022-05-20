import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import "./loginstyle.css";
// import Class from "../staff/class";
import Staff from "../staff/staff";
// import facultytosubServices from "../adminmodule/services/facultytosub.services";

function StaffLogin() {
  const regno = useRef();
  const password = useRef();
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [staffid,setStaffid] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  async function handleSubmit(e) {
    
    e.preventDefault();
    try {
      setError("");
      if (isNaN(regno.current.value)) {
      setLoading(true)
      await login(regno.current.value+"@gmail.com", password.current.value);
      navigate("/classes");
      }
    } catch {
      setError("Failed to log in");
    }
    setLoading(false)
    
  }
  return ( 
    <div className="Login">
      <div className="login_user">
        <div className="login_container">
          <div className="login_wrapper">
            <div className="title"><span>Faculty Login</span></div>
            <form onSubmit={handleSubmit} className="login_form">
            {error && <h2>{error}</h2>}
              <div className="row">
                <i className="fas fa-user"></i>
                <select  id="faculty-user" ref={regno} onChange={(e)=>setStaffid(e.target.value)}>
                <option disabled selected>Faculty name</option>
                  <option >Mrs.P.Tharani</option>
                  <option >Mrs.K.Manimala </option>
                  <option >Mrs.P.Nithya</option>
                  <option >Mrs.S.Ruba</option>
                  <option >Mrs.K.Saraswathi</option>
                  <option >Dr.C.Rani</option>
                  <option value={"Dr.R.GoldaBrunet"}>Dr.R.Golda Brunet</option>
                </select>
              </div>
              <div className="row">
                <i className="fas fa-lock"></i>
                <input type="password" ref={password} placeholder="Password" minLength={8} required />
              </div>
              <div className="row button">
                <input type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>



  );
}
export default StaffLogin;