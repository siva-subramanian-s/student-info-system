import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from "./class.module.css";
// import subjectServices from "../../adminmodule/services/subject.services";
import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

function Class(props) {
    const [docSnap, setDocSnap] = useState();

    useEffect(() => {
        getData();
      }, []);
    
      const getData = async () => {
        console.log(props.code);
        const studocref = doc(db, "subStud", props.code);
        const snap = await getDoc(studocref);
        setDocSnap(snap.data());
      };

    return (
        <div>
            
            <div className={styles.staffCard}>
                <section className={styles.cardsWrapper}>
                    <div className={styles.cardGridSpace}>
                        <div className={styles.num}>{props.code}</div>
                        <div className={styles.card}>
                            <div>
                                <h1>{props.name}</h1>
                                <p>{props.year} <span>YEAR</span></p>
                                <Link to="/people" state={{
                                        sub:props.abb,
                                        code:props.code
                                    }}><div className={styles.enroll}><img src={props.link} alt='hello' width="35px" height="30px" />&nbsp;&nbsp;
                                    {docSnap && docSnap.rollno.length}
                                </div></Link>
                                <div className={styles.date}>{props.abb}</div>
                                <div className={styles.tags}>
                                    <Link to="/Attendance" state={{
                                        sub:props.abb,
                                        year:props.year
                                    }}><div className={styles.tag}>Attendance
                                    </div></Link>
                                    <Link to="/report"state={{
                                        sub:props.abb,
                                        facname:props.facname,
                                        code: props.code
                                    }}><div className={styles.tag}>Report
                                    </div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
        </div>
    )
}

export default Class;