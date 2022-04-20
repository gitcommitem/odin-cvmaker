import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <div>
      <input
        className='header'
        typeof='text'
        placeholder='Firstname Lastname'
        autoFocus
      />
      <input
        className='header'
        typeof='email'
        placeholder='fullname@gmail.com'
      />
      <input className='header' typeof='url' placeholder='fullname.com' />
    </div>
  );
};

export default Header;
