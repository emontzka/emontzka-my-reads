import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

import BookShelf from './BookShelf';
import SearchPage from './SearchPage';
import HomePage from './HomePage';



class BooksApp extends React.Component {
  constructor() {
    super();
    this.updateBook = this.updateBook.bind(this);
    this.mapBookToShelf = this.mapBookToShelf.bind(this);

  }

  state = {
    showSearchPage: false,
    books: [],
    shelves : [
      {
        id: 'currentlyReading',
        title: 'Currently Reading'
      },
      {
        id: 'wantToRead',
        title: 'Want to Read'
      },
      {
        id: 'read',
        title: 'Read'
      }
    ]
  }



  // Get all books on mount
  componentDidMount() {
    BooksAPI.getAll()
    .then(response => {
      this.setState(() => ({
        books: response
      }))
    });
  }

  updateBook(book,shelf) {
    BooksAPI.update(book, shelf)
    .then(response => {
      BooksAPI.getAll()
      .then(response => {
        this.setState(() => ({
          books: response
        }))
      });
    })
  }

  // create object for determining if a search result is already shelved
  mapBookToShelf(books){
    const bookObj = {}
    books.map(book => {
      bookObj[book.id] = book.shelf
    })
    return bookObj;
  }

  render() {
    const { books, shelves } = this.state;
    const bookObj = this.mapBookToShelf(books);

    return (
      <div className="app">
        <Router>
          <div>
            <Route
              exact path="/"
              render={() => (
                <HomePage
                  shelves={shelves}
                  books={books}
                  updateBook={this.updateBook}
                />
              )}
            />
            <Route
              path="/search"
              render={() => (
                <SearchPage
                  shelves={shelves}
                  books={books}
                  updateBook={this.updateBook}
                  bookObj={bookObj}
                />
              )}
            />
          </div>
        </Router>
      </div>
    )
  }
}

export default BooksApp
