import React, { useState, useEffect } from 'react';
import { getTasks, addTask, updateTask, deleteTask } from '../api';
import './ToDoList.css';



const ToDoList = ({ isDarkMode, toggleDarkMode }) => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [filter, setFilter] = useState('All');
    const [editingTask, setEditingTask] = useState(null);
    const [editTitle, setEditTitle] = useState('');

    useEffect(() => {
        fetchTasks();
    }, [filter]);

    const fetchTasks = async () => {
        try {
            const response = await getTasks();
            const filteredTasks = response.data.filter((task) => {
                if (filter === 'Completed') return task.completed;
                if (filter === 'Pending') return !task.completed;
                return true;
            });
            setTasks(filteredTasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleAddTask = async () => {
        if (newTask.trim()) {
            try {
                await addTask({ title: newTask, completed: false });
                setNewTask('');
                fetchTasks();
            } catch (error) {
                console.error('Error adding task:', error);
                alert('Failed to add task.');
            }
        }
    };

    const handleToggleComplete = async (task) => {
        await updateTask(task.id, { ...task, completed: !task.completed });
        fetchTasks();
    };

    const handleEditTask = (task) => {
        setEditingTask(task.id);
        setEditTitle(task.title);
    };

    const handleSaveTask = async (taskId) => {
        if (editTitle.trim()) {
            try {
                await updateTask(taskId, { title: editTitle });
                setEditingTask(null);
                fetchTasks();
            } catch (error) {
                console.error('Error saving task:', error);
                alert('Failed to save task.');
            }
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await deleteTask(id);
            fetchTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
            alert('Failed to delete task.');
        }
    };

    return (
        <div className={`dashboard ${isDarkMode ? 'dark' : 'light'}`}>
            {/* Sidebar */}
            <aside className="sidebar">
                
                <button className="nav-button">My Task</button>
                <button className="nav-button">Task Categories</button>
                <button className="nav-button">Settings</button>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                {/* Header */}
                <header className="header">
                    <h2>ToDoList</h2>
                    <div>
                        <button onClick={toggleDarkMode} className="dark-mode-button">
                            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                        <span>{new Date().toLocaleDateString()}</span>
                    </div>
                </header>

                

                {/* Tasks Section */}
                <section className="task-section">
                    <h3>Tasks</h3>

                    {/* Add Task Input */}
                    <div className="add-task-container">
                        <input
                            type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            placeholder="Add a task..."
                        />
                        <button onClick={handleAddTask} className="add-task-button">+</button>
                    </div>

                    {/* Filters */}
                    <div className="filter-buttons">
                        <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
                        <button onClick={() => setFilter('Pending')} className={filter === 'Pending' ? 'active' : ''}>Pending</button>
                        <button onClick={() => setFilter('Completed')} className={filter === 'Completed' ? 'active' : ''}>Completed</button>
                    </div>

                    {/* Tasks List with Checkboxes */}
                    <ul className="task-list">
                        {tasks.map((task) => (
                            <li key={task.id} className={task.completed ? 'completed-task' : ''}>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => handleToggleComplete(task)}
                                />
                                {editingTask === task.id ? (
                                    <input
                                        type="text"
                                        value={editTitle}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                    />
                                ) : (
                                    <span>{task.title}</span>
                                )}

                                <div className="task-buttons">
                                    {editingTask === task.id ? (
                                        <>
                                            <button onClick={() => handleSaveTask(task.id)}>✔</button>
                                            <button onClick={() => setEditingTask(null)}>✖</button>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={() => handleEditTask(task)}>✏</button>
                                            <button onClick={() => handleDeleteTask(task.id)}>🗑</button>
                                        </>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default ToDoList;
