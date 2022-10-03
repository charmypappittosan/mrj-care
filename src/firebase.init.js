// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyQglL0rqPN8M1FWlGbolfcCJZgBfCQUg",
  authDomain: "mrj-care.firebaseapp.com",
  projectId: "mrj-care",
  storageBucket: "mrj-care.appspot.com",
  messagingSenderId: "834923922337",
  appId: "1:834923922337:web:9cd7a24b89c294ea25c1e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;