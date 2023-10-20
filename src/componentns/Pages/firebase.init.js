// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKk5PjNcCaWh7A8azOoMTetzuFvcmJCzU",
  authDomain: "assignment-ten-a419a.firebaseapp.com",
  projectId: "assignment-ten-a419a",
  storageBucket: "assignment-ten-a419a.appspot.com",
  messagingSenderId: "57683438839",
  appId: "1:57683438839:web:3f0f35882c1deaf1e8f7f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);