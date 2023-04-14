import React from 'react';
import { NavLink } from 'react-router-dom';
import './book.css';
import { ReactComponent as Logo } from '../img/user-solid.svg';

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
        <Logo className="logo" />
      </ul>
    </div>
  );
};

export default Navigation;
