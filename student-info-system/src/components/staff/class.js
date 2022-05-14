import React from "react";
import ReactDOM from "react-dom";

function Class(props) {
    return (
        <div>
            <div className="staff-card">
                <a href={props.link}>
                    <div className="profile">
                        <img src={props.pfp} alt="pfp" />
                    </div>
                    <div className="top-card">
                        <h2>{props.sub}</h2>
                        <p>{props.desc}</p>
                    </div>
                    <div className="yearandclass">
                        <h3>{props.year}</h3>
                        <h3>CSE</h3>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Class;