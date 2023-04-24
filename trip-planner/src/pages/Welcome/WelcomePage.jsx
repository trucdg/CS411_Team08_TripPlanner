import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = ({ token }) => {
  let navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h1>Hello there</h1>
      {token && <h2>Welcome back, {token.user.user_metadata.full_name}</h2>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default WelcomePage;
