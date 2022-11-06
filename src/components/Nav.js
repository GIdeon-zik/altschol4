import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container">
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "steelblue" } : { color: "grey" }
        }
        className="link"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "steelblue" } : { color: "grey" }
        }
        className="link"
        to="/users"
      >
        Users
      </NavLink>
    </div>
  );
}

export default Nav;
