import React, { useState } from 'react'
import { getStorage,ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./stud_doc.css"




const Biodoc = () => {
   
    const [imageAsFile, setImageAsFile] = useState('');
 


    const handleImageFile = (e)=>{
        const image = e.target.files[0];
        setImageAsFile(() => (image));
    }
    
    const handleFireBaseUpload = e => {
        e.preventDefault()
        console.log('Uploading...')
        // async magic goes here...
        if(imageAsFile === '' ) {
            console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
          }
        const storage = getStorage();
        const storageRef = ref(storage, `${imageAsFile.name}`);
        const metadata = {
            contentType: `${imageAsFile.type}`,
          };

        uploadBytes(storageRef, imageAsFile, metadata);

        window.setTimeout(()=>{
            getDownloadURL(ref(storage, `${imageAsFile.name}`))
            .then((url) => {
                // `url` is the download URL
                alert("Image uploaded!!!");
             
            })
            .catch((error) => {
                // Handle any errors
            });
        },2000)
    
      }

    return ( 
       <div className="upload_formContainer">
             <h1 id="studoc_header">STUDENT RECORDS COLLECTION PAGE</h1>
           
            <form onSubmit={handleFireBaseUpload} className="upload_form">
             

                <div className="doc_container">
                    <h2> ADHAR CARD  </h2>
                    <input type="file" id="myFile" name="filename1"  onChange={handleImageFile} required />
               </div>

            
                <div className="doc_container">
                    <h2> 10th MARK SHEET</h2>
                    <input type="file" id="myFile" name="filename2"   onChange={handleImageFile} required />
                </div>
                <div className="doc_container">
                    <h2> 12TH MARK SHEET</h2>
                    <input type="file" id="myFile" name="filename3"  onChange={handleImageFile}  required />
                </div>
                <div className="doc_container">
                    <h2> COMMUNITY CERTIFICATE</h2>
                    <input type="file" id="myFile" name="filename4"  onChange={handleImageFile}  required />
                </div>
                <div className="doc_container">
                    <h2> INCOME CERTIFICATE</h2>
                    <input type="file" id="myFile" name="filename5"   onChange={handleImageFile} required />
                </div>
                <div className="doc_container">
                    <h2> TRANSFER CERTIFICATE</h2>

                    <input type="file" id="myFile" name="filename5"  onChange={handleImageFile}  required />
                </div> <br />
                <div className='Upload_firebase'>
                    <button id="studoc_submit"  > UPLOAD</button>
                </div>

            </form>
        
       </div>
     );
}
export default Biodoc;
 




// export default function Biodoc() {
//     const navigate = useNavigate()
//     const [error, setError] = useState("")
//     const [loading, setLoading] = useState(false)
//     async function handleSubmit(e) {
    
//         e.preventDefault();
//         try {
//           setError("");
//           setLoading(true)
//           navigate(-1);
//         } catch {
//           setError("Failed to log in");
//         }
//         setLoading(false)
        
//       }

//     return (
        
//                 <button id="studoc_submit" disabled={loading} type='submit'>SUBMIT</button>
//                 <button id="studoc_submit" type='reset'>RESET</button>
//             </form>
//         </div>

//     )
// }
