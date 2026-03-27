import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { auth } from "./services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStore } from "./store/store";

onAuthStateChanged(auth, (user) => {
  useStore.getState().setUser(user);
});

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);