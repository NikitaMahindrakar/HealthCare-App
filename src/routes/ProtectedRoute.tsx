import { Navigate } from "react-router-dom";
import { useStore } from "../store/store";

export default function ProtectedRoute({ children }: any) {
  const user = useStore((s) => s.user);
  return user ? children : <Navigate to="/" />;
}