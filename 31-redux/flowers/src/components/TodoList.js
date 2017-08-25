import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  const todoItems = props.todos.map((todo, index) => <TodoItem key={index} remove={props.remove} todo={todo}/>)
  return(
    <ul>
    {todoItems}
    </ul>)
}

export default TodoList
