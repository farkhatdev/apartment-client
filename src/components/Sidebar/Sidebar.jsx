import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const Sidebar = ({ sidebarActive, setSidebarActive }) => {
  const handleSidebar = () => {
    setSidebarActive(false);
  };
  return (
    <div className={`sidebar ${sidebarActive ? "active" : null}`}>
      <ul>
        <Link to={"/create-post"} onClick={handleSidebar}>
          <li>
            <div className="sidebar-icon">
              <BiSearch size={18} />
            </div>
            <p>Reklama beriw</p>
          </li>
        </Link>
        <Link to={"/apartments"} onClick={handleSidebar}>
          <li>
            <div className="sidebar-icon">
              <BiSearch size={18} />
            </div>
            <p>Uzaq muddetli</p>
          </li>
        </Link>
        <Link to={"/apartments"} onClick={handleSidebar}>
          <li>
            <div className="sidebar-icon">
              <BiSearch size={18} />
            </div>
            <p>Kunlik kvartiralar</p>
          </li>
        </Link>
        <Link to={"/profile"} onClick={handleSidebar}>
          <li>
            <div className="sidebar-icon">
              <BiSearch size={18} />
            </div>
            <p>Profile</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
