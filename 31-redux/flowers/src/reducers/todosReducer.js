function todoReducer(state = {todos: ["Wash Dishes", "Iron Clothes"], selectedTodo: "", beef: "steak"}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {todos:[...state.todos, action.todo]})
    case 'REMOVE_TODO':

      const indexToFind = state.todos.findIndex((element) => element === action.todo)
      return Object.assign({}, state, {todos:[...state.todos.slice(0, indexToFind), ...state.todos.slice(indexToFind + 1)]})
    default:
      return state
  }
}

export default todoReducer
