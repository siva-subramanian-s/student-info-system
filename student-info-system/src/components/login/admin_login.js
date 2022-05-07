import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import "./loginstyle.css";

function AdminLogin() {
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
      if (regno.current.value==="admin") {
      console.log("error");
      setLoading(true)
      await login(regno.current.value+"@gmail.com", password.current.value);
      navigate("/Admin-dashboard");
      }else{
        setError("Failed to log in");
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
            <div className="title"><span>Admin Login</span></div>
            <form onSubmit={handleSubmit} className="login_form">
            {error && <h2>{error}</h2>}
              <div className="row">
                <i className="fas fa-user"></i>
                <input type="text" ref={regno} placeholder="Admin" minLength={5} required />
              </div>
              <div className="row">
                <i className="fas fa-lock"></i>
                <input type="password"ref={password} placeholder="Password" minlenght={8} required />
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
export default AdminLogin;