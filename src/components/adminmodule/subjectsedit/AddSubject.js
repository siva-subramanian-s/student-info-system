import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import subjectDataService from "../services/subject.services.js";

const AddSubject = ({ id, setSubjectId }) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [year, setYear] = useState("III");
  const [abb, setAbb] = useState("");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (name === "" || code === "" || abb==="" ) {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newSubject = {
      name,
      code,
      abb,
      year,
    };


    try {
      if (id !== undefined && id !== "") {
        await subjectDataService.updateSubject(id, newSubject);
        setSubjectId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await subjectDataService.addSubjects(newSubject);
        setMessage({ error: false, msg: "New Subject added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setName("");
    setCode("");
    setAbb("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await subjectDataService.getSubject(id);
      // console.log("the record is :", docSnap.data());
      setName(docSnap.data().name);
      setCode(docSnap.data().code);
      setYear(docSnap.data().year);
      setAbb(docSnap.data().abb);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formSubjectTitle">
            <InputGroup>
              <InputGroup.Text id="formSubjectTitle">Name</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Subject Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSubjectAuthor">
            <InputGroup>
              <InputGroup.Text id="formSubjectAuthor">Code</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Subject code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSubjectAuthor">
            <InputGroup>
              <InputGroup.Text id="formSubjectAuthor">ABB</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Subject ABBREVIATION"
                value={abb}
                onChange={(e) => setAbb(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={!flag}
              variant="success"
              onClick={(e) => {
                setYear("I");
                setFlag(true);
              }}
            >
              I
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setYear("II");
                setFlag(true);
              }}
            >
              II
            </Button>
            <Button
              disabled={!flag}
              variant="info"
              onClick={(e) => {
                setYear("III");
                setFlag(true);
              }}
            >
              III
            </Button>
            <Button
              variant="warning"
              disabled={!flag}
              onClick={(e) => {
                setYear("IV");
                setFlag(true);
              }}
            >
              IV
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddSubject;