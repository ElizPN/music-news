import React, { useState } from "react";

export const useLoginData = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "Liam" && password === "123123") {
      console.log("Login successful");
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleChangeUserName = () => {
    return (e) => setUsername(e.target.value);
  };

  const hanleOnchangePassword = () => {
    return (e) => setPassword(e.target.value);
  };

  return {
    username,
    password,
    error,
    handleLogin,
    handleChangeUserName,
    hanleOnchangePassword,
  };
};
