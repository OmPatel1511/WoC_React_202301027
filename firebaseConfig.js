// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgLmwOephJGViqg349BuuvySXTMy5SXSw",
  authDomain: "code-editor-3d80f.firebaseapp.com",
  projectId: "code-editor-3d80f",
  storageBucket: "code-editor-3d80f.firebasestorage.app",
  messagingSenderId: "21386585261",
  appId: "1:21386585261:web:9108b0eaa1199cfaf5d224",
  measurementId: "G-0CV68FE4ZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);