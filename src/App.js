import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React! HOmie</h1>
        </header>
        <p className="App-intro">
          <code>Noo!</code>To get started Mr. Meseeks!!!, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
