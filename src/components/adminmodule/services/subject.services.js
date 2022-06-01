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
const studentCollectionRef = collection(db, "student");
const AbsenteesCollectionRef = collection(db, "absentees");
class subjectDataService {
  addSubjects = (newSubject) => {
    return addDoc(subjectCollectionRef, newSubject);
  };
  addStudent = (newSubject) => {
    return addDoc(studentCollectionRef, newSubject);
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
  getReport=()=>{
    return getDocs(AbsenteesCollectionRef);
  }
  getStudent=()=>{
    return getDocs(studentCollectionRef)
  }
}

export default new subjectDataService();