import React from "react";
import TodoItem from "./TodoItem";
import { Button } from "react-bootstrap";
function TodoList() {
  const [tasks, setTasks] = React.useState(["Tarea 1", "Tarea 2 "]);
  
//... un desconstrucotr de datos 
    function addTask(){
        setTasks(currentTasks => [...currentTasks, "nueva Tarea"])
    }
// añadir texto a traves con un texto de persona
    function addTexto(){
        
      }
  return (
    <div>
      <h1>Mi lista de tascas </h1>
      <ul>
        {tasks.map((task, index, enunciado) => (
          <TodoItem key={index} content={task} />
        ))}
      </ul>
      <Button></Button>
      <Button variant="secondary" onClick={addTask}> Añadir tarea</Button>
        
    </div>
  );
}
export default TodoList;
