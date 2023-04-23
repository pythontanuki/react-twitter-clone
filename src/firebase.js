import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzH1PrsZNAWdWCJiGcAQacZ73D6Cpk0AA",
  authDomain: "twitter-clone-99baf.firebaseapp.com",
  projectId: "twitter-clone-99baf",
  storageBucket: "twitter-clone-99baf.appspot.com",
  messagingSenderId: "1062179053238",
  appId: "1:1062179053238:web:cbea7c66a35bc791515017",
  measurementId: "G-WNDCY4MEPK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
