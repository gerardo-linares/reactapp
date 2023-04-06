// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzM9dAmHKdABFz8HY_5kBh3og5RwYIiAc",
    authDomain: "ecommerce-65d25.firebaseapp.com",
    projectId: "ecommerce-65d25",
    storageBucket: "ecommerce-65d25.appspot.com",
    messagingSenderId: "492053935740",
    appId: "1:492053935740:web:3f2d68c5fe91698124fbf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const db = getFirestore(app);