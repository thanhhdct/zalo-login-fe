import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

export default function Home() {
  const { auth, logout } = useAuth();
  const { id, user, profilePicture } = auth;
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate("/login", { replace: true });
    }
  }, [id, navigate]);

  return (
    <div style={{ padding: 40, display: "grid", placeItems: "center" }}>
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 32,
          placeItems: "center",
        }}
      >
        <h1 style={{ marginRight: 20 }}>Welcome</h1>

        <button onClick={logout}>Logout</button>
      </div>

      {/* USER INFO */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        {profilePicture && (
          <img
            src={profilePicture}
            alt="Avatar"
            width={80}
            height={80}
            style={{ borderRadius: "50%" }}
          />
        )}

        <div>
          <p>
            <strong>ID:</strong> {id}
          </p>
          <p>
            <strong>Name:</strong> {user}
          </p>
        </div>
      </div>
    </div>
  );
}
