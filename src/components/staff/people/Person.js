import React from "react";
import "./person.css"
export default function Person(props) {
    console.log(props);
    return(
        <>
        {props && <div className="person__data">
            <div className="person__pfp">
                <img src={props.pfp} width="40px" height="40px"/>
            </div>
            <div className="person__rollno">
                <h6>{props.rollno}</h6>
            </div>
            <div className="person__Name">
                <h6>{props.name}</h6>
            </div>
        </div>
        }
        </>
    )
}