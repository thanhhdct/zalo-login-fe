import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ZaloCallback from "./pages/ZaloCallback";

export default function App() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/login-zalo" element={<ZaloCallback />} />
      <Route
        path="/"
        element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}
