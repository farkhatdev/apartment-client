import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { MdOutlineArrowCircleRight } from "react-icons/md";

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const handleSidebar = () => {
    setActive(false);
  };
  return (
    <div className={`sidebar ${active ? "active" : null}`}>
      <div className="sidebar-controller-btn-group">
        <div className="sidebar-controller-btn">
          <MdOutlineArrowCircleRight
            id="controll-icon"
            size={30}
            onClick={() => setActive((prev) => !prev)}
          />
        </div>
      </div>
      <ul>
        <Link onClick={handleSidebar}>
          <li>
            <div className="sidebar-icon">
              <BiSearch size={18} />
            </div>
            <p>Kunlik kvartira</p>
          </li>
        </Link>
        <Link onClick={handleSidebar}>
          <li>
            <div className="sidebar-icon">
              <BiSearch size={18} />
            </div>
            <p>Uzaq muddetke</p>
          </li>
        </Link>
        <Link onClick={handleSidebar}>
          <li>
            <div className="sidebar-icon">
              <BiSearch size={18} />
            </div>
            <p>Mening kvartiram</p>
          </li>
        </Link>
        <Link onClick={handleSidebar}>
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
