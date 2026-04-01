import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-wrap">
        <h2 className="login-title">LOGIN</h2>

        <form className="login-form" onSubmit={loginUser}>
          <div className="login-input-group">
            <input
              type="text"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="login-input"
            />
          </div>

          <div className="login-input-group">
            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>

          <div className="login-action-row">
            <button type="submit" className="text-btn">
              LOGIN
            </button>

            <button
              type="button"
              className="text-btn"
              onClick={() => navigate("/join")}
            >
              JOIN
            </button>
          </div>

          <div className="login-help">
            <a href="/">Forgot Your ID</a>
            <span>or</span>
            <a href="/">Password ?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;