import React from "react";
// import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import styles from "./class.module.css"

function Class(props) {
    const facultyname = "Dr.Golda"
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
                                <div className={styles.date}>{props.abb}</div>
                                <div className={styles.tags}>
                                    <Link to="/Attendance" state={{
                                        sub:props.abb,
                                        year:props.year
                                    }}><div className={styles.tag}>Attendance
                                    </div></Link>
                                    <Link to="/report"state={{
                                        sub:props.abb,
                                        facname:props.facname
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