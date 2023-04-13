import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import AddBooks from './addBooks';
import RemoveBooks from './removeBook';

const Home = () => {
  const books = useSelector((state) => state.book.books);

  const dispatch = useDispatch();
  const add = (book) => {
    dispatch(addBook(book));
  };
  const remove = (id) => {
    dispatch(removeBook(id));
  };

  return (

    <div>

      <RemoveBooks books={books} removeBook={remove} />
      <AddBooks addBooks={add} />
    </div>
  );
};

export default Home;
