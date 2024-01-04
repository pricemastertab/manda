// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-Ol-X8_yscxwtKiAssGgy7y5lsHvKIJk",
  authDomain: "meuproprioprojeto.firebaseapp.com",
  projectId: "meuproprioprojeto",
  storageBucket: "meuproprioprojeto.appspot.com",
  messagingSenderId: "494925157650",
  appId: "1:494925157650:web:e47e1da6f25abf047bcfcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 