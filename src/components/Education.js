import React from 'react';
import '../styles/education.css';

const Education = () => {
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
};

export default Education;
