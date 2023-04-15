import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import './book.css';

const AddBooks = ({ addBooks }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
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
      addBooks({
        title, author, item_id: uuidv4(), category: 'Action',
      });
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div>
      {' '}
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="addNew">ADD NEW BOOK</h2>
        <input className="author-input" name="author" type="text" placeholder="Author" value={author} onChange={handleChange} />
        <input className="author-input" name="title" type="text" placeholder="Title" value={title} onChange={handleChange} />
        <button className="btn-addBook" type="submit">ADD BOOk</button>
      </form>
    </div>
  );
};
AddBooks.propTypes = {
  addBooks: PropTypes.func.isRequired,
};
export default AddBooks;
