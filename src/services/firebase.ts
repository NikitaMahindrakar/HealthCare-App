
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyDjOKxFROJdO8dhGN8_Icf2iyssMTqivgk",
  authDomain: "healthcare-cb61c.firebaseapp.com",
  projectId: "healthcare-cb61c"
=======
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID
>>>>>>> 46533d5 (Remove exposed firebase config)
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();