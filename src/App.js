import React from 'react';
import TodoList from './components/TodoList';

const todos = [
    {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
        // This provides us the initial data to use
      todos
    }
  }

  addTodo = (e, todo) => {
    e.preventDefault();
      // This is structually mimicing our data 
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    };
      // This is adding our data
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
