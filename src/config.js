// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBXCjwzybRA3BjVQT608PIpn3FjLzo9rwE",
  authDomain: "taskez-3546c.firebaseapp.com",
  projectId: "taskez-3546c",
  storageBucket: "taskez-3546c.appspot.com",
  messagingSenderId: "684933700706",
  appId: "1:684933700706:web:23bd86045aabb984d4853b",
  measurementId: "G-EGBE4SKQHQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
console.log(app)