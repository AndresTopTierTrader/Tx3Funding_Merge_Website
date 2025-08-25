'use client'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCDw9dcuKGa4bxzdYQ3nYMp_HKATbVj6n4",
    authDomain: "toptier-paid-for-it.firebaseapp.com",
    projectId: "toptier-paid-for-it",
    storageBucket: "toptier-paid-for-it.firebasestorage.app",
    messagingSenderId: "823485141993",
    appId: "1:823485141993:web:f737dc0356670c076c7178",
    measurementId: "G-J8F40CCPDH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig, "Toptier Paid For It");
