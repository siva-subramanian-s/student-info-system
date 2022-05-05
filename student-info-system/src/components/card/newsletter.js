import React from "react";
import ReactDOM from "react-dom";

function Newsletter(props) {
    return (
        <div class="container">
            <div class="card">
                <div class="circle">
                    <h2>{props.key}</h2>
                </div>
                <div class="content">
                    <p>{props.desc}</p>
                    <a href={props.link}>Attachment</a>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;