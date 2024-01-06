// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh_d0ljxukEq8hutXoClSgE9LdtbzynxA",
  authDomain: "portfolio-fe7e7.firebaseapp.com",
  projectId: "portfolio-fe7e7",
  storageBucket: "portfolio-fe7e7.appspot.com",
  messagingSenderId: "153708420576",
  appId: "1:153708420576:web:4aebd438a4e4bd18be5f85",
  measurementId: "G-5G1F4105Q9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);