import React, { useEffect, useRef, useState } from 'react'
import rcss from "./report.module.css"
import { Table, Button } from "react-bootstrap";
import SubjectDataService from '../adminmodule/services/subject.services';
import { useLocation } from 'react-router-dom';

export default function Report() {
    const Dateref = useRef();
    const [Report, setReport] = useState([]);
    const [Student, setStudent] = useState([]);
    const location = useLocation();
    const [percentageform, setPercantageform] = useState(true);
    const [Absentform, setAbsenteesform] = useState(false);
    useEffect(() => {
        getReport();
        getStudent();
    }, []);
    const getReport = async () => {
        const data = await SubjectDataService.getReport();
        // console.log(data.docs);
        setReport(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getStudent = async () => {
        const data = await SubjectDataService.getStudent();
        // console.log(data.docs);
        setStudent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
   
   
    const showabsentform = () => {
        setAbsenteesform(true)
        setPercantageform(false)
    }

    const showpercantageForm = () => {
        setAbsenteesform(false)
        setPercantageform(true)
    }
    var tot_percentage=0;
    Report.map((item)=>{
        console.log(item)
    })




    return (
        <div className={rcss.report}>
            <header>
                <nav>
                    <h1 className={rcss.subject}>{location.state.sub}</h1>
                    <h3 className={rcss.faculty}>{location.state.facname}</h3>
                </nav>
            </header>
            <div className={rcss.btn}>
                <button className={percentageform ? rcss.toggle_btn1 : rcss.toggle_btn2} onClick={showpercantageForm}><h4>Attendance Percantage</h4></button>
                <button className={Absentform ? rcss.toggle_btn1 : rcss.toggle_btn2} onClick={showabsentform}><h4>Absentees</h4></button>
            </div>
            <div className={rcss.reportcontent}>
                {percentageform && <section>
                    <div className={rcss.percentage}>
                        <Table striped bordered hover size="sm" >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Regno</th>
                                    <th>Name</th>
                                    <th>Percantage</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                {Report.map((doc, index) => {
                                    return (
                                        <tr key={doc.id}>
                                            <td>{index + 1}</td>
                                            <td>{doc.name}</td>
                                            <td>{doc.abb}</td>
                                            <td>{doc.code}</td>
                                        </tr>
                                    );
                                })}
                            </tbody> */}
                        </Table>
                    </div>
                </section>}
                <section>
                    <div className={rcss.absent}>
                        {Absentform && <form name="form">
                            <input type="date" id={rcss.input} className="auto-submit" ref={Dateref} />
                        </form>}
                    </div>
                </section>
            </div>
        </div>
    )
}
