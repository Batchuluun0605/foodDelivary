import React from "react";
import "./Navbar.css";
import { assests } from "../../assets/assest";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assests.logo} alt="" className="logo" />
      <img src={assests.profile} className="profile" alt="" />
    </div>
  );
};

export default Navbar;
