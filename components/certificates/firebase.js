// firebase.js
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD004Y_vAh1B2kdh9_goaHjQvPo8uIhr38",
  authDomain: "certificates-7f300.firebaseapp.com",
  projectId: "certificates-7f300",
  storageBucket: "certificates-7f300.firebasestorage.app",
  messagingSenderId: "972121053420",
  appId: "1:972121053420:web:0791be80a794849851edc9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig, 'certificates');