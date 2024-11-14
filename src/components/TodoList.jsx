import React, { useState } from "react";
import { useTodo } from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { tasks, addTask, updateTask } = useTodo();
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask("");
    }
  };

  const handleUpdateTask = () => {
    if (newTask.trim() && isEditing !== null) {
      updateTask(editIndex, newTask);
      setIsEditing(false);
      setNewTask("");
      setEditIndex(null);
    }
  };

  return (
    <div>
      <h1 className="mb-6 font-bold text-2xl">ToDo Tes Frontend</h1>
      <input
       className="border border-gray-400 rounded-xl px-4 py-2"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder={isEditing ? "Edit your task" : "Add a new task"}
      />
      <button className="bg-blue-400 hover:bg-blue-600 ml-4 px-4 py-2 rounded-xl text-white font-bold" onClick={isEditing ? handleUpdateTask : handleAddTask}>
        {isEditing ? "Update Task" : "Add Task"}
      </button>

      <div className="mt-4">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            setIsEditing={setIsEditing}
            setEditIndex={setEditIndex}
            setNewTask={setNewTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
