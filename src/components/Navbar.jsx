import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <NavLink
          to="/albums"
          className="navbar-link"
          activeClassName="active"
          style={({ isActive }) => ({ color: isActive ? "black" : "gray" })}
        >
          Albums
        </NavLink>
        <NavLink
          to="/"
          className="navbar-link"
          activeClassName="active"
          style={({ isActive }) => ({ color: isActive ? "black" : "gray" })}
        >
          Users
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
