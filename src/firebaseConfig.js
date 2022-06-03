import { initializeApp } from "firebase/app";
import{ getFirestore} from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCugSzgF_J0poowdvJsbutd1ptd67a_QmM",
    authDomain: "attendance-a6e82.firebaseapp.com",
    databaseURL: "https://attendance-a6e82-default-rtdb.firebaseio.com",
    projectId: "attendance-a6e82",
    storageBucket: "attendance-a6e82.appspot.com",
    messagingSenderId: "181145177933",
    appId: "1:181145177933:web:9d7c218144292648d43104",
    measurementId: "G-QM1B2DK2F0"
  };

  const app=initializeApp(firebaseConfig);
  const storage = getStorage()
  export const db=getFirestore(app);
  export {storage};

  