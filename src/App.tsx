import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Analytics from "./pages/Analytics";
import Patients from "./pages/Patients";
import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/analytics" element={
          <ProtectedRoute><Analytics /></ProtectedRoute>
        } />
        <Route path="/patients" element={
          <ProtectedRoute><Patients /></ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}