import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import facultyDataService from "../services/staffSubject.services.js";

const AddSubject = ({ id, setSubjectId }) => {
  const [name, setName] = useState("");
  const [subs, setSubs] = useState("");
  const [clad, setclad] = useState("false");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (name === "" || subs === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newSubject = {
      name,
      subs,
      clad,
    };
    console.log(newSubject);

    try {
      if (id !== undefined && id !== "") {
        await facultyDataService.updateSubject(id, newSubject);
        setSubjectId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await facultyDataService.addSubjects(newSubject);
        setMessage({ error: false, msg: "New Subject added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setName("");
    setSubs("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await facultyDataService.getSubject(id);
      console.log("the record is :", docSnap.data());
      setName(docSnap.data().name);
      setSubs(docSnap.data().subs);
      setclad(docSnap.data().clad);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
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
                placeholder="Faculty Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSubjectAuthor">
            <InputGroup>
              <InputGroup.Text id="formSubjectAuthor">SUBs</InputGroup.Text>
              <Form.Control
                type="text"
                // placeholder="Number of Subjects"
                placeholder="Subject code"
                value={subs}
                onChange={(e) => setSubs(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          Class Advisor <br/>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setclad("YES");
                setFlag(true);
              }}
            >
              YES
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setclad("NO");
                setFlag(false);
              }}
            >
              NO
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add / Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddSubject;