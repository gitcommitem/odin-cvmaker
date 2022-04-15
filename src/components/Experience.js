import React, { Component } from 'react';
import '../styles/experience.css';

class Experience extends Component {
  render () {
    return (
      <div className='job-item'>
        <div className='job-info'>
          <input typeof='text' placeholder='Job Title' id='title' readOnly />
          <input
            typeof='text'
            placeholder='Company Name'
            id='company'
            readOnly
          />
          <div class='date-range'>
            <input
              className='dates'
              typeof='text'
              placeholder='Start Year'
              readOnly
            />
            <p>-</p>
            <input
              className='dates'
              typeof='text'
              placeholder='End Year'
              readOnly
            />
          </div>
        </div>
        <ul>
          <li>
            <input typeof='text' placeholder='Job duties' readOnly />
          </li>
          <li>
            <input typeof='text' placeholder='Job duties' readOnly />
          </li>
          <li>
            <input typeof='text' placeholder='Job duties' readOnly />
          </li>
        </ul>
      </div>
    );
  }
}

export default Experience;
