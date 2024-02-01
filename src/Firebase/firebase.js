// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from  "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA27V1Bqllr087aBU6slj593R_aU5o3nHU",
  authDomain: "filmyworld-2f6c2.firebaseapp.com",
  projectId: "filmyworld-2f6c2",
  storageBucket: "filmyworld-2f6c2.appspot.com",
  messagingSenderId: "381768633651",
  appId: "1:381768633651:web:29752a17a63ee1688a0246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
const contactRef= collection(db, "contact");

export default app;