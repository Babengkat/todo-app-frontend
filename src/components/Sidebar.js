import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="https://via.placeholder.com/50" alt="Profile" />
        <h3>John Doe</h3>
      </div>
      <ul>
        <li className="active">My Task</li>
        <li>Task Categories</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
