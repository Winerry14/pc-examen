import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbyzGD4r9Ep8ApE-gupA7nZi4OhRSX_m8",
  authDomain: "gestion-proyectos-9ebff.firebaseapp.com",
  projectId: "gestion-proyectos-9ebff",
  storageBucket: "gestion-proyectos-9ebff.firebasestorage.app",
  messagingSenderId: "822543426587",
  appId: "1:822543426587:web:db86716baa3f624b6e44be"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
