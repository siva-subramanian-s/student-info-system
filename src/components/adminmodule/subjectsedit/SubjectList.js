import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import SubjectDataService from "../services/subject.services.js";

const SubjectsList = ({ getSubjectId }) => {
  const [subject, setSubjects] = useState([]);
  useEffect(() => {
    getSubjects();
  }, []);

  const getSubjects = async () => {
    const data = await SubjectDataService.getAllSubjects();
    console.log(data.docs);
    setSubjects(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await SubjectDataService.deleteSubject(id);
    getSubjects();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getSubjects}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(Subjects, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Subject Name</th>
            <th>ABB</th>
            <th>Subject Code</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {subject.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.name}</td>
                <td>{doc.abb}</td>
                <td>{doc.code}</td>
                <td>{doc.year}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getSubjectId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default SubjectsList;