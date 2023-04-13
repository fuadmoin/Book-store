import React from 'react';
import PropTypes from 'prop-types';

const RemoveBooks = ({ books, removeBook }) => (
  <div>
    { books.map((book) => (
      <div key={book.id}>
        <span>
          author:
          {book.author}
        </span>
        {'  '}
        <span>
          title:
          {book.title}
        </span>
        {'  '}
        <button type="button" onClick={() => removeBook(book.id)}>Remove</button>
      </div>
    ))}
  </div>
);
RemoveBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
};
export default RemoveBooks;
