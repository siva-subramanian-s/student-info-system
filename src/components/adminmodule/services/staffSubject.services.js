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

const subjectCollectionRef = collection(db, "faculty");
class subjectDataService {
  addSubjects = (newSubject) => {
    return addDoc(subjectCollectionRef, newSubject);
  };

  updateSubject = (id, updatedSubject) => {
    const subjectDoc = doc(db, "faculty", id);
    return updateDoc(subjectDoc, updatedSubject);
  };

  deleteSubject = (id) => {
    const subjectDoc = doc(db, "faculty", id);
    return deleteDoc(subjectDoc);
  };

  getAllSubjects = () => {
    return getDocs(subjectCollectionRef);
  };

  getSubject = (id) => {
    const subjectDoc = doc(db, "faculty", id);
    return getDoc(subjectDoc);
  };
}

export default new subjectDataService();