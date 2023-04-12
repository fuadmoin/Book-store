import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';

const Home = () => {
  const books = useSelector((state) => state.book.books);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else if (e.target.name === 'author') {
      setAuthor(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(addBook({ title, author, id: uuidv4() }));
      setTitle('');
      setAuthor('');
    }
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
          <button type="button" onClick={() => dispatch(removeBook(book.id))}>Remove</button>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input name="author" type="text" placeholder="author" value={author} onChange={handleChange} />
        <input name="title" type="text" placeholder="title" value={title} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Home;
