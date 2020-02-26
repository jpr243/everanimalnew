import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>
        <Link to='/'>
          <i className='fa fa-heart-o'></i> Everanimal
        </Link>
      </h1>
      <ul>
        <li>
          <a href='!#'>Your Profile</a>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
