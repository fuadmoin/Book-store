import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

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
      addBooks({ title, author, id: uuidv4() });
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div>
      {' '}
      <form onSubmit={handleSubmit}>
        <input name="author" type="text" placeholder="author" value={author} onChange={handleChange} />
        <input name="title" type="text" placeholder="title" value={title} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
AddBooks.propTypes = {
  addBooks: PropTypes.func.isRequired,
};
export default AddBooks;
