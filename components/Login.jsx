import React from "react";
import { useLoginData } from "../hooks/UseLoginData";

const Login = () => {
  const {
    username,
    password,
    error,
    handleLogin,
    handleChangeUserName,
    hanleOnchangePassword,
  } = useLoginData();

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleChangeUserName()}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={hanleOnchangePassword()}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
