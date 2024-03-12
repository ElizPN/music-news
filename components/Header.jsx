import "./Header.css"; 

import { useLoginData } from "../hooks/useLoginData";

export const Header = () => {

const {handleSignOut} = useLoginData()

   
    return (
      <div className="header-container">
      <div className="welcome-wrapper">
        <h2 className="welcome-message">Welcome Liam</h2>
        <button className="sign-out-button" onClick={handleSignOut}>Sing out</button>
      </div>
      </div>
    );
  };
  