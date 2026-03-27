
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjOKxFROJdO8dhGN8_Icf2iyssMTqivgk",
  authDomain: "healthcare-cb61c.firebaseapp.com",
  projectId: "healthcare-cb61c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();