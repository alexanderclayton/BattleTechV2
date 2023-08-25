import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

interface IFirebase {
    apiKey: string
    authDomain: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
}

const firebaseConfig: IFirebase = {
    apiKey: "AIzaSyDhhNYSA8dU40Kigx_BGrRf0Ni_hwJ0F9U",
    authDomain: "battletech-ef52d.firebaseapp.com",
    projectId: "battletech-ef52d",
    storageBucket: "battletech-ef52d.appspot.com",
    messagingSenderId: "773827423783",
    appId: "1:773827423783:web:29d6d4d7088d5b2a256802"
  };

  export const app: FirebaseApp = initializeApp(firebaseConfig)

  export const db = getFirestore(app)