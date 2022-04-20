import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import './styles/app.css';
import Skills from './components/Skills';

const App = () => {
  return (
    <div id='page-cont'>
      <div id='inner-cont'>
        <section id='header'>
          <Header />
          <hr></hr>
        </section>
        <section id='experience'>
          <h3>Experience</h3>
          <Experience />
          <Experience />
          <Experience />
        </section>
        <section id='education'>
          <h3>Education</h3>
          <Education />
        </section>
        <section id='skills'>
          <h3>Skills</h3>
          <Skills />
        </section>
      </div>
    </div>
  );
};

export default App;
