import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
  render () {
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
  }
}

export default Header;
