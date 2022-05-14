
import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import "./studentedit.css";

function Studentedit() {

  const regno = useRef()
  const passwordRef = "gcecse123"
  const { signup ,resetPassword,logout} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  // async function adminsignup(e) {
  //   e.preventDefault()


  //   try {
  //     setError("")
  //     setLoading(true)
  //     await signup(regno.current.value+"@gmail.com", passwordRef)
      
  //   } catch {
  //     setError("Failed to add student")
  //   }

  //   setLoading(false)
  // }
  // async function admindel(e) {
  //   e.preventDefault()
  //   try {
  //     setError("")
  //     setLoading(true)
  //     await signup(regno.current.value+"@gmail.com", passwordRef)
      
  //   } catch {
  //     setError("Failed to add student")
  //   }

  //   setLoading(false)
  // }
  // async function adminchgpwd(e) {
  //   e.preventDefault()
  //   try {
  //     setError("")
  //     setLoading(true)
  //     await resetPassword(regno.current.value+"@gmail.com")
      
  //   } catch {
  //     setError("Failed to add student")
  //   }

  //   setLoading(false)
  // }
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
          <li><a href="/admin-dashboard"><i className="fas fa-home"></i>Home</a></li>
               <li><a href="/admin-student-edit"><i className="fas fa-sliders-h"></i>Students edit</a></li>
               <li><a href="/admin-staff-edit"><i className="fas fa-address-book"></i>Staffs edit </a></li>
               <li><a href="/admin-subjects-edit"><i className="fas fa-cog"></i>Subjects edit</a></li>
               <li><a href="/change-password"><i className="fas fa-stream"></i>Change Password</a></li>
             <li><button onClick={handleLogout}><i class="fas fa-user"></i>Log out</button></li>
          </ul>
       </nav>
       {error && <h2>{error}</h2>}
    </div>
    
    <div className="admin-wrapper1">
        <div className="admin-container">            
            <div className="admin-simple-cards">              

              <div className="admin-items">
                <h4>ADD STUDENT</h4>
                <div className="admin-cards-content">

                  <form >
                    <input id="input_reg" type="text" placeholder="Registered No." ref={regno} />
                    <input id="input_sub_add" type="submit" value="ADD" />
                </form>
                </div>
              </div>

              <div className="admin-items">
                <h4>DELETE STUDENT</h4>
                <div className="admin-cards-content">
                  <form  >
                      <input id="input_reg" type="text" placeholder="Registered No." />
                      <input id="input_sub_del" type="submit" value="DELETE" />
                  </form>
                </div>
              </div>

              <div className="admin-items">
                <h4>CHANGE STUDENT PASSWORD</h4>
                <div className="admin-cards-content">
                    <form >
                        <input id="input_reg" type="text" placeholder="Registered No." />
                        <input id="input_sub_alter" type="submit" value="CHANGE PASSWORD" />
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