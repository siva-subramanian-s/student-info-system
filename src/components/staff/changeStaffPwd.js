import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./changeStaffPwd.css"
import { useAuth } from '../contexts/AuthContext';

function ChangePWD() {

   const [error, setError] = useState("")
   const [loading, setLoading] = useState(false)
   const [Newpassword, setNewpassword] = useState("")
   const Navigate = useNavigate()
   const {updatePassword } = useAuth()
   const password1 = useRef();
   const password2 = useRef();
   const [ok, setOk] = useState(false)

   async function changingPassword(e) {
      e.preventDefault();
      // setError("")
      try {
         setLoading(true)
         console.log(password1.current.value)
         console.log(password2.current.value)
         const pwd = password1.current.value;
         if (password1.current.value === password2.current.value) {

            await updatePassword(pwd)
            setOk(true)
            password1.current.value = ""
            password2.current.value = ""
            setError("Password Changed Successfully")
         } else {
            setError("Password didn't match")
         }
      } catch {
         setError("Failed to change password or try Login again")
      }
      setLoading(false)
   }
   return (
      <div className="changepassword">
         <div className="admin-wrapper1">
            <div className="admin-container">
               <div className="admin-simple-cards">
                  {error && <div>
                     <h2>{error}</h2>
                     {ok && <button id="input_sub_add" onClick={e => { Navigate("/classes") }}>ok</button>}
                  </div>}
                  <div className="admin-items">
                     <h4>NEW PASSWORD</h4>
                     <div className="admin-cards-content">

                        <form onSubmit={changingPassword}>
                           <input id="input_reg" type="password" placeholder="Enter Password" ref={password1} required onFocus={e=>{setError('')}} />
                           <input id="input_reg" type="text" placeholder="Re-Enter Password" ref={password2} style={{ marginTop: "2.5em" }} required onFocus={e=>{setError('')}} />
                           <input id="input_sub_add" type="submit" value="CHANGE" />
                        </form>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   )
}

export default ChangePWD;