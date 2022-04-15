import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <div>
        <input typeof='text' placeholder='First Name Last Name' readOnly />
        <input
          typeof='email'
          placeholder='firstnamelastname@gmail.com'
          readOnly
        />
        <input typeof='text' placeholder='firstnamelastname.com' readOnly />
      </div>
    );
  }
}

export default Header;
