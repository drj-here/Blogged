// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // in vite instead of using 'process' we use 'import.meta'
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "blogged-37969.firebaseapp.com",
  projectId: "blogged-37969",
  storageBucket: "blogged-37969.appspot.com",
  messagingSenderId: "296477161902",
  appId: "1:296477161902:web:37df39100dce5dffc6b03f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);