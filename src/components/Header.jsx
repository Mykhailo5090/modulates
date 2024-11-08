import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ firstName, lastName }) => (
  <header className="header">
    <h1>{firstName} {lastName}</h1>
    <nav className="navigation">
      <Link className="nav__item" to="/page1">Page 1</Link>
      <Link className="nav__item" to="/page2">Page 2</Link>
    </nav>
  </header>
);

export default Header;
