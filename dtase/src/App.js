import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from '../src/containers/LoginPageContainer/LoginPage'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <img src={logo} className="App-logo" alt="logo" />
      {/* </header> */}
      <LoginPage></LoginPage>
    </div>
  );
}

export default App;
