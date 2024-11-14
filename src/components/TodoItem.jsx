import React from 'react';
import { useTodo } from '../TodoContext';

const TodoItem = ({ task, index, setIsEditing, setEditIndex, setNewTask }) => {
    const { removeTask } = useTodo();

    const handleEdit = () => {
        setIsEditing(true); 
        setEditIndex(index); 
        setNewTask(task); 
    };

    return (
        <div className='py-2'>
            {task} 
            <button className="bg-green-400 hover:bg-green-600 ml-4 px-4 py-2 rounded-xl text-white font-bold" onClick={handleEdit}>Edit</button>
            <button className="bg-red-400 hover:bg-red-600 ml-4 px-4 py-2 rounded-xl text-white font-bold" onClick={() => removeTask(index)}>Delete</button>
        </div>
    );
};

export default TodoItem;