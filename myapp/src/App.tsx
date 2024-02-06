import React, { useState } from "react";
import "./App.css";
import Stack from 'react-bootstrap/Stack';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import classNames from 'classnames'; // Importa la biblioteca classNames para manejar múltiples clases CSS
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export default function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [listColor, setNewColor] = useState<string>('');
  const [completedTasks, setCompletedTasks] = useState<boolean[]>([]); // Estado para rastrear las tareas completadas

  const handleAddTask = () => {
    if(newTask === " "){{[
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ].map((variant) => (
      <Alert key={variant} variant={variant}>
         Fist you got to add some text down there lad{variant}
       
      </Alert>
    ))}
     
    }
    else if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setCompletedTasks([...completedTasks, false]); // Inicialmente, ninguna tarea está completada
      setNewTask('');
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    //aray con tareas 
    updatedTasks.splice(index, 1);
    //eliminamos (splice).arrays 
    setTasks(updatedTasks);
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks.splice(index, 1);
    setCompletedTasks(updatedCompletedTasks);
  };

  const handleMarked = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = '✔️ ' + updatedTasks[index]; // agregamos un check a la izquierda de la lista 
    setTasks(updatedTasks);
    setNewColor('gray'); //Cambiamos el color del contenid de la lista a gris 
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks[index] = true; // seteo como true cada vez que creo una lista 
    setCompletedTasks(updatedCompletedTasks);
  };

  return (
    <body>
      <div className='App'>
        <h1>Todo List</h1>
        <FloatingLabel controlId="floatingInput" label="Add your item here...">
          <Form.Control 
            type="text" 
            placeholder="Add your item here..." 
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </FloatingLabel>
        <Button variant="primary" onClick={() => handleAddTask()}>Add task</Button>{' '}
        {/* <button >Add Task</button> */}
        <Stack>
          {tasks.map((task, index) => (
            <li key={index} className={classNames({ 'completed-task': completedTasks[index] })}>
              {task}
              <Button onClick={() => handleDeleteTask(index)}>delete</Button>
              <Button 
                onClick={() => handleMarked(index)} 
                disabled={completedTasks[index]} // Deshabilita el botón si la tarea está completada
              >
                Mark as Done
              </Button>
            </li>
          ))}
        </Stack>
      </div>
    </body>
  );
}
