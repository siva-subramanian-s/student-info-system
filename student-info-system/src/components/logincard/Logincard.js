import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import items from "./Card_items";
import "./styles.css"
function createCard(props) {
    return(
      <Card
        key = {props.key}
        Name={props.Name}
        img = {props.img}
        link = {props.link} />
    );
  }
  
  function Logincard() {
    return (
      <div className="login">
        {items.map(createCard)}
      </div>
    );
  }
export default Logincard;