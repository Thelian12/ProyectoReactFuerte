// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLxmMtTuF4b1_TNrPT0qWz80A3HjHKGwY",
  authDomain: "leandroproyect.firebaseapp.com",
  projectId: "leandroproyect",
  storageBucket: "leandroproyect.firebasestorage.app",
  messagingSenderId: "119348845990",
  appId: "1:119348845990:web:654c75dc46d6e737840367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Exportar las instancias 
export const auth = getAuth(app);
export const db = getFirestore(app);