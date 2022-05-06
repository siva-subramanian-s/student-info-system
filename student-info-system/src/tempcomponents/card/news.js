import React from "react";
import ReactDOM from "react-dom";
import Newsletter from "./newsletter";
import items from "./newsitems";
import "./style_news.css"

function createCard(props) {
    return (
        <Newsletter
            key={props.key}
            desc={props.desc}
            link={props.link} />
    );
}

function News() {
    return (
        <div className="news">
            {items.map(createCard)}
        </div>
    );
}
export default News;