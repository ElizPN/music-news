import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";


export const useLoginData = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter(); 

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
      router.push("/posts");
    }
  }, [router]); 
  

  const handleLogin =   (e) => {
    e.preventDefault();

    setIsLoading(true); 

    if (username === "Liam" && password === "123123") {
      setTimeout(() => {
        console.log("Login successful");
           localStorage.setItem("isLoggedIn", true);
           router.push("/posts");
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
