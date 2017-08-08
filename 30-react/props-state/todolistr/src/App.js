import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './components/TodoContainer'

class App extends Component {


  state = {
    todos: []
  }

  addTodo = (todo) => {
    this.setState({ todos: [...this.state.todos, todo]})
  }

  render() {

    return (
      <TodoContainer todos={this.state.todos} addTodo={this.addTodo} />
    );
  }
}

export default App;
