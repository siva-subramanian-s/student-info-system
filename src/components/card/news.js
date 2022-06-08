import { Link } from 'react-router-dom';
import React from "react";
import "./news.css"

function News() {
    return(
        <div className="news">
            <div class="news_container">
  <div class="news_card">
    <div class="circle">
      <h2>01</h2>
    </div>
    <div class="news_content">
      <p>Exam fees circular-UG 2018, 2019, 2020 Batches and ME 2020 Batch Apr-May 2022</p>
      <Link to="/">Attachment</Link>
    </div>
  </div>
  <div class="news_card">
    <div class="circle">
      <h2>02</h2>
    </div>
    <div class="news_content">
      <p>End Semester Examination Schedule - ME 1st Sem - Jan 2022</p>
      <Link to="/">Read More</Link>
    </div>
  </div>
  <div class="news_card">
    <div class="circle">
      <h2>03</h2>
    </div>
    <div class="news_content">
      <p>Ph.D Course Work Examination Schedule - Jan 2022</p>
      <Link to="/">Read More</Link>
    </div>
  </div>
</div>
        </div>
    );
}

export default News;