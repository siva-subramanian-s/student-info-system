import React from "react";
import ReactDOM from "react-dom";

function About() {
    return (
        <div class="container">
            <div class="card">
                <div class="circle">
                    <h2>{}</h2>
                </div>
                <div class="content">
                    <p>{}</p>
                    <a href={}>Attachment</a>
                </div>
            </div>
        </div>
    )
}

export default About;