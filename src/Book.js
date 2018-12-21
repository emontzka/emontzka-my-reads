import React from "react";
import BookShelfChanger from './BookShelfChanger';

export default function Book(props) {
  const {book, shelf, shelves, updateBook} = props
  const imageUrl = book.imageLinks ? book.imageLinks.smallThumbnail : '';
  console.log('image is ', imageUrl)
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${imageUrl})`
            }}
          />
          <BookShelfChanger shelf={shelf} shelves={shelves} book={book} updateBook={updateBook} />
        </div>
        <div className="book-title">{book.title}</div>
        { book.authors && 
        <div className="book-authors">{book.authors.join(', ')}</div>
        }
      </div>
    </li>
  );
}
