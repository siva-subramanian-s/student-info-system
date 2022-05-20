import React from "react";
// import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import styles from "./class.module.css"

function Class(props) {
    return (
        <div>
            <div className={styles.staffCard}>
                <section className={styles.cardsWrapper}>
                    <div className={styles.cardGridSpace}>
                        <div className={styles.num}>{props.code}</div>
                        <div className={styles.card}>
                            <div>
                                <h1>{props.desc}</h1>
                                <p>{props.year}</p>
                                <div className={styles.date}>{props.sub}</div>
                                <div className={styles.tags}>
                                    <Link to={props.link}><div className={styles.tag}>Attendance
                                    </div></Link>
                                    <Link to="/report"><div className={styles.tag}>Report
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