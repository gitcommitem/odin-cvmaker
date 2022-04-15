import React, { Component } from 'react';

class Education extends Component {
  render () {
    return (
      <div>
        <h3>Education</h3>
        <input typeof='text' placeholder='University Name' readOnly />
        <input typeof='text' placeholder='Degree' readOnly />
      </div>
    );
  }
}

export default Education;
