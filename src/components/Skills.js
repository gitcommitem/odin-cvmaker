import React from 'react';
import '../styles/skills.css';

const Skills = () => {
  const inputs = [];

  for (let i = 0; i < 6; i++) {
    inputs.push(
      <input
        className='skills'
        typeof='text'
        placeholder='Skills or technology'
      />
    );
  }

  return <div>{inputs}</div>;
};

export default Skills;
