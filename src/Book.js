import React from "react";
import BookShelfChanger from './BookShelfChanger';

export default function Book(props) {
  const {book, shelf, shelves, updateBook} = props
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`
            }}
          />
          <BookShelfChanger shelf={shelf} shelves={shelves} book={book} updateBook={updateBook} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.join(', ')}</div>
      </div>
    </li>
  );
}
