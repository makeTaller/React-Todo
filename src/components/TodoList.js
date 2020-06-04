// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {

    return(
        <div className="shopping-list">
             {props.todos.map(todo =>(
                 <Todo key={todo.id} toggleTask={props.toggleTask} todo={todo} />))} 
            <button className="clear-btn" onClick={props.clearTask}>
                Clear Task
            </button>
        </div>
    )
}
export default  TodoList;
