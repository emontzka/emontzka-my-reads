import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import BookShelf from './BookShelf';

export default class HomePage extends Component {
  render() {
    const {shelves, books, updateBook } = this.props;
    return (
      <div className="list-books">
      <div className="list-books-title">

        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          {shelves.map((shelf,index) => {
            return <BookShelf key={index} shelf={shelf} shelves={shelves} books={books} updateBook={updateBook} />
          })}
        </div>
      </div>
     
      <Link to="/search" className="open-search">
        <button >Add a book</button>
      </Link>
    </div>
    )
  }
}

HomePage.propTypes = {
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func
}
