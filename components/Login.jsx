import React from "react";
import { useLoginData } from "../hooks/useLoginData";
import "./Login.css"; // Import your CSS file for styling

const Login = () => {
  const {
    username,
    password,
    error,
    isLoading,
    handleLogin,
    handleChangeUserName,
    hanleOnchangePassword,
  } = useLoginData();

  return (
    <div className="login-container">
      <h2>Sing in to Paid Tabs</h2>
      <form onSubmit={handleLogin}>
        <button type="submit" className="google-sign-in-button">
          Sing in with Google
        </button>
        <p>or sing with email</p>
        <label htmlFor="username">Username or email</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleChangeUserName()}
        />
        <div>
          <label htmlFor="password">Password</label>
          <span style={{ marginLeft: "290px" }}>Forgot?</span>
        </div>
        <input
          type="password"
          id="password"
          value={password}
          onChange={hanleOnchangePassword()}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
        {isLoading && <div className="spinner">Snipper</div>}
        <p>Don't have an account? Sing up </p>
      </form>
    </div>
  );
};

export default Login;
