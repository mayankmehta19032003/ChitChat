import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDljxySPNbHBulofK3AnvT68lyCY8Z3C58",
  authDomain: "chitchat-93b54.firebaseapp.com",
  projectId: "chitchat-93b54",
  storageBucket: "chitchat-93b54.firebasestorage.app",
  messagingSenderId: "73336359023",
  appId: "1:73336359023:web:4da7318b5f23938e18a59a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();