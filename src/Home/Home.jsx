import React from "react";
import { jwtDecode } from "jwt-decode";
import "./home.css";

const Home = ({ setIsAuthenticated }) => {
  const accessToken = localStorage.getItem("access-token");
  const decoded = jwtDecode(accessToken);

  return (
    <div className="home">
      <div className="container">
        <div className="home-inner">
          <h4>Apartments</h4>
          <button
            className="logout"
            onClick={() => {
              localStorage.removeItem("access-token");
              setIsAuthenticated(false);
            }}
          >
            Logout
          </button>
        </div>
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>
          {decoded.phone}
        </h2>
      </div>
    </div>
  );
};

export default Home;
