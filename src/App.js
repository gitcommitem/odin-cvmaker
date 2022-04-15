import React, { Component } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Experience />
        <Education />
      </div>
    );
  }
}

export default App;
