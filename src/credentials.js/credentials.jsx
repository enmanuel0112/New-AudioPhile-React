// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIx6iI5ALgYQUKIf5TL6Fec4vIdlaV02E",
  authDomain: "audiophile-d6a6d.firebaseapp.com",
  projectId: "audiophile-d6a6d",
  storageBucket: "audiophile-d6a6d.appspot.com",
  messagingSenderId: "746562588865",
  appId: "1:746562588865:web:4922f70b83008ce8920440"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;