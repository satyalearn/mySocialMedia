// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlW_jUuOtPpEx4Mkyee3_MW0lWv9JTMfM",
  authDomain: "react-socialmedia-b7648.firebaseapp.com",
  projectId: "react-socialmedia-b7648",
  storageBucket: "react-socialmedia-b7648.appspot.com",
  messagingSenderId: "285953636482",
  appId: "1:285953636482:web:1f8e9b640bb46537ac1c9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();