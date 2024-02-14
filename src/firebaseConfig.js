// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyBSDGw-WiljNaFalAC_e3PyccumMiFl1pA",
  authDomain: "react-firebase-auth-3f9c2.firebaseapp.com",
  projectId: "react-firebase-auth-3f9c2",
  storageBucket: "react-firebase-auth-3f9c2.appspot.com",
  messagingSenderId: "566934007093",
  appId: "1:566934007093:web:1aa48c9d0995f091ba707c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;