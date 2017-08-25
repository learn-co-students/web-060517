export function addTodo(task) {
  return {
    type: "ADD_TODO",
    todo: task
  }
}


export function removeTodo(task) {
  console.log("Remove some Todos")
  return {
    type: "REMOVE_TODO",
    todo: task
  }
}
