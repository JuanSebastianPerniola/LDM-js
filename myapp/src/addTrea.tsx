import React from "react";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
function addTarea({content}:{content :String}){
    return (
    <div className="input-group flex-nowrap">
    <span className="input-group-text" id="addon-wrapping">@</span>
    <InputGroupText  className="form-control"  aria-label="Username" aria-describedby="addon-wrapping" />
  </div>    
        )    
}
   


