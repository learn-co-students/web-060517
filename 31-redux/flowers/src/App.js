import React, { Component } from 'react';
import './App.css';

import TodoContainer from './components/TodoContainer'
import TodoSubmit from './components/TodoSubmit'


class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <TodoSubmit/>
        <TodoContainer />
      </div>
    );
  }
}


export default App;
