// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiwi5COKt6pU8cnyfdq33WDdQb2RTaJf4",
  authDomain: "eventure-a6628.firebaseapp.com",
  projectId: "eventure-a6628",
  storageBucket: "eventure-a6628.appspot.com",
  messagingSenderId: "197499403993",
  appId: "1:197499403993:web:85415e47f15481e36e08c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const imageDB = getStorage(app)