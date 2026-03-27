import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../services/firebase";
import { useStore } from "../store/store";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const setUser = useStore((s) => s.setUser);
  const nav = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await signInWithPopup(auth, provider);
      setUser(res.user);

      nav("/");
    } catch (err: any) {
      setError("Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">

      {/* Left Side (Image) */}
      <div className="login-left"></div>

      {/* Right Side (Form) */}
      <div className="login-right">
        <div className="login-card">

          <h2>Welcome Back!!!</h2>
          <p>Login to your healthcare dashboard</p>

          {error && <p className="error">{error}</p>}

          <button
            className="google-btn"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Continue with Google"}
          </button>

        </div>
      </div>
    </div>
  );
}