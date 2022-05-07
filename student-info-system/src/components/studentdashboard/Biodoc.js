import React from 'react'

export default function Biodoc() {
  return (
    <div>
        <H1 id="studoc_header">STUDENT RECORDS COLLECTION PAGE</H1>
    <DIV class="doc_container">

        <H2> ADHAR CARD  </H2>
        <input type="file" id="myFile" name="filename1" required>
    </DIV>
    <DIV class="doc_container">
        <H2> 10th MARK SHEET</H2>
        
            <input type="file" id="myFile" name="filename2" required>
    </DIV>
    <DIV class="doc_container">

        <H2> 12TH MARK SHEET</H2>
       
            <input type="file" id="myFile" name="filename3" required>

    </DIV>
    <DIV class="doc_container">
        <H2> COMMUNITY CERTIFICATE</H2>
        
            <input type="file" id="myFile" name="filename4" required>

    </DIV>
    <DIV class="doc_container">
        <H2> INCOME CERTIFICATE</H2>
        
            <input type="file" id="myFile" name="filename5" required>
    </DIV>
    <DIV class="doc_container">
        <H2> TRANSFER CERTIFICATE</H2>
    
            <input type="file" id="myFile" name="filename5" required>
    </DIV> <br/>
    
       <button id="studoc_submit">SUBMIT</button>
        <button id="studoc_submit">RESET</button>
    </div>
    <
  )
}
