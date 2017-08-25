import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  const todoItems = this.props.todos.map((todo, index) => <li store={this.props.store} key={index}>{todo}</li>)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul>
          {todoItems}
        </ul>

      </div>
    );
  }
}

export default App;
