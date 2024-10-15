import React from "react";
import "./navbar.css";
import logoImg from "../utils/images/logo.png";
import profilerImg from "../utils/images/profilePicture.png";
import { BiSearch } from "react-icons/bi";
import { RiMenu3Line } from "react-icons/ri";
import { jwtDecode } from "jwt-decode";

const Navbar = ({ setIsAuthenticated }) => {
  const accessToken = localStorage.getItem("access-token");
  const decoded = jwtDecode(accessToken);
  const { phone, name } = decoded;

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-width">
          <div className="nav-right">
            <div className="logo-img">
              <img src={logoImg} alt="" />
            </div>
          </div>
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              defaultValue={"Nukus"}
            />
            <div className="search-icon">
              <BiSearch size={18} />
            </div>
          </div>
          <div className="nav-left">
            <div className="menu-burger">
              <RiMenu3Line size={27} />
            </div>
            <div className="profile">
              <div className="profile-img">
                <img src={profilerImg} width={40} height={40} alt="" />
              </div>
              <div className="profile-info">
                <h4 className="profile-name">{name}</h4>
                <p>{phone}</p>
              </div>
            </div>
            <button
              className="logout-btn"
              onClick={() => {
                localStorage.removeItem("access-token");
                setIsAuthenticated(false);
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
