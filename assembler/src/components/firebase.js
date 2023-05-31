// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApCGyQHmj9lDfblh9-phi-yV5b59_6Hx0",
  authDomain: "assembler-app.firebaseapp.com",
  projectId: "assembler-app",
  storageBucket: "assembler-app.appspot.com",
  messagingSenderId: "965101614658",
  appId: "1:965101614658:web:12d848b842fbde630d5fdb",
  measurementId: "G-FD240B279K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);