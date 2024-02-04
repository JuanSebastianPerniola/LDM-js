import React from "react";
// import TodoItem from "./TodoItem";
import { Button } from "react-bootstrap";
function TodoList() {
  const [tasks, setTasks] = React.useState(["", ""]);

  //... un desconstrucotr de datos
  function addTask() {
    setTasks((currentTasks) => [...currentTasks, "nueva Tarea"]);
  }

  return (
    <div>
      <h1>Mi lista de tascas </h1>
      <ul>
        {/* {tasks.map((task, index, enunciado) => (
          <TodoItem key={index} content={task} />
        ))} */
        }
      </ul>
    </div>
  );
}
export default TodoList;
