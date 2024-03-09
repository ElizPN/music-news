import React, { useState } from "react";

export const useLoginData = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin =   (e) => {
    e.preventDefault();

    setIsLoading(true); 

    if (username === "Liam" && password === "123123") {
      setTimeout(() => {
        console.log("Login successful");
        setIsLoading(false);
    }, 1000);

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
    isLoading,
    handleLogin,
    handleChangeUserName,
    hanleOnchangePassword,
  };
};
