function booksReducer(state =
  { list: [],
    selectedBook: {},
    cart: []}
  , action) {
   switch (action.type) {
     case "SHOW_BOOK":
     /// grab all the state
     // change selected book
     // return newState
       return Object.assign({}, state, { selectedBook: action.book})
     case "ADD_TO_CART":
      return Object.assign({}, state, { cart: [...state.cart, action.book] })
     default:
       return state
   }
}

export default booksReducer

/*

{
  type: "SOME_BEEF",
  payload: "BEEF"
}



*/
