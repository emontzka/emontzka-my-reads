import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types'

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }
  state={
    searchTerm : '',
    searchResponse : []
  }

  handleSearch(event) {
    const val = event.target.value
    this.setState({
      searchTerm: val
    })
    BooksAPI.search(val)
    .then(response => {
      this.setState({
        searchResponse: response
      })
    })
  }


  render() {
    const { shelves, books, updateBook, bookObj } = this.props;
    const { searchResponse } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/"><button className="close-search">Close</button></Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.handleSearch} value={this.state.searchTerm} />
          </div>
        </div>
        <div className="search-books-results">
          {searchResponse && searchResponse.error &&
            <h2>There are no results</h2>
          }

          <ol className="books-grid">
            {searchResponse && searchResponse.length > 0 &&
              searchResponse.map((book, index) => {
                // use object to assign shelf property to the book
                bookObj[book.id] ? book.shelf = bookObj[book.id] : book.shelf = 'none';
                return <Book key={book.id} book={book} shelf={book.shelf} shelves={shelves} updateBook={updateBook} />
              })
            }
          </ol>


        </div>
      </div>
    )
  }
}

SearchPage.propTypes = {
  bookObj : PropTypes.object.isRequired,
  books : PropTypes.array.isRequired,
  shelves : PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired
}
