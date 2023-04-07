import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', name: 'Home' },
  { path: '/categories', name: 'Categories' },
];
const Navigation = () => (
  <div>

    <ul>
      {links.map((link) => (
        <li key={link.name}>
          <NavLink to={link.path}>{link.name}</NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Navigation;
