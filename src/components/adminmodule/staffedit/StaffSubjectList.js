import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import FacultyDataService from "../services/staffSubject.services.js";

const SubjectsList = ({ getSubjectId }) => {
  const [subject, setSubjects] = useState([]);
  useEffect(() => {
    getSubjects();
  }, []);

  const getSubjects = async () => {
    const data = await FacultyDataService.getAllSubjects();
    console.log(data.docs);
    setSubjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await FacultyDataService.deleteSubject(id);
    getSubjects();
  };
  return (
    <>
      <div className="mb-2">  
        <Button variant="dark edit" onClick={getSubjects}>
          Refresh List
        </Button>
      </div>

 
          {subject.map((doc, index) => {
            return (     <>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Faculty Name</th>
                <th>Subject Code</th>
                <th>Subject Code</th>
                <th>Subject Code</th>
                <th>Class Advisor</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody >
              <tr key={doc.id} style={{textAlign:"center"}}>
                <td>{index + 1}</td>
                <td>{doc.name}</td>
                <td>{doc.Subject[0]}</td>
                <td>{doc.Subject[1]}</td>
                <td>{doc.Subject[2]}</td>
                {/* <td>{doc.Subject[2]}</td> */}
                <td>{doc.clad}</td>
                <td >
                  <Button
                    variant="secondary"
                    className="edit"
                    style={{width:"100%"}}
                    onClick={(e) => getSubjectId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    style={{width:"100%"}}
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
           </tbody>
        </Table>
      </>);
          })}
      
    </>
  );
};

export default SubjectsList;