// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBRWURwVKcHMDLWQBDImea4HEIZic71dE",
  authDomain: "news-dragon-2.firebaseapp.com",
  projectId: "news-dragon-2",
  storageBucket: "news-dragon-2.appspot.com",
  messagingSenderId: "560589980557",
  appId: "1:560589980557:web:284544d64dc6fe919373c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;