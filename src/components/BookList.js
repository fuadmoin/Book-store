import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, fetchBooks } from '../redux/books/booksSlice';
import Buttons from './Buttons';
import './book.css';

const BookList = () => {
  const books = useSelector((state) => state.book.books);
  const book = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const remove = (id) => {
    dispatch(removeBook(id));
  };

  return (

    <div className="book-container">
      {!book.loading && books.length ? (
        books.map((book) => (
          <div className="books" key={book.item_id}>
            <div className="right">
              <span className="category">
                {book.category}
              </span>
              <span className="title">

                {book.title}
              </span>
              {'  '}
              <span className="author">

                {book.author}
              </span>
              {'  '}
              <Buttons removeBook={remove} id={book.item_id} />
            </div>
            <div className="Oval-2" />
            <div className="percentage">
              <span className="percentage-number"> 64%</span>
              <span className="percentage-text">Completed</span>
            </div>
            <div className="current-chapter">
              <span className="current-chapter-text">CURRENT CHAPTER</span>
              <span className="current-chapter-number">Chapter 17</span>
              <button type="button" className="update-progress">UPDATE PROGRESS</button>
            </div>
          </div>

        ))) : null}

    </div>
  );
};

export default BookList;
