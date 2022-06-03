
import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"

import { Link, useNavigate } from "react-router-dom"
import "./studentedit.css";

function Studentedit() {

  const regno = useRef()
  const regno2 = useRef()
  const passwordRef = "gcecse123"
  const { signup,logout} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [update, setUpdate] = useState(true)
  const history = useNavigate()

  async function adminsignup(e) {
    e.preventDefault()


    try {
      setError("")
      setLoading(true)
      await signup(regno.current.value+"@gmail.com", passwordRef)
      setError("Student "+regno.current.value +" added Successfully")
      regno.current.value=""
    } catch {
      setError("Failed to add student")
    }

    setLoading(false)
  }
  async function admindel(e) {
    e.preventDefault()
    setUpdate(false)
    try {
      setError("")
      setLoading(true)
      await signup(regno2.current.value+"@gmail.com","student")
      setError("Student "+regno2.current.value +" deleted Successfully") 
      regno.current.value=""
    } catch {
      setError("Failed to delete student")
    }

    setLoading(false)
  }
  
  async function handleLogout() {
    setError("")

    try {
      await logout()
      history("/");
    } catch {
      setError("Failed to log out")
    }
  }

    return(
        <div className="studentedit">
        <div id="admin_header"><h1>ADMIN DASHBOARD</h1></div>
    <div className="admin-wrapper">
       <input type="checkbox" id="btn" hidden />
       <label htmlFor="btn" className="admin-menu-btn">
       <i className="fas fa-bars"></i>
       <i className="fas fa-times"></i>
       </label>
       <nav id="sidebar">
          <div className="admin-title">
             Side Menu
          </div>
          <ul className="admin-list-items">
          <li><Link to="/admin-dashboard"><i className="fas fa-home"></i>Home</Link></li>
               <li><Link to="/admin-student-edit"><i className="fas fa-sliders-h"></i>Students edit</Link></li>
               <li><Link to="/admin-staff-edit"><i className="fas fa-address-book"></i>Staffs edit </Link></li>
               <li><Link to="/admin-subjects-edit"><i className="fas fa-cog"></i>Subjects edit</Link></li>
               <li><Link to="/change-password"><i className="fas fa-stream"></i>Change Password</Link></li>
               <li><button className="logout-btn" onClick={handleLogout}><i className="fas fa-user"></i>&emsp;&ensp;Log out</button></li>

          </ul>
       </nav>
    </div>
    {error&& <h3 style={{position:"absolute" ,
            top: "150px",
            left:update?"10%":"63%",
            textAlign:"center",
            color:update?"blue":"red"
    }}>{error}</h3>}
    <div className="admin-wrapper1">
        <div className="admin-container">            
            <div className="admin-simple-cards">              
              
              <div className="admin-items">
                <h4>ADD STUDENT</h4>
                <div className="admin-cards-content">
                
                  <form onSubmit={adminsignup}>
                    <input id="input_reg" type="text" placeholder="Registered No." ref={regno} onFocus={e=>{setError('')}}/>
                    <input id="input_sub_add" type="submit" value="ADD" />
                </form>
                </div>
              </div>

              <div className="admin-items">
              
                <h4>DELETE STUDENT</h4>
                <div className="admin-cards-content">
                  <form  onSubmit={admindel}>
                      <input id="input_reg" type="text" placeholder="Registered No." ref={regno2} onFocus={e=>{setError('')}}/>
                      <input id="input_sub_del" type="submit" value="DELETE" />
                  </form>
                </div>
              </div>
            </div>
          </div>
     </div>
        </div>
    );
}


export default Studentedit;