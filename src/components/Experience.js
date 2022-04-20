import React from 'react';
import '../styles/experience.css';

const Experience = () => {
  return (
    <div className='job-item'>
      <div className='job-info'>
        <input typeof='text' placeholder='Job Title' id='title' />
        <input typeof='text' placeholder='Company Name' id='company' />
        <div class='date-range'>
          <input className='dates' typeof='text' placeholder='Start Year' />
          <p>-</p>
          <input className='dates' typeof='text' placeholder='End Year' />
        </div>
      </div>
      <ul>
        <li>
          <input typeof='text' placeholder='Job duties' />
        </li>
        <li>
          <input typeof='text' placeholder='Job duties' />
        </li>
        <li>
          <input typeof='text' placeholder='Job duties' />
        </li>
      </ul>
    </div>
  );
};

export default Experience;
