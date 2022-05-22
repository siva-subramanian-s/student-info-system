import { Container, Navbar, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "../admin/admin.css";
import AddSubject from "./LinkSubject";
import SubjectList from "./StaffSubjectList";

import { Link } from 'react-router-dom';
import React from "react";
import "./staff.css";

function Staffedit() {
  const [subjectId, setSubjectId] = useState("");

  const getSubjectIdHandler = (id) => {
  console.log("The ID of document to be edited: ", id);
  setSubjectId(id);
  };
    return (
        <div className="staffedit">
            <div id="admin_header"><h1>ADMIN DASHBOARD</h1></div>
    <div className="admin-wrapper">
       <input type="checkbox" id="btn" hidden/>
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
               <li><Link to="/"><i className="fas fa-user"></i>Log out</Link></li>
             
             
          </ul>
       </nav>
    </div>
    
    <div className="listOfSubjects">
            <>
                <Navbar bg="dark" variant="dark" className="header">
                <Container>
                    <Navbar.Brand href="#home">FACULTY EDIT PANEL</Navbar.Brand>
                </Container>
                </Navbar>

                <Container style={{ width: "400px" }}>
                <Row>
                    <Col>
                    <AddSubject id={subjectId} setSubjectId={setSubjectId} />
                    </Col>
                </Row>
                </Container>
                <Container>
                <Row>   
                    <Col>
                    <SubjectList getSubjectId={getSubjectIdHandler} />
                    </Col>
                </Row>
                </Container>
            </>
            </div> 
        </div>
    );
}
export default Staffedit;