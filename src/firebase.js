import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHZr7AKIowfiq3DWxRH-xSv8IBmSTrPrw",
  authDomain: "food-ad813.firebaseapp.com",
  databaseURL: "https://food-ad813-default-rtdb.firebaseio.com",
  projectId: "food-ad813",
  storageBucket: "food-ad813.appspot.com",
  messagingSenderId: "671181478265",
  appId: "1:671181478265:web:372ff138eb90247c2577a8",
  measurementId: "G-3WNP57KV77"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage();
export const db = getFirestore(app);
