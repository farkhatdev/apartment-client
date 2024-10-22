import React from "react";
import "./navbar.css";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Navbar = ({ setIsAuthenticated, setSidebarActive }) => {
  const accessToken = localStorage.getItem("access-token");
  const decoded = jwtDecode(accessToken);
  const { phone, name } = decoded;

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-width">
          <div className="nav-left">
            <div
              className="sidebar-menu-icon"
              onClick={() => setSidebarActive((prev) => !prev)}
            >
              <LuMenu size={28} color="blueviolet" />
            </div>
            <div className="logo-img">
              <Link to={"/apartments"}>
                <img
                  src="https://storage.googleapis.com/apartments-d014c.appspot.com/998999542003/1729628031566-logo%20(2).png"
                  alt=""
                />
              </Link>
            </div>
          </div>

          <ul className="navbar-menu">
            <li className="menu-item">
              <Link className="menu-item-link" to={"/apartments"}>
                Apartments
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-item-link" to={"/create-post"}>
                New apartment
              </Link>
            </li>
            <li className="menu-item">
              <Link className="menu-item-link" to={"/profile"}>
                Profile
              </Link>
            </li>
          </ul>
          {/* 
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              defaultValue={"Nukus"}
              placeholder="Search..."
            />
            <div className="search-icon">
              <BiSearch size={18} />
            </div>
          </div> */}
          <div className="nav-right">
            <div className="profile">
              <div className="profile-img">
                <img
                  src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
                  width={45}
                  height={45}
                  alt=""
                />
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
