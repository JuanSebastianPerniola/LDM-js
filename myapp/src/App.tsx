import React, { useState } from "react";
import "./App.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export default function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [completedTasks, setCompletedTasks] = useState<boolean[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setCompletedTasks([...completedTasks, false]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks.splice(index, 1);
    setCompletedTasks(updatedCompletedTasks);
  };

  const handleMarked = (index: number) => {
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks[index] = true;
    setCompletedTasks(updatedCompletedTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <FloatingLabel controlId="floatingInput" label="Add something">
        <Form.Control
          type="text"
          placeholder="Add something"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </FloatingLabel>
      <div className="addButton">
        <Button variant="primary" onClick={() => handleAddTask()}>
          Add task
        </Button>{" "}
      </div>

      <ListGroup className="overflow">
        {tasks.map((task, index) => (
          <ListGroup.Item
            key={index}
            style={{
              backgroundColor: completedTasks[index] ? "gray" : "white", //if para true or false
            }}
          >
            {task}
            <div>
              <Button className="margin" onClick={() => handleDeleteTask(index)}>Delete</Button>
              <Button
                onClick={() => handleMarked(index)}
                disabled={completedTasks[index]}
              >
                Mark
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}