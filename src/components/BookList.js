import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, fetchBooks } from '../redux/books/booksSlice';
import Buttons from './Buttons';

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

    <div>
      {!book.loading && books.length ? (
        books.map((book) => (
          <div key={book.item_id}>
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
            <Buttons removeBook={remove} id={book.item_id} />
          </div>

        ))) : null}

    </div>
  );
};

export default BookList;
