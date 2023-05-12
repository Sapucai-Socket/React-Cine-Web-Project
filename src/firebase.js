// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdYaNEENHV8VmsWogtimX1i7ERPl2RVXo",
  authDomain: "fir-react-auth-33872.firebaseapp.com",
  projectId: "fir-react-auth-33872",
  storageBucket: "fir-react-auth-33872.appspot.com",
  messagingSenderId: "16053472672",
  appId: "1:16053472672:web:1d0fc26b127377ab49a8c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);