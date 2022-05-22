import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import facultyDataService from "../services/staffSubject.services.js";


const AddSubject = ({ id, setSubjectId }) => {
  const [name, setName] = useState("");
  const [subs_a, setSubs_a] = useState(); 
  const [subs_b, setSubs_b] = useState(); 
  const [subs_c, setSubs_c] = useState(); 
  const [clad, setclad] = useState("false");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (name === "" || subs_a === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newSubject = {
      name,
      subs_a,
      subs_b,
      subs_c,
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
        setMessage({ error: false, msg: "Subject assigned successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setName("");
    setSubs_a("");
    setSubs_b("");
    setSubs_c("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await facultyDataService.getSubject(id);
      console.log("the record is :", docSnap.data());
      setName(docSnap.data().name);
      setSubs_a(docSnap.data().subs_a);
      setSubs_b(docSnap.data().subs_b);
      setSubs_c(docSnap.data().subs_c);
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
              <InputGroup.Text id="formSubjectAuthor">1 SUBs</InputGroup.Text>
              <Form.Control
                type="text"
                // placeholder="Number of Subjects"
                placeholder="Subject code"
                value={subs_a}
                onChange={(e) => setSubs_a(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id="formSubjectAuthor">2 SUBs</InputGroup.Text>
              <Form.Control
                type="text"
                // placeholder="Number of Subjects"
                placeholder="Subject code"
                value={subs_b}
                onChange={(e) => setSubs_b(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id="formSubjectAuthor">3 SUBs</InputGroup.Text>
              <Form.Control
                type="text"
                // placeholder="Number of Subjects"
                placeholder="Subject code"
                value={subs_c}
                onChange={(e) => setSubs_c(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          {/* {
            this.subs.map((subjectField,index) =>{
              return(
              <div key={index}>
                <input type="text" name="subsCode" placeholder="Subject Code"
                onChange={(e)=>this.handleChange(e)}
                value={subjectField}/>
              </div>
              )
            })
          } */}
          {/* <Button variant="secondary" >+</Button>
          <Button variant="secondary" >-</Button>
          <br/> */}

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