import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Buttons from './Buttons';

const BookList = ({ books }) => {
  const dispatch = useDispatch();
  const remove = (id) => {
    dispatch(removeBook(id));
  };
  return (

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
          <Buttons removeBook={remove} id={book.id} />
        </div>
      ))}
    </div>
  );
};
BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
};
export default BookList;
