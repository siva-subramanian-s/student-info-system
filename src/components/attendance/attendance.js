
import acss from "./style_atten.module.css"
import React, { useState, useEffect } from "react";
import addAbsentees from "./addAbsentees.js"
import subjectDataService from "../adminmodule/services/absentees.services";

function Attendance() {
    const [subjectId, setSubjectId] = useState("");

    // const getSubjectIdHandler = (id) => {
    // console.log("The ID of document to be edited: ", id);
    // setSubjectId(id);
    // };

    return (
        <addAbsentees id={subjectId} setSubjectId={setSubjectId}/>
            );
}

export default Attendance;