import React from 'react'
import TodoItem from './TodoItem'


class TodoList extends React.Component {
  render() {
    const todos = this.props.todos.map((todo, index) => <TodoItem key={index} item={todo}/>)
    return (
      <div id="todo-list">
        <div className="ui bulleted list">
          {todos}
        </div>
      </div>
    )
  }
}


export default TodoList
