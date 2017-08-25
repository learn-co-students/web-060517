// A reducer is a pure function
// It takes in state and action and will return some new information
// Assume that the action coming in is "ADD_TODO"

/// state = [] OR state = { todos: [], }
function todoReducer(state = [1,2,3,4,5,6], action) {

  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo]
    case "REMOVE_TODO":
      const newState = state.filter((element) => {
        return element != action.todo
      })
      return newState
    default:
    console.log("YOU MESSED UP SON")
      return state
  }


}


export default todoReducer
