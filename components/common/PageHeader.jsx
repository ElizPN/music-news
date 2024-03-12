import "./PageHeader.css"; 

import { useLoginData } from "../../hooks/useLoginData";
import { useRouter } from "next/router";

export const PageHeader = () => {

  const router = useRouter(); 

  const handleSignOut = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/login"); 
};

    return (
      <div className="header-container">
      <div className="welcome-wrapper">
        <h2 className="welcome-message">Welcome Liam</h2>
        <button className="sign-out-button" onClick={handleSignOut}>Sing out</button>
      </div>
      </div>
    );
  };
  