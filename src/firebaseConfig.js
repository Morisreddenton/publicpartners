import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBdzMqBU2PCgtweQ1KnB76EsPcjWXrm6jc",
  authDomain: "ppab-f7b03.firebaseapp.com",
  projectId: "ppab-f7b03",
  storageBucket: "ppab-f7b03.appspot.com",
  messagingSenderId: "814756965260",
  appId: "1:814756965260:web:6e9315451d60b622f1c4a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
