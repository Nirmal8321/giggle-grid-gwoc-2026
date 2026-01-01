// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl9MjhHSARlTP8nDpvoAbSbEoobwaY2Hs",
  authDomain: "giggle-grid-gwoc2026.firebaseapp.com",
  projectId: "giggle-grid-gwoc2026",
  storageBucket: "giggle-grid-gwoc2026.firebasestorage.app",
  messagingSenderId: "194393537222",
  appId: "1:194393537222:web:833a9f672118b5d057f5c7",
  measurementId: "G-6BRWS0VT0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);