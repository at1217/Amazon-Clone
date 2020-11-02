import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAYmpZcACjxz12ZPIwz8LseqPvDcl14wkg",
    authDomain: "clone-efd95.firebaseapp.com",
    databaseURL: "https://clone-efd95.firebaseio.com",
    projectId: "clone-efd95",
    storageBucket: "clone-efd95.appspot.com",
    messagingSenderId: "1012262313100",
    appId: "1:1012262313100:web:39dc40148749c3af88afa9",
    measurementId: "G-3DPQFY1BB8"      
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };