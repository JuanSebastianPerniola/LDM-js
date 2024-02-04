import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import AddTarea from './addTarea';  // Cambiado el nombre del componente
// Eliminado el import innecesario: import addTarea from './addTarea';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList/>
        <AddTarea content="" /> 
        {/* {"Añade una t`"}  este texto funciona como texto dentro de nuestra pagina */}
      </header>
    </div>
  );
}

export default App;
