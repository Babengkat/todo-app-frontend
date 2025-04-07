import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import './App.css';


const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`app-container ${isDarkMode ? 'dark' : 'light'}`}>
            <ToDoList isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
    );
};

export default App;
