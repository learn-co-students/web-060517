import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'
import Menu from './components/Menu'
import GoogleBooks from './services/googleBooksApi'
import BookList from './components/BookList'
import BookDetail from './components/BookDetail'
import { showBook } from './actions/books'
import { connect } from 'react-redux'
class App extends Component {


  state = {
    searchBook:"suspense",
    books: [],
    selectedBook:{},
    booksInCart: []

  }

  addBook = (book) => {
    this.setState({
      selectedBook: book
    })
  }

  componentDidMount() {
    GoogleBooks.getCategory(this.state.searchBook)
      .then((json) => this.setState({ books: json.items }))
  }

  handleSearch = () => {
    GoogleBooks.search(this.state.searchBook)
      .then((json) => this.setState({ books: json.items }))
  }

  handleSearchInputChange = (e) => {

    this.setState({
      searchBook: e.target.value
    })
  }

  handleAddToCart = (book) => {
    this.setState({
      booksInCart: [...this.state.booksInCart, book]
    })
  }


  render() {

    console.log(this.props)
    return (
      <div>
        <Menu handleSearch={this.handleSearch} handleSearchInputChange={this.handleSearchInputChange} booksInCart={this.props.booksInCart.length}/>
        <Grid>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={9}>
            <h3>{this.state.searchBook.toUpperCase()}</h3>
            <BookList books={this.state.books}/>
          </Grid.Column>
          <Grid.Column width={6}>
            <Grid.Row>
              {this.props.someBook.title ? <BookDetail inCart={this.state.booksInCart.filter((e) => e.title === this.props.someBook).length > 0} {...this.props.someBook} /> : null}
            </Grid.Row>
          </Grid.Column>
        </Grid>

        <div>
        </div>
      </div>
    );
  }
}





//MISSION: I WANT TO TAKE A BOOK AND ADD IT TO STORE AS SELCTED Book
// WE WROTE A FUNCTION/ ACTION that allows us to do this
// ONCE WE DISPATCH THIS ACTION OUR STORE IS CHANGED
// NOW BIG QUESTION HOW DO WE DISPATCH THAT ACTION






function mapStateToProps(state) {

  return {
    someBook:state.books.selectedBook,
    booksInCart: state.books.cart
  }
}


/// mapStateToProps && mapDispatchToProps
export default connect(mapStateToProps)(App);
