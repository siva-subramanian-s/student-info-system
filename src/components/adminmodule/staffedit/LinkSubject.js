import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import facultyDataService from "../services/staffSubject.services.js";


const AddSubject = ({ id, setSubjectId }) => {
  const [name, setName] = useState("");
  const [ClassAdvisor, setclad] = useState("false");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const [Subject,setSubjectList]=useState([{}]);

  const handleRegnoChange=(e,index)=>{
    const {value}=e.target;
    const list=[...Subject];
    list[index]=value;
    setSubjectList(list);
  };
  const handleRegnoAdd=()=>{
    setSubjectList([...Subject,{}])
  };
  const handleRegnoRemove=(index)=>{
    const list=[...Subject];
    list.splice(index,1);
    setSubjectList(list);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (name === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newSubject = {
      name,
      Subject,
      ClassAdvisor,
    };
    

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
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await facultyDataService.getSubject(id);
      
      setName(docSnap.data().name);
      setclad(docSnap.data().ClassAdvisor);
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
                placeholder="Faculty Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          
          {Subject.map((singleSub,index)=> (
                 
                <Form.Group className="mb-3" controlId="formSubjectAuthor" key={index}><InputGroup>
                <InputGroup.Text id="formSubjectAuthor">{index+1} SUB</InputGroup.Text>
                <Form.Control
                  type="text"
                  // placeholder="Number of Subjects"
                  name="subs"
                  placeholder="Subject code"
                  value={singleSub.subs}
                  onChange={(e)=> handleRegnoChange(e,index)}
                />
                {Subject.length-1==index && Subject.length<10 && 
                (<input type="button" className="btnBtn" value="+" onClick={handleRegnoAdd}/>)}
                {Subject.length>1 &&  <input type="button" className="btnBtn" value="-" onClick={()=>handleRegnoRemove(index)}/>}
                
              </InputGroup>
              </Form.Group>
                
            ))}
          
          
            
        
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