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
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDING_ID,
    appId: import.meta.env.VITE_APP_ID
  };

  export const app: FirebaseApp = initializeApp(firebaseConfig)

  export const db = getFirestore(app)