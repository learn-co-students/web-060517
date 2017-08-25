import React from 'react'
const TodoItem = (props) =>{
  const handleClick = () => {
    console.log("Clicking")
    const todoClicked = props.todo
    props.remove(todoClicked)
  }
  return (
    <li onClick={handleClick}>{props.todo}</li>
  )
}

export default TodoItem
