import React from "react";
import {Button} from "react-bootstrap";
//intentar crer otra aplicacon con todo
function TodoItem({content}:{content :String}) {
        // return <li>{content}</li>
        return (<li>{content} + {"texto de ejemplo"} + {"holaaa"}</li> 
        )       
} 
export default TodoItem;