// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //1st step
import {getAuth} from "firebase/auth" //2ndstep

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//1st step
const firebaseConfig = {
  apiKey: "AIzaSyD0H7SA2AnqBxxdkS9y5jPxtH0iPLYvqFM",
  authDomain: "fir-demo-3fcf8.firebaseapp.com",
  projectId: "fir-demo-3fcf8",
  storageBucket: "fir-demo-3fcf8.appspot.com",
  messagingSenderId: "970529643575",
  appId: "1:970529643575:web:f273c15c72afe386d333b2"
};

// Initialize Firebase
//1st step
const app = initializeApp(firebaseConfig);

export let auth = getAuth(app);//2ndstep

export const db = getFirestore(app);