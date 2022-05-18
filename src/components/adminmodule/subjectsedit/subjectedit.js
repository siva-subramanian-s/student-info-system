
import { Container, Navbar, Row, Col } from "react-bootstrap";
import React from "react";  

import { useState } from "react";
import "./subjects.css";
import "../admin/admin.css";
import AddSubject from "./AddSubject";
import SubjectList from "./SubjectList";
function Subjectedit() {
    const [subjectId, setSubjectId] = useState("");

    const getSubjectIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setSubjectId(id);
    };
    return (
        <div className="subjectedit">
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
                        <li><a href="/admin-staff-edit"><i className="fas fa-address-Subject"></i>Staffs edit </a></li>
                        <li><a href="/admin-subjects-edit"><i className="fas fa-cog"></i>Subjects edit</a></li>
                        <li><a href="/change-password"><i className="fas fa-stream"></i>Change Password</a></li>
                        <li><a href="/"><i className="fas fa-user"></i>Log out</a></li>
                    </ul>
                </nav>
            </div>
        
           <div className="listOfSubjects">
            <>
                <Navbar bg="dark" variant="dark" className="header">
                <Container>
                    <Navbar.Brand href="#home">SUBJECTS EDIT PANEL</Navbar.Brand>
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
            
        
    )
}

export default Subjectedit;