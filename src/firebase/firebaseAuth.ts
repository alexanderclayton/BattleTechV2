import { app } from "./firebaseConfig";
import { getAuth, Auth } from 'firebase/auth'

export const auth: Auth = getAuth(app)