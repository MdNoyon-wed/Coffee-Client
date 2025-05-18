// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZXPxtOyeZGtmVLBoXsrEcD_JDViMu0PY",
  authDomain: "coffee-store-app-4d386.firebaseapp.com",
  projectId: "coffee-store-app-4d386",
  storageBucket: "coffee-store-app-4d386.firebasestorage.app",
  messagingSenderId: "391699653698",
  appId: "1:391699653698:web:7799d4956d8437a0f6f9db",
  measurementId: "G-YMKBH7LBJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export const auth = getAuth(app);