//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmKtmjkDdwSFL5tx147tp5WsjDLiUY16k",
    authDomain: "ecommerce-94a8a.firebaseapp.com",
    projectId: "ecommerce-94a8a",
    storageBucket: "ecommerce-94a8a.appspot.com",
    messagingSenderId: "28231201955",
    appId: "1:28231201955:web:01bf89df39b3ff117e7b16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 // Initialize Firebase
export const db = getFirestore(app);