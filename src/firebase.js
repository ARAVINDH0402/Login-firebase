import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1cWOP-twqgLZVQEKgl8VjaFCnlfnf5l4",
  authDomain: "login-fce65.firebaseapp.com",
  projectId: "login-fce65",
  storageBucket: "login-fce65.firebasestorage.app",
  messagingSenderId: "956760743934",
  appId: "1:956760743934:web:5e33d4288ddd2080ea2aaf",
  measurementId: "G-8JMKWNE22S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
