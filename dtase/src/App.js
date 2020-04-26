import React, { Component } from 'react';
import './App.css';
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
          <div id="App" className="App">
              <Routes />
          </div>
    );
  }
}

export default App;
