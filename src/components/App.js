import React, { Component } from 'react';
import './App.css';

import logo from '../assets/nancares_logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NanCares</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Coming soon!!!</p>
      </div>
    );
  }
}

export default App;
