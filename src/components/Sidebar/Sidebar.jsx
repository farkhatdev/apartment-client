import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { BsClockHistory } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsCloudUpload } from "react-icons/bs";

const Sidebar = ({ sidebarActive, setSidebarActive }) => {
  const handleSidebar = () => {
    setSidebarActive(false);
  };
  const iconSize = 22;

  return (
    <div className={`sidebar ${sidebarActive ? "active" : null}`}>
      <ul>
        <Link to={"/apartments"} onClick={handleSidebar}>
          <li>
            <div className="sidebar-icon">
              <AiOutlineHome size={iconSize} />
            </div>
            <p>Uzaq muddetli</p>
          </li>
        </Link>
        <Link to={"/apartments"} onClick={handleSidebar}>
          <li>
            <div className="sidebar-icon">
              <BsClockHistory size={iconSize - 2} />
            </div>
            <p>Kunlik kvartiralar</p>
          </li>
        </Link>
        <Link to={"/create-post"} onClick={handleSidebar}>
          <li>
            <div className="sidebar-icon">
              <BsCloudUpload size={iconSize} />
            </div>
            <p>Reklama beriw</p>
          </li>
        </Link>
        <Link to={"/profile"} onClick={handleSidebar}>
          <li>
            <div className="sidebar-icon">
              <CgProfile size={iconSize} />
            </div>
            <p>Profile</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
