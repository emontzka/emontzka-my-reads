import React from 'react'
import Book from './Book'

export default function BookShelf(props) {
  const {books, shelf, shelves, updateBook} = props
  const filteredBooks = books.filter(book => {
    return book.shelf === props.shelf.id
  });

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {filteredBooks.map((book, index) => {
            return <Book key={book.id} book={book} shelf={shelf.id} shelves={shelves} updateBook={updateBook} />
          })}
          
        </ol>
      </div>
                      
    </div>
  )
}

