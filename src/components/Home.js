import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import AddBooks from './addBooks';
import BookList from './BookList';

const Home = () => {
  const books = useSelector((state) => state.book.books);

  const dispatch = useDispatch();
  const add = (book) => {
    dispatch(addBook(book));
  };

  return (

    <div>

      <BookList books={books} />
      <AddBooks addBooks={add} />
    </div>
  );
};

export default Home;
