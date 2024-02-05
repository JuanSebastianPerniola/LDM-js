// Button.js
import React from "react";
interface ButtonProps {
    onAddTask: React.MouseEventHandler<HTMLButtonElement>;
    onDeleteTask: React.MouseEventHandler<HTMLButtonElement>;
  }
export const Button: React.FC<ButtonProps> = ({ onAddTask, onDeleteTask }) => {
  return (
    <div>
      <button onClick={onAddTask}>Add tarea</button>
      <button onClick={onDeleteTask}>Delete tarea</button>
    </div>
  );
};
