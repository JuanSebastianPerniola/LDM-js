import React from "react";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
export default function addTarea({content}:{content :String}){
    return (
    <div>
      <label>
        Añade una tarea <input name="myInput"/>
        <div className="cajaReact">
        <button id="addTask" className="inputs">add task</button>
        <button id="deleteTasj" className="inputs">borrar tarea </button>
        </div>
      </label>
   </div>    
        )    
}
   


