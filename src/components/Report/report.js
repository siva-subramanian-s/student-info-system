import React, { useEffect, useRef, useState } from 'react'
import rcss from "./report.module.css"
import { Table, Button } from "react-bootstrap";
import SubjectDataService from '../adminmodule/services/subject.services';
import { useLocation } from 'react-router-dom';

export default function Report() {
    const Dateref = useRef();
    const [Report, setReport] = useState([])
    const location =useLocation();
    useEffect(() => {
        getReport();
    }, []);
    const getReport = async () => {
        const data = await SubjectDataService.getReport();
        // console.log(data.docs);
        setReport(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
console.log(Report)
    return (
        <div className={rcss.report}>
            <header>
                <nav>
                    <h1 className={rcss.subject}>{location.state.sub}</h1>
                    <h3 className={rcss.faculty}>{location.state.facname}</h3>
                </nav>
            </header>
            <section>
                <h4>Attendance Percantage</h4>
                {/* <Table striped bordered hover size="sm">
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
                    </tbody>
                </Table> */}
            </section>
            <section>
                <h4>Absentees</h4>
                <form name="form">
                    <input type="date" id={rcss.input} className="auto-submit" ref={Dateref} />
                </form>
            </section>
        </div>
    )
}
