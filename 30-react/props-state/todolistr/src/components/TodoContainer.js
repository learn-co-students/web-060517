import React from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'


class TodoContainer extends React.Component {


  constructor() {
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(todo) {
    this.props.addTodo(todo)
  }

  render() {
    return (
      <div className="todo-container">
        <div className="ui two column centered grid">
          <div className="column">
            <TodoList todos={this.props.todos}/><br/>
            <TodoForm onSubmit={this.onSubmit}/>
          </div>
        </div>
      </div>

    )
  }
}

export default TodoContainer
