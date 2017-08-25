
///THINGS TO NOTE
// ACTions are pure functions
// must return an object

function addTodo(todo) {
  return {
    type: "ADD_TODO",
    todo: todo
  }

}


export default addTodo
