// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXOBBRRymvwTHWJJPfe-pEXHbRG0JJU9w",
  authDomain: "universo-de-literatura.firebaseapp.com",
  projectId: "universo-de-literatura",
  storageBucket: "universo-de-literatura.appspot.com",
  messagingSenderId: "899655922101",
  appId: "1:899655922101:web:b61bc75c4955ccc6fee9fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);