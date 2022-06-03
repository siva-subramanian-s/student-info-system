import React, { useState } from 'react'
import { getStorage,ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./stud_doc.css"




const Biodoc = () => {
   
    const [imageAsFile1, setImageAsFile1] = useState('');
    const [imageAsFile2, setImageAsFile2] = useState('');
    const [imageAsFile3, setImageAsFile3] = useState('');
    const [imageAsFile4, setImageAsFile4] = useState('');
    const [imageAsFile5, setImageAsFile5] = useState('');
    const [imageAsFile6, setImageAsFile6] = useState('');

 

const i=0
    const handleImageFile1 = (e)=>{
        
        const image = e.target.files[0];
        setImageAsFile1(() => (image));
    }
    const handleImageFile2 = (e)=>{
        
        const image = e.target.files[0];
        setImageAsFile2(() => (image));
    }
    const handleImageFile3 = (e)=>{
        
        const image = e.target.files[0];
        setImageAsFile3(() => (image));
    }
    const handleImageFile4 = (e)=>{
        
        const image = e.target.files[0];
        setImageAsFile4(() => (image));
    }
    const handleImageFile5 = (e)=>{
        
        const image = e.target.files[0];
        setImageAsFile5(() => (image));
    }
    const handleImageFile6 = (e)=>{
        
        const image = e.target.files[0];
        setImageAsFile6(() => (image));
    }
    const handleFireBaseUpload = e => {
        e.preventDefault()
        console.log('Uploading...')
        // async magic goes here...
        if(imageAsFile1 === '' ) {
            console.error(`not an image, the image file is a ${typeof(imageAsFile1)}`)
          }
          if(imageAsFile2 === '' ) {
            console.error(`not an image, the image file is a ${typeof(imageAsFile2)}`)
          }
          if(imageAsFile1 === '' ) {
            console.error(`not an image, the image file is a ${typeof(imageAsFile3)}`)
          }
          if(imageAsFile4 === '' ) {
            console.error(`not an image, the image file is a ${typeof(imageAsFile4)}`)
          }
          if(imageAsFile5 === '' ) {
            console.error(`not an image, the image file is a ${typeof(imageAsFile5)}`)
          }
          if(imageAsFile6 === '' ) {
            console.error(`not an image, the image file is a ${typeof(imageAsFile6)}`)
          }
        const storage = getStorage();
        const storageRef = ref(storage, `${setImageAsFile1.name}`,
                                        `${setImageAsFile2.name}`,
                                        `${setImageAsFile3.name}`,
                                        `${setImageAsFile4.name}`,
                                        `${setImageAsFile5.name}`,
                                        `${setImageAsFile6.name}`);
        
        const metadata = {
            contentType: `${imageAsFile1.type}`,
            contentType: `${imageAsFile2.type}`,
            contentType: `${imageAsFile3.type}`,
            contentType: `${imageAsFile4.type}`,
            contentType: `${imageAsFile5.type}`,
            contentType: `${imageAsFile6.type}`
          };

        uploadBytes(storageRef, imageAsFile1, metadata);
        uploadBytes(storageRef, imageAsFile2, metadata);
        uploadBytes(storageRef, imageAsFile3, metadata);
        uploadBytes(storageRef, imageAsFile4, metadata);
        uploadBytes(storageRef, imageAsFile5, metadata);
        uploadBytes(storageRef, imageAsFile6, metadata);

        window.setTimeout(()=>{
            getDownloadURL(ref(storage, `${imageAsFile1.name}`,
            `${imageAsFile2.name}`,
            `${imageAsFile3.name}`,
            `${imageAsFile4.name}`,
            `${imageAsFile5.name}`,
            `${imageAsFile6.name}`))
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
                    <input type="file" id="myFile" name="filename1"  onChange={handleImageFile1} required />
               </div>

            
                <div className="doc_container">
                    <h2> 10th MARK SHEET</h2>
                    <input type="file" id="myFile" name="filename2"   onChange={handleImageFile2} required />
                </div>
                <div className="doc_container">
                    <h2> 12TH MARK SHEET</h2>
                    <input type="file" id="myFile" name="filename3"  onChange={handleImageFile3}  required />
                </div>
                <div className="doc_container">
                    <h2> COMMUNITY CERTIFICATE</h2>
                    <input type="file" id="myFile" name="filename4"  onChange={handleImageFile4}  required />
                </div>
                <div className="doc_container">
                    <h2> INCOME CERTIFICATE</h2>
                    <input type="file" id="myFile" name="filename5"   onChange={handleImageFile5} />
                </div>
                <div className="doc_container">
                    <h2> TRANSFER CERTIFICATE</h2>

                    <input type="file" id="myFile" name="filename6"  onChange={handleImageFile6} />
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
