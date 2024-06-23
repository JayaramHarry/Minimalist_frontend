import React from 'react';
import "./Navbar.css"
import logo from "../../assest/Frame 71.png"

function Navbar() {
  return (
      <div className="logo">
        <img src={logo} alt="nav"/>
      </div>
  );
}

export default Navbar;
