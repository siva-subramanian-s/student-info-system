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

const studentCollectionRef=collection(db,"student");

class studentDataService{
    addStudent= (newStudent) => {

        return addDoc(studentCollectionRef,newStudent)
    };

    updateStudent=(id,updatedStudent) =>{
        const studentDoc= doc(db,"student",id);
        return updateDoc(studentDoc,updateDoc);
    };
    deleteStudent=(id) => {
        const studentDoc=doc(db,"student",id);
        return deleteDoc(studentDoc);

    };

    getAllStudents=() => {
        return getDoc(studentCollectionRef);
    }
    getStudent=(id => {
        const studentDoc=doc(db,"student",id);
        return getDoc(bookDoc);
    })
}

export default new studentDataService();