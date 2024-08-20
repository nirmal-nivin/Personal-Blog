// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCZtXZA-Nc9lMqwN7u3GciqIkU1aPUcUV8",
  authDomain: "personal-blog-nivin.firebaseapp.com",
  projectId: "personal-blog-nivin",
  storageBucket: "personal-blog-nivin.appspot.com",
  messagingSenderId: "195896637419",
  appId: "1:195896637419:web:917c016cab91d621c14bae",
  measurementId: "G-T190LBCF26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth