import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo1.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-light fixed-top shadow height-5em">
        <div className="container-fluid container center-app">
          <div className="offcanvas-header">
            <NavLink to="/">
              <img src={logo} alt="logo" style={{ height: "50px", width: "100px"}} />
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
