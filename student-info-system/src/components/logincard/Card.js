import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
    return (
        <div className="Card-container">
            <a href={props.link}>
                <div className="card-img">
                    <img src={props.img} alt="Student" />
                </div>
                <div className="card-content">
                    <h3><p>{props.Name}</p></h3>
                </div>
            </a>
        </div>
    )
}

export default Card;