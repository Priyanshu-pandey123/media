// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuQnFBWwft_BCzVclJiYMEH5ckZVc9V9M",
  authDomain: "media-2b03f.firebaseapp.com",
  projectId: "media-2b03f",
  storageBucket: "media-2b03f.firebasestorage.app",
  messagingSenderId: "310420521399",
  appId: "1:310420521399:web:ffa92762bc9719be67a832",
  measurementId: "G-TCEJXRZV53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { auth, db, storage };
