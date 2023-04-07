import React from 'react';

const Home = () => {
  const books = [
    { title: 'Example2', author: 'Hashim' },
    { title: 'Example3', author: 'Semira' },
    { title: 'Example4', author: 'Hafsa' },
    { title: 'Example5', author: 'Fuad' },
  ];
  return (
    <div>

      { books.map((book) => (
        <div key={book.title}>
          <span>
            author:
            {book.author}
          </span>
          {' '}
          <span>
            title:
            {book.author}
          </span>
          {' '}

        </div>
      ))}
      <form>
        <input type="text" placeholder="author" />
        <input type="text" placeholder="title" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Home;
