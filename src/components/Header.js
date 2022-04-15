import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
  render () {
    return (
      <div>
        <input
          className='header'
          typeof='text'
          placeholder='First Name Last Name'
          readOnly
        />
        <input
          className='header'
          typeof='email'
          placeholder='fullname@gmail.com'
          readOnly
        />
        <input
          className='header'
          typeof='url'
          placeholder='fullname.com'
          readOnly
        />
      </div>
    );
  }
}

export default Header;
