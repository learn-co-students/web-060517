const todos = (state = { list: []}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, { todos: [...state.todos, action.payload]})
    default:
      return state
  }
}

export default todos
// export default todoReducer
