import React from "react";
import ReactDOM from "react-dom";

function Newsletter(props) {
    return (
        <div className="news-container">
            <div className="news-card">
                <div className="circle">
                    <h2>{props.key}</h2>
                </div>
                <div className="news-content">
                    <p>{props.desc}</p>
                    <a href={props.link}>Attachment</a>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;