import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./stud_doc.css"
export default function Biodoc() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    async function handleSubmit(e) {
    
        e.preventDefault();
        try {
          setError("");
          setLoading(true)
          navigate(-1);
        } catch {
          setError("Failed to log in");
        }
        setLoading(false)
        
      }

    return (
        <div>
            <h1 id="studoc_header">STUDENT RECORDS COLLECTION PAGE</h1>
            <form onSubmit={handleSubmit}>
            {error && <h2>{error}</h2>}
                <div className="doc_container">
                    <h2> ADHAR CARD  </h2>
                    <input type="file" id="myFile" name="filename1" required />
                </div>
                <div className="doc_container">
                    <h2> 10th MARK SHEET</h2>
                    <input type="file" id="myFile" name="filename2" required />
                </div>
                <div className="doc_container">
                    <h2> 12TH MARK SHEET</h2>
                    <input type="file" id="myFile" name="filename3" required />
                </div>
                <div className="doc_container">
                    <h2> COMMUNITY CERTIFICATE</h2>
                    <input type="file" id="myFile" name="filename4" required />
                </div>
                <div className="doc_container">
                    <h2> INCOME CERTIFICATE</h2>
                    <input type="file" id="myFile" name="filename5" required />
                </div>
                <div className="doc_container">
                    <h2> TRANSFER CERTIFICATE</h2>

                    <input type="file" id="myFile" name="filename5" required />
                </div> <br />
                <button id="studoc_submit" disabled={loading} type='submit'>SUBMIT</button>
                <button id="studoc_submit" type='reset'>RESET</button>
            </form>
        </div>

    )
}
