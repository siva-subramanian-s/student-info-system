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
    const [Loading, setLoading] = useState(false);
    const [Dates, setDates] = useState("0000-00-00")

    useEffect(() => {
        getReport();
        getStudent();
    }, []);
    const getReport = async () => {
        const data = await SubjectDataService.getReport();

        setReport(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getStudent = async () => {
        const data = await SubjectDataService.getStudent();

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
    var result = [];

    var totsub = 0, periods = 0;
    let p = 1;
    Report.map((item) => {
        if (item.subject === location.state.sub) {
            totsub++;
        if (Dates === item.date) {
            periods++;
            result = [
                ...result,
                {
                    id: p++,
                    noabs: item.NoAbs,
                    regno: item.regno,
                    period:item.period,
                    name: [],
                    whole:[]
                }
            ]
        }
    }
    })

    var wholeStudent = []
    let i = 1;
    Student.map((item) => {
        wholeStudent = [
            ...wholeStudent,
            {
                id: i++,
                name: item.name,
                regno: item.regno,
                percentage: totsub
            }
        ]
    })
    wholeStudent.map((item) => {
        Report.map((absentees) => {
            if (absentees.subject === location.state.sub) {
                for (let i = 0; i < absentees.NoAbs; i++) {
                    if (item.regno === absentees.regno[i]) {
                        item.percentage--;
                    }
                }
            }
        })
    })
    var result2 = []
    result.map((item) => {
        for (let y = 0; y < item.regno.length; y++) {
            Student.map((items) => {
                if (item.regno[y] === items.regno) {
                    // item.name[y]=items.name
                    item.whole=[...item.whole,items]
                }
            })
        }
    }
    )
    totsub = 100 / totsub;
    
    const dateModification = () => {
        setLoading(true)
        setDates(Dateref.current.value)
    }
    


    return (
        <div className={rcss.report}>
            <header>
                <nav>
                    <h1 className={rcss.subject}>{location.state.sub}</h1>
                    <h3 className={rcss.faculty}>{location.state.facname}</h3>
                </nav>
            </header>
            <div className={rcss.btn}>
                <button className={percentageform ? rcss.toggle_btn1 : rcss.toggle_btn2} onClick={showpercantageForm}><h4>Attendance Percentage</h4></button>
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
                                    <th>Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wholeStudent.map((doc, index) => {
                                    return (
                                        <tr key={doc.id}>
                                            <td>{index + 1}</td>
                                            <td>{doc.regno}</td>
                                            <td>{doc.name}</td>
                                            <td>{doc.percentage * totsub} <span>%</span></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                </section>}
                <section>
                    {Absentform&&
                        <div >
                        <div className={rcss.absent}>
                            <form name="form">
                                <input type="date" id={rcss.input} className="auto-submit" ref={Dateref} onChange={dateModification} />
                            </form>
                        </div>
                        <h2 className={rcss.tot__period}>Total Period <span>{periods}</span></h2>
                        {result.map((docs) => {
                            return (
                                <div>
                                    <div className={rcss.details}>
                                        <h4>Period <span>{docs.period}</span></h4>
                                        <h5>No of Absentees <span>{docs.noabs}</span></h5>
                                    </div>
                                    <div className={rcss.result}>
                                        <Table striped bordered hover size="sm" >
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Regno</th>
                                                    <th>Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {docs.whole.map((doc, index) => {
                                            return (
                                                <tr key={doc.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{doc.regno}</td>
                                                    <td>{doc.name}</td>
                                                </tr>
                                            );
                                        })}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            );
                        })}
                    </div>}
                </section>
            </div>
        </div>
    )
}
