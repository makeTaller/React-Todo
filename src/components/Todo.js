import React from "react";

const Todo = (props)=>{

    return(
        <div className={`item${props.todo.completed ? ' purchased':''}`}
             onClick={()=>props.toggleTask(props.todo.id)}>
            <p>
                {console.log(props.todo.id)}
            </p>
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo;
