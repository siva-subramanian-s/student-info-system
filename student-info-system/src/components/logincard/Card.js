import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
    return (
        <div className="login-Card-container">
            <a href={props.link}>
                <div className="login-card-img">
                    <img src={props.img} alt="Student" />
                </div>
                <div className="login-card-content">
                    <h3><p>{props.Name}</p></h3>
                </div>
            </a>
        </div>
    )
}

export default Card;