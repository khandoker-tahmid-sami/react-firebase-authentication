// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmnsrpA9y_rXl5LqBIRtU4YfMfo1Ov1-A",
  authDomain: "react-authentication-707d1.firebaseapp.com",
  projectId: "react-authentication-707d1",
  storageBucket: "react-authentication-707d1.firebasestorage.app",
  messagingSenderId: "173383865268",
  appId: "1:173383865268:web:ca0b676d887835bd7d18e1",
  measurementId: "G-DHPVEJGLTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)