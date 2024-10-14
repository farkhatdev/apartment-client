import React from "react";
import "./navbar.css";
import logoImg from "../utils/images/logo.png";
import profilerImg from "../utils/images/profilePicture.png";
import { BiSearch } from "react-icons/bi";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-width">
          <div className="nav-right">
            <div className="logo-img">
              <img src={logoImg} alt="" />
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
                <h4 className="profile-name">Farkhat</h4>
                <p>+998 93 614 27-24</p>
              </div>
            </div>
            <div className="languages">
              <select name="languages" id="">
                <option value="uzb">UZB</option>
                <option value="qq">QQ</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
