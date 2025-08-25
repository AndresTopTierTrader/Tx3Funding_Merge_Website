// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8mFQ86XV6r2o8D-s00ndEQj5BA5QbUoA",
  authDomain: "halloween-raffle.firebaseapp.com",
  projectId: "halloween-raffle",
  storageBucket: "halloween-raffle.appspot.com",
  messagingSenderId: "98286938910",
  appId: "1:98286938910:web:df0922d7fd1ea874b6f70f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig, "Halloween Raffle");