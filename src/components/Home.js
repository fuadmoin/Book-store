import React from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../redux/books/booksSlice';
import AddBooks from './addBooks';
import BookList from './BookList';

const Home = () => {
  const dispatch = useDispatch();
  const add = (book) => {
    dispatch(addBooks(book));
  };

  return (

    <div>

      <BookList />
      <br />
      <hr />
      <AddBooks addBooks={add} />
    </div>
  );
};

export default Home;
