import { db } from "../../../firebaseConfig";

import {
  collection,
  getDoc,
  doc,
} from "firebase/firestore";

const faculties = collection(db,"staff");

class facultytosubServices {

  getSubject = (id) => {
    const subjectDoc = doc(db, "subject", id);
    return getDoc(subjectDoc);
  };
}

export default new facultytosubServices();