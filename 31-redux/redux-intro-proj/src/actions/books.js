export function showBook(book) {
  return {
    type: "SHOW_BOOK",
    book
  }
}

export function addToCart(book) {
  return {
    type: "ADD_TO_CART",
    book
  }
}


export default { showBook, addToCart }


// ACTION CREATORS
