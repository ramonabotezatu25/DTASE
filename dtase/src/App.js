import React, { Component } from 'react';
import './App.css';
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      // <div class="ms-Fabric" dir="ltr">
      //   <div className="ms-Grid App" style={{height:'100%'}} dir="ltr">
      //       <Routes />
      //     </div>
      //   </div>
      <div class="App">
          <Routes />
      </div>
    );
  }
}

export default App;
