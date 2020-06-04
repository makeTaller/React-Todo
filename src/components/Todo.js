import React from "react";

const Todo = (props)=>{

    return(
        <div>
            {props.todo.task}
            <h1>Todo item</h1>
        </div>
    )
}

export default Todo;
