import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate,useLocation } from "react-router-dom"
import { db } from '../../firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import "./loginstyle.css";

function StudentLogin() {
  const {setAuth} = useAuth();
  const location =useLocation();
  // const from = location.state?.from?.pathname || "/";
  const regno = useRef();
  const password = useRef();
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  // const studentref = collection(db,'student')


  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true)
      await login(regno.current.value + "@gmail.com", password.current.value);
      navigate("/student-dashboard");
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

            <div className="title"><span>Student Login</span></div>

            <form onSubmit={handleSubmit} className="login_form">
              {error && <h2>{error}</h2>}
              <div className="row">
                <i className="fas fa-user"></i>
                <input type="text" ref={regno} placeholder="Roll no." minLength={7} required />
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
export default StudentLogin;


// import React, { useRef, useState } from "react"
// import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
// import { Link, useHistory } from "react-router-dom"

// export default function Login() {
//   const emailRef = useRef()
//   const passwordRef = useRef()
  // const { login } = useAuth()
  // const [error, setError] = useState("")
  // const [loading, setLoading] = useState(false)
  // const history = useHistory()

  // async function handleSubmit(e) {
  //   e.preventDefault()

  //   try {
  //     setError("")
  //     setLoading(true)
  //     await login(emailRef.current.value, passwordRef.current.value)
  //     history.push("/")
  //   } catch {
  //     setError("Failed to log in")
  //   }

  //   setLoading(false)
  // }

//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Log In</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" ref={emailRef} required />
//             </Form.Group>
//             <Form.Group id="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" ref={passwordRef} required />
//             </Form.Group>
//             <Button disabled={loading} className="w-100" type="submit">
//               Log In
//             </Button>
//           </Form>
//           <div className="w-100 text-center mt-3">
//             <Link to="/forgot-password">Forgot Password?</Link>
//           </div>
//         </Card.Body>
//       </Card>
//       <div className="w-100 text-center mt-2">
//         Need an account? <Link to="/signup">Sign Up</Link>
//       </div>
//     </>
//   )
// }