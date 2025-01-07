import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container border padding-10 margin-10">
      <div className="fav-city-container">
        <h3>Favourait Cities</h3>
        <div className="side-list-container">
          <ul>
            <li>Daman</li>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>Bihar</li>
            <li>Goa</li>
          </ul>
        </div>
      </div>
      <div className="recent-search-container">
        <h3>Recent Search</h3>
        <div className="side-list-container">
          <ul>
            <li>Daman</li>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>Bihar</li>
            <li>Goa</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
