import React, { useRef } from 'react'
import rcss from "./report.module.css"
export default function Report() {
    const Dateref = useRef();
    // () => {
    //     document.getElementsByClassName(".auto-submit").change(() => {
    //         document.getElementsByName("form").submit();
    //     });
    // }
    return (
        <div className={rcss.report}>
            <header>
                <h1 className={rcss.subject}>Subject Name</h1>
                <h3 className={rcss.faculty}>Faculty</h3>
            </header>
            <section>
                <h4>Attendance Percantage</h4>
            </section>
            <section>
                <h4>Absentees</h4>
                <form name="form">
                    <input type="date" id={rcss.input} className="auto-submit" ref={Dateref}
                        onChange={()=>{
                            this.submit();
                        }}
                    />
                </form>
            </section>
        </div>
    )
}
