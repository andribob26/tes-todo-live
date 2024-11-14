import React, { createContext, useState, useEffect, useContext } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const removeTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };

    const updateTask = (index, newTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task, i) => (i === index ? newTask : task))
        );
    };

    return (
        <TodoContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => useContext(TodoContext);