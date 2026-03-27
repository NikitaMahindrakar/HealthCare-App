import { useStore } from "../store/store";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const user = useStore((s) => s.user);
  const setUser = useStore((s) => s.setUser);
  const nav = useNavigate();

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    nav("/");
  };

  return (
    <div className="navbar">
      <h1 className="logo">Healthcare</h1>

      <div className="nav-right">
        {!user ? (
          <button className="login-btn" onClick={() => nav("/login")}>
            Login
          </button>
        ) : (
          <>
            <span onClick={() => nav("/analytics")}>Analytics</span>
            <span onClick={() => nav("/patients")}>Patients</span>

            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}