import { db } from "../../../firebaseConfig";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const subjectCollectionRef = collection(db, "subject");
class subjectDataService {
  addSubjects = (newSubject) => {
    return addDoc(subjectCollectionRef, newSubject);
  };

  updateSubject = (id, updatedSubject) => {
    const subjectDoc = doc(db, "subject", id);
    return updateDoc(subjectDoc, updatedSubject);
  };

  deleteSubject = (id) => {
    const subjectDoc = doc(db, "subject", id);
    return deleteDoc(subjectDoc);
  };

  getAllSubjects = () => {
    return getDocs(subjectCollectionRef);
  };

  getSubject = (id) => {
    const subjectDoc = doc(db, "subject", id);
    return getDoc(subjectDoc);
  };
}

export default new subjectDataService();