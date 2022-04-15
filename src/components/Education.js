import React, { Component } from 'react';
import '../styles/education.css';

class Education extends Component {
  render () {
    return (
      <div>
        <input
          className='education'
          typeof='text'
          placeholder='University Name'
          readOnly
        />
        <input
          className='education'
          typeof='text'
          placeholder='Bachelors of Science, Major'
          readOnly
        />
        <input
          className='education'
          typeof='text'
          placeholder='Minor'
          readOnly
        />
      </div>
    );
  }
}

export default Education;
