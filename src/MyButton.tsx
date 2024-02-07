// Button.js
import React from "react";
import { Button } from "react-bootstrap";
interface ButtonProps {
    onAddTask: React.MouseEventHandler<HTMLButtonElement>;
    onDeleteTask: React.MouseEventHandler<HTMLButtonElement>;
  }
export const MyButton: React.FC<ButtonProps> = ({ onAddTask, onDeleteTask }) => {
  return (
    <div>
      <Button variant="danger" onClick={onAddTask}>Add tarea</Button>
      {/* <button onClick={onDeleteTask}>Delete tarea</button> */}
    </div>
  );
};
