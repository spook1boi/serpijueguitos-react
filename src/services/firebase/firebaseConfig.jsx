import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCNGrIMk_XYw3Yv-99F0WaJt5Y-uW4xIGc",
  authDomain: "serpijueguitos.firebaseapp.com",
  projectId: "serpijueguitos",
  storageBucket: "gs://serpijueguitos.appspot.com/",
  messagingSenderId: "327880566190",
  appId: "1:327880566190:web:335984492f63b23706943f"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };