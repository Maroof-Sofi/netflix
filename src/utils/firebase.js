// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import {getAnalytics} from "firebase-analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2uZ4MgeOJ8-5EC3OBtASwMsqpgEBCFQs",
  authDomain: "netflix-ff842.firebaseapp.com",
  projectId: "netflix-ff842",
  storageBucket: "netflix-ff842.appspot.com",
  messagingSenderId: "474891357011",
  appId: "1:474891357011:web:9c22cac5a37a239514afa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();