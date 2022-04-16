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
        />
        <input
          className='education'
          typeof='text'
          placeholder='Bachelors of Science, Major'
        />
        <input className='education' typeof='text' placeholder='Minor' />
      </div>
    );
  }
}

export default Education;
