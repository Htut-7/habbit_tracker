import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1gHuegKsVJFEafh2kBotMvycT7WywIfk",
  authDomain: "habbit-tracker-c3501.firebaseapp.com",
  projectId: "habbit-tracker-c3501",
  storageBucket: "habbit-tracker-c3501.firebasestorage.app",
  messagingSenderId: "432721841463",
  appId: "1:432721841463:web:def9d12c530c0ada075eb2",
  measurementId: "G-GRP24DTBQS",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
