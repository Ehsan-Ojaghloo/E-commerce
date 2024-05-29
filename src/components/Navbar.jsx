import React from "react";
import "./Navbar.scss";
import { RiMenu4Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar-page-con">
      <RiMenu4Fill className="menu-icon" />
      <FaUserCircle className="user-icon" />
    </div>
  );
}

export default Navbar;
