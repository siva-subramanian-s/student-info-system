import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCugSzgF_J0poowdvJsbutd1ptd67a_QmM",
    authDomain: "attendance-a6e82.firebaseapp.com",
    databaseURL: "https://attendance-a6e82-default-rtdb.firebaseio.com",
    projectId: "attendance-a6e82",
    storageBucket: "attendance-a6e82.appspot.com",
    messagingSenderId: "181145177933",
    appId: "1:181145177933:web:9d7c218144292648d43104",
    measurementId: "G-QM1B2DK2F0"
})

export const auth = app.auth()
export default app