import React from "react";

const Todo = (props)=>{

    return(
        <div className={`task${props.todo.completed?'purchased':''}`}
             onClick={()=>props.toggleTask(props.todo.id)}>
            {props.todo.task}
            <h1>Todo item</h1>
        </div>
    )
}

export default Todo;
