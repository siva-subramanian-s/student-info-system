import { db } from "../../../firebaseConfig";

import {
  collection,
  getDocs,
  getDoc,
//   addDoc,
//   updateDoc,
//   deleteDoc,
  doc,
} from "firebase/firestore";

const faculties = collection(db,"staff");

// const facsub =facultyCollectionRef.orderBy("Subject", "asc")
class facultytosubServices {
//  getfacsubs=()=>{
//    return getDocs(facsub);
//  }

  // getAllclasses = () => {
  //   return getDocs(facultyCollectionRef);
  // };

  getSubject = (id) => {
    const subjectDoc = doc(db, "subject", id);
    return getDoc(subjectDoc);
  };
}

export default new facultytosubServices();