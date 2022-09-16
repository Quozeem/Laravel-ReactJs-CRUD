import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Dashboard = () => {
  const Navigate = useNavigate();
  //const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (!loggedInUser) {
      return Navigate("/login");
    }
  }, []);

  return (
    <>
      <h3>You're Welcome</h3>
    </>
  );
};
export default Dashboard;
