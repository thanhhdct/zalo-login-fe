import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ZaloCallback() {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (!code) {
      console.log("❌ Không có code");
      return;
    }

    const getUser = async () => {
      try {
        const res = await fetch("http://localhost:4000/user");
        const data = await res.json();

        if (data.user) {
          login({
            user: data.user,
            profilePicture: data.profilePicture,
            id: data.id,
          });

          localStorage.setItem("loggedIn", "true");
          navigate("/");
        }
      } catch (err) {
        console.error(err);
      }
    };

    getUser();
  }, [navigate, login]);

  return (
    <div style={{ padding: 40 }}>
      <h2>Đang xử lý đăng nhập Zalo...</h2>
    </div>
  );
}
