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
        <div className="sing-in-container">
          <div className="sign-with-email">or sign with email</div>
        </div>

        <label htmlFor="username">Username or email</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleChangeUserName()}
        />
        <div className="form-group">
          <label htmlFor="password" className="label-password">
            Password
          </label>
          <a href="https://paidtabs.com/" className="forgot-password-link">
            Forgot?
          </a>
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
        <div>
        {isLoading && <div id="loading"></div>}
        </div>
        <div className="signup-container">
          <span>Don't have an account? </span>
          <a href="https://paidtabs.com/" className="sing-ap-link">
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
