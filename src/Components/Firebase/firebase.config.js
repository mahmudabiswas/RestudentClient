// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHpZ2mQYrnWHhV8QMIeFlZbSbaQBbZfTg",
  authDomain: "restudentclient.firebaseapp.com",
  projectId: "restudentclient",
  storageBucket: "restudentclient.appspot.com",
  messagingSenderId: "1031149688869",
  appId: "1:1031149688869:web:1ca65ef6412af6869487cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
