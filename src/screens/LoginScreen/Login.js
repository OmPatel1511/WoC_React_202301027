import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "test@example.com" && password === "password") {
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-page__container">
        <h2 className="login-page__title">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            className="login-page__input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="login-page__input"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login-page__button" type="submit">Login</button>
        </form>

        <p>Not registered? <a href="/signup" className="login-page__link">Sign up for free</a></p>

        <div className="login-page__or-divider">OR</div>

        {user ? (
          <p>Signed in as {user.name}</p>
        ) : (
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decodedUser = jwtDecode(credentialResponse.credential);
              setUser(decodedUser);
              navigate("/home");
            }}
            onError={() => console.log("Google Login Failed")}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
