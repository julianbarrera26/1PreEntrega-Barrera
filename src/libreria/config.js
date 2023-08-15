// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACCccnIfqsH-W_RzBFcPe1onys8KjBZDA",
  authDomain: "product-293fb.firebaseapp.com",
  projectId: "product-293fb",
  storageBucket: "product-293fb.appspot.com",
  messagingSenderId: "106521483102",
  appId: "1:106521483102:web:1e775111d980bbf5a461cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);