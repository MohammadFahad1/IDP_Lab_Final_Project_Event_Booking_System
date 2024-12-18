// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3VkH0qJikSqBcjDpDRoNnVIYAOXK5A6s",
  authDomain: "event-booking-idp-lab.firebaseapp.com",
  projectId: "event-booking-idp-lab",
  storageBucket: "event-booking-idp-lab.firebasestorage.app",
  messagingSenderId: "22807735591",
  appId: "1:22807735591:web:da5981cd60ae9ce6ed4d02",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
