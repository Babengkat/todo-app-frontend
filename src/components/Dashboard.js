import React from "react";
import ToDoList from "./ToDoList";
import "./Dashboard.css";


const Dashboard = ({ darkMode, setDarkMode }) => {
  return (
    <div className="dashboard">
      <header>
        <h2>ToDoList</h2>
        <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <p className="date">{new Date().toLocaleDateString()}</p>
      </header>
      
      <div className="banner">
      <img src={darkMode ? "/components/images/moon.jpg" : "/components/images/daytime.jpg"} alt="Banner" />

      </div>
      
      <div className="tasks-section">
        <h3>Tasks</h3>
        <ToDoList isDarkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      </div>
    </div>
  );
};

export default Dashboard;
