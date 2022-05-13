import React from "react";
import "./staffstyle.css";
import Class from "./class";
import classCard from "./classCard";

function createCard(props) {
    return(
      <Class
        key = {props.key}
        sub={props.sub}
        desc = {props.desc}
        pfp = {props.pfp}
        year = {props.year}
        link = {props.link} />
    );
  }
  
  function Staff() {
    return (
      <div className="Cont">
        {classCard.map(createCard)}
      </div>
    );
  }
export default Staff;