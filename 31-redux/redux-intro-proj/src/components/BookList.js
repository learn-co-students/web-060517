import React from 'react'
import { Item } from 'semantic-ui-react'
import BookCard from './BookCard'

const BookList = ({ books, addBook }) => {
  const bookCards = books.slice(0,8).map((book, index) => {

    return (
      <Item.Group divided key={index}>
        <BookCard  {...book}/>
      </Item.Group>
    )
  })

  return (<div>{bookCards}</div>)

}


export default BookList
