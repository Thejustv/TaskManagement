import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "taskmanagement-e15f3.firebaseapp.com",
    projectId: "taskmanagement-e15f3",
    storageBucket: "taskmanagement-e15f3.appspot.com",
    messagingSenderId: "835721905018",
    appId: "1:835721905018:web:d4b2a935b71214147f0cc3",
    measurementId: "G-JZ1P8TVME3"
  }; 

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);

  export const auth = getAuth(firebaseApp);
  
  export { db }