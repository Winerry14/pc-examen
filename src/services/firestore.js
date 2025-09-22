import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export const saveLead = lead =>
  addDoc(collection(db, "leads"), { ...lead, createdAt: serverTimestamp() });
