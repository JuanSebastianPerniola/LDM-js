// App.js
import React, { useState } from "react";
import "./App.css";
import { Button } from "./Button";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = () => {
    // Lógica para eliminar tareas (si es necesario)
  };

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} />
    </div>
  );
}
