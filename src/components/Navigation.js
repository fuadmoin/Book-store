import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './book.css';

const links = [
  { path: '/', name: 'Home' },
  { path: '/categories', name: 'Categories' },
];
const Navigation = () => {
  const navStyle = {
    listStyle: 'none',
    textDecoration: 'none',
    marginLeft: '2.9rem',
    color: 'black',
  };

  return (
    <div className="navigation">

      <ul className="nav">
        <span> Bookstore CMS</span>
        {links.map((link) => (
          <li className="nav-li" key={link.name}>
            <NavLink style={navStyle} to={link.path}>{link.name}</NavLink>
          </li>
        ))}
        <div className="logo-container">
          <FaUser className="logo" />
        </div>
      </ul>
    </div>
  );
};

export default Navigation;
