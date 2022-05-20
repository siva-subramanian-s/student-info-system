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

const subjectCollectionRef = collection(db, "staff");
class facultytosubServices {

  getAllclasses = () => {
    return getDocs(subjectCollectionRef);
  };

  getSubject = (id) => {
    const subjectDoc = doc(db, "subject", id);
    return getDoc(subjectDoc);
  };
}

export default new facultytosubServices();