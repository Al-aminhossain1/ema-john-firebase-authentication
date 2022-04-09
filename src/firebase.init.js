// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcjvedbtD2QE4DCBGRdl_7qXCtg4ubrTs",
    authDomain: "ema-john-simple-5e201.firebaseapp.com",
    projectId: "ema-john-simple-5e201",
    storageBucket: "ema-john-simple-5e201.appspot.com",
    messagingSenderId: "196235302769",
    appId: "1:196235302769:web:1fafce2aabc782987f88d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;