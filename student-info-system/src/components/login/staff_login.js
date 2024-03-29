import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import "./loginstyle.css";

function StaffLogin() {
  const regno = useRef();
  const password = useRef();
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  async function handleSubmit(e) {
    
    e.preventDefault();
    try {
      setError("");
      if (isNaN(regno.current.value)) {
      console.log("error");
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
            <div className="title"><span>Staff Login</span></div>
            <form onSubmit={handleSubmit} className="login_form">
            {error && <h2>{error}</h2>}
              <div className="row">
                <i className="fas fa-user"></i>
                <input type="text" ref={regno} placeholder="Staff Name" minLength={7} required />
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