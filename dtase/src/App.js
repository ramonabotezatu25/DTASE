import React, { Component } from 'react';
import './App.css';
import LoginPage from '../src/containers/LoginPageContainer/LoginPage'
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      <div className="App ms-Grid" dir="ltr">
        <Routes/>
      </div>
    );
  }
}

export default App;
