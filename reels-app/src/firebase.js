// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //1st step
import {getAuth} from "firebase/auth" //2ndstep
import secret from "./secrets";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//1st step

// Initialize Firebase
//1st step
const app = initializeApp(secret);

export let auth = getAuth(app);//2ndstep

export const db = getFirestore(app); //for using firestore