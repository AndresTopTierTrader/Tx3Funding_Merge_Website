import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC7YCJnP4XIbly9f8I6R-DAg7EdeBQmpow",
    authDomain: "email-coupon-api.firebaseapp.com",
    projectId: "email-coupon-api",
    storageBucket: "email-coupon-api.appspot.com",
    messagingSenderId: "940885943865",
    appId: "1:940885943865:web:c7f00e2c016d7c06b68fe8"
  };
  
export const newApp = initializeApp(firebaseConfig, 'CouponApi');
export const auth = getAuth(newApp);