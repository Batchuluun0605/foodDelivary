import React from "react";
import "./Sidebar.css";
import { assests } from "../../assets/assest";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={assests.add} alt="" />
          <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <img src={assests.check} alt="" />
          <p>List Items</p>
        </NavLink>
        <NavLink to="order" className="sidebar-option">
          <img src={assests.check} alt="" />
          <p>orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
