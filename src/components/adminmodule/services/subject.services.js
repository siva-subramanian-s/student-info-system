import { db } from "../../../firebaseConfig";
import { setDoc } from "firebase/firestore";
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
const peopleCollectionRef = collection(db, "subStud");
const AbsenteesCollectionRef = collection(db, "absentees");
class subjectDataService {
  addSubjects = (newSubject) => {
    return addDoc(subjectCollectionRef, newSubject);
  };
  addStudent = (rollNoImg,newSubject) => {
    console.log(newSubject);
    return setDoc(doc(studentCollectionRef,rollNoImg),newSubject);
  };
  addPeople = (subjctID,newPeople) => {
    console.log(newPeople);
    return setDoc(doc(peopleCollectionRef,subjctID),newPeople);
  };
  updatePeople = (code, updatepeople) => {
    console.log(updatepeople);
    const peopleDoc = doc(peopleCollectionRef, code);
    return updateDoc(peopleDoc, updatepeople);
  };

  updateStudent = (rollNoImg, updatedSubject) => {
    console.log(updatedSubject);
    const subjectDoc = doc(studentCollectionRef, rollNoImg);
    return updateDoc(subjectDoc, updatedSubject);
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
  getPeople=()=>{
    return getDocs(peopleCollectionRef)
  }
  getstudoc = (id) => {
    console.log(id)
    const studoc = doc(db, "student", id);
    return getDoc(studoc);
  };
  getpeopleid = (id) => {
    console.log(id)
    const studoc = doc(db, "subStud", id);
    return getDoc(studoc);
  };
}

export default new subjectDataService();