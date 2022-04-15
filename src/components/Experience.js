import React, { Component } from 'react';

class Experience extends Component {
  render () {
    return (
      <div>
        <div>
          <input typeof='text' placeholder='Job Title' readOnly />
          <input typeof='text' placeholder='Company Name' readOnly />
          <input typeof='text' placeholder='Year' readOnly />
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
